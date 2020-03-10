const {app,BrowserWindow,ipcMain} = require('electron');
const electronEjs = require("electron-ejs");
const ejs = new electronEjs({"key": "my value"}, {});
const path = require('path');

let mainWindow;

app.allowRendererProcessReuse = true;

app.on("ready", function() {
    mainWindow = new BrowserWindow({webPreferences: {preload: path.join(__dirname,"/preload.js")}});
    mainWindow.loadURL('file://' + __dirname +  '/views/mainWindow.ejs');
});