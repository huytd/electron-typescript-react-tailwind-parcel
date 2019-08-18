const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = false;
const { ipcMain } = require('electron');

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
      width: 900,
      height: 600,
      titleBarStyle: "hiddenInset",
      webPreferences: {
        nodeIntegration: true
      }
    });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:1234"
      : `file://${path.join(__dirname, "/dist/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});