const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const { remove } = require('../db');

function deleteDoc(dir) {
  return new Promise((resolve, reject) => {
    try {
      if (!remove(dir)) {
        resolve(0);
        return;
      }
      rimraf(path.join(global.basePath, `/doc/${dir}`), {}, (err) => {
          if (err) {
            return resolve(0)
          }
          resolve(1)
        })
    } catch (err) {
      console.log(err);
      resolve(0);
    }
  })
}

module.exports = deleteDoc;