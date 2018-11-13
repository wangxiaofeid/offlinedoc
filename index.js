const { app, BrowserWindow } = require('electron');
// const createService = require('./static/index.js');
const createService = require('./service/index.js');

function createWindow () {
  // 创建服务端
  createService(app);

  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({ width: 1100, height: 768 })
  // mainWindow.setFullScreen(true)
  // 然后加载应用的 index.html。
  mainWindow.loadURL('http://localhost:3232/');

  mainWindow.on('closed', function () {
    aboutWindow = null
  })
}

app.on('ready', createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
      app.quit()
  }
})