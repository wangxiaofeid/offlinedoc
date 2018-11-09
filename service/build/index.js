const URL = require('url');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const rimraf = require('rimraf');
const b64_md5 = require('../util').b64_md5;
const { insert } = require('../db');

function isImage(url = '') {
  return url.endsWith('jpg') || url.endsWith('png') || url.endsWith('jpeg') || url.endsWith('gif') || url.endsWith('webp') || url.endsWith('svg') || url.endsWith('eot') || url.endsWith('woff') || url.endsWith('ttf')
}

class build {
  constructor(entry, rule, cookie = '', replace) {
    this.waitList = [entry];
    this.pathMap = {};
    this.errorMap = {};
    this.config = {
      dir: b64_md5(entry).slice(0, 22),
      name: entry
    }
    this.entry = entry;
    this.rule = rule || entry || '';
    this.cookie = cookie;
    this.replace = replace;
    this.dirpath = path.resolve(__dirname, `../../.cache/doc/${this.config.dir}`);
  }

  /**
   * 开始生成网站
   */
  async doBuild() {
    // 判断是否已存在
    if (fs.existsSync(this.dirpath)) {
      if (!this.replace) {
        return 0
      }
      await new Promise((resolve, reject) => {
        rimraf(this.dirpath, {}, (err) => {
          if (err) {
            return reject()
          }
          resolve()
        })
      })
    }

    fs.mkdirSync(this.dirpath);

    while (this.waitList.length > 0) {
      console.log(this.waitList.length);
      const unshift = this.waitList.shift();
      if (this.pathMap[unshift]) {
        continue;
      }
      await this.downloadFile(unshift);
    }
    this.config.entry = this.pathMap[this.entry];
    if (!this.config.entry) {
      return 0
    }
    insert(this.config);
    return this.config
  }

  /**
   * 开始下载文件
   */
  async downloadFile(url) {
    console.log('download', url);
    try {
      const fileName = this.getFileName(url);
      const isImg = isImage(url);

      const result = await axios.get(url, {
        headers: {
          'Cookie': this.cookie
        },
        responseType: isImg ? 'stream' : 'text',
        timeout: 10000,
        transformResponse: data => data
      });

      const ct = result.headers['content-type'];
      let data = result.data;
      if (ct.includes('text/html')) {
        return await this.saveHtml(this.getFileName(url, true), data, url);
      } else if (isImg) {
        data.pipe(fs.createWriteStream(path.join(this.dirpath, fileName)))
      } else if (url.endsWith('.css')) {
        data = data.replace(/url\(['"]*([a-zA-Z0-9\-&#\?=_:./]+)['"]*\)/g, (match, group) => {
          const link = this.addNewUrl(url, group);
          if (link) {
            return `url(${this.getFileName(link)})`
          } else {
            return match
          }
        })
      }
      await this.saveFile(fileName, data);
      return this.pathMap[url] = fileName;
    } catch (error) {
      this.errorMap[url] = this.errorMap[url] ? (this.errorMap[url] + 1) : 1;
      console.log(error, url);
      return
    }
  }
  
  /**
   * 保存文件
   */
  async saveFile(fileName, data) {
    return fs.appendFileSync(path.join(this.dirpath, fileName), data, {
      encoding: 'utf-8'
    })
  }
  
  /**
   * HTML分析保存
   */
  async saveHtml(fileName, data, url) {
    const $ = cheerio.load(data);
    const css = $('link[rel="stylesheet"]').toArray();
    const img = $('img').toArray();
    const script = $('script[src]').toArray();
    const herf = $('a').toArray();

    this.eachHtmlDom($, url, css, 'href');

    this.eachHtmlDom($, url, img, 'src');

    this.eachHtmlDom($, url, script, 'src');

    herf.forEach(item => {
      const link = item.attribs.href;

      if (!link || link == '/') { return };

      const abLink = this.addNewUrl(url, link, true);

      if (!abLink) { return };

      const abURL = new URL.URL(link, url);

      $(item).attr('href', `${this.getFileName(abLink, true)}${abURL.search}${abURL.hash}`);
    })
    this.saveFile(fileName, $.html());
    this.pathMap[url] = fileName;
    return
  }

  /**
   * 遍历html内部节点
   */ 
  eachHtmlDom($, baseUrl, arr = [], attrName = 'src') {
    arr.forEach(item => {
      const link = this.addNewUrl(baseUrl, $(item).attr(attrName));
      link && $(item).attr(attrName, this.getFileName(link));
    })
  }

  /**
   * 新增待下载资源链接
   */
  addNewUrl(baseUrl, url, b) {
    if (url.includes('base64')) {
      return false
    }
    const abURL = new URL.URL(url, baseUrl)
    const abLink = `${abURL.protocol}//${abURL.host}${abURL.pathname}`;
    if (b && abLink.indexOf(this.rule) == -1) {
      return false
    }
    if (!this.waitList.includes(abLink) && !(this.errorMap[abLink] && this.errorMap[abLink] > 2)) {
      this.waitList.push(abLink);
    }
    return abLink
  }
  
  /**
   * 获取文件保存的名称
   */
  getFileName(url, isHtml) {
    const pn = this.getPathname(url).split('/');
    let back = pn.length >= 0 ? pn.join('_') : 'index.html';
    return isHtml && !back.endsWith('.html') ? `${back}.html` : back;
  }
  
  /**
   * url的pathname
   */
  getPathname(url) {
    const u = URL.parse(url);
    return u.pathname || ''
  }
}

module.exports = build;