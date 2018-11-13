const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const defaultPath = path.resolve(__dirname, '../../.cache/docList.json');
let cacheData = [];

try {
  fs.accessSync(defaultPath, fs.constants.R_OK | fs.constants.W_OK);
} catch (err) {
  fs.mkdirSync(path.resolve(__dirname, '../../.cache'));
  fs.appendFileSync(defaultPath, '[]');
}

try {
  const data = fs.readFileSync(defaultPath, 'utf8');
  cacheData = JSON.parse(data);
} catch (err) {
  console.log(err);
}

function write() {
  fs.writeFileSync(defaultPath, JSON.stringify(cacheData));
}

function insert(data) {
  try {
    const find = _.find(cacheData, i => i.dir == data.dir);
    if (find) {
      return true
    }
    cacheData.push(data);
    write();
    return true
  } catch (err) {
    console.log(err);
    return false
  }
}

function remove(dir) {
  try {
    _.remove(cacheData, i => i.dir == dir);
    write();
    return true
  } catch (err) {
    console.log(err);
    return false
  }
}

module.exports = {
  insert,
  remove
}