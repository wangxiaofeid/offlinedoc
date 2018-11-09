const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const defaultPath = path.resolve(__dirname, '../../.cache/docList.json');
let cacheData = [];

if (!fs.existsSync(defaultPath)) {
  fs.mkdirSync(defaultPath);
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