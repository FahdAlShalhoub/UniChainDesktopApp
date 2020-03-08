const electron = require('electron');
const electronEjs = require("electron-ejs");
const ejs = new electronEjs({"key": "my value"}, {});

const {app,BrowserWindow} = electron

let mainWindow;

app.allowRendererProcessReuse = true;

app.on("ready", function() {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL('file://' + __dirname +  '/views/mainWindow.ejs');
});