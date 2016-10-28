const {app, BrowserWindow} = require('electron')

const execute = function (argv, callback) {
  // gui not implemented
  createWindow()
}
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({backgroundColor: '##3F51B5', width: 800, height: 600, frame: false})
  // and load the index.html of the app.
  win.loadURL(`http://localhost:4567/`)

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

module.exports = {
  execute: execute
}
