const electron = require('electron');

const {app,BrowserWindow} = electron

let mainWindow;

app.on("ready", function() {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL('file://' + __dirname +  '/views/mainWindow.html');
});