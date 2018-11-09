const { app, BrowserWindow } = require('electron');
const createService = require('./service');

function createWindow () {
  // 创建浏览器窗口
  mainWindow = new BrowserWindow({ width: 1024, height: 768 })
  mainWindow.setFullScreen(true)
  // 然后加载应用的 index.html。
  mainWindow.loadURL('http://localhost:3232/')
}

app.on('ready', createWindow)