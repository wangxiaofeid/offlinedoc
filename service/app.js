const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const logger = require('koa-logger');
const serve = require('koa-static');
const koaBody = require('koa-body');
const router = require('koa-router')();
const cors = require('koa-cors');
const { app, remote } = require('electron');
const port = process.env.port || 3232;
global.basePath = `${app.getPath('userData')}/.cache`;
const Build = require('./build');
const deleteDoc = require('./build/deleteDoc');

function createServer() {
  const app = new Koa();

  app.use(logger());
  app.use(koaBody());
  app.use(serve(path.resolve(__dirname, '../public')));
  // app.use(serve(path.resolve(__dirname, '../.cache')));
  app.use(serve(path.resolve(global.basePath)));
  app.use(cors());

  const error = (ctx) => {
    ctx.type = 'json';
    ctx.body = {
      code: 0,
      msg: '请示失败'
    }
  }

  router.get('/api/menus', async (ctx, next) => {
    ctx.type = 'json';
    ctx.body = fs.createReadStream(path.join(global.basePath, './docList.json'));
  })

  router.post('/api/build', async (ctx, next) => {
    console.log(ctx.request.body);
    const { entry, rule = '', cookie } = ctx.request.body;
    if (!entry) {
      return await next()
    }
    const result = await new Build(entry, rule, cookie, true).doBuild();
    ctx.type = 'json';
    ctx.body = {
      code: result
    };
  }, error)

  router.get('/api/delete', async (ctx, next) => {
    const result = await deleteDoc(ctx.request.query.dir);
    ctx.type = 'json';
    ctx.body = {
      code: result
    }
  })

  app.use(router.routes());

  app.listen(port);
}

module.exports = createServer;