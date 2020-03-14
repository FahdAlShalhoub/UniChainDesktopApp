const {app,BrowserWindow,ipcMain} = require('electron');
const electronEjs = require("electron-ejs");
const ejs = new electronEjs({"key": "my value"}, {});
const path = require('path');
const fetch = require('node-fetch');

let mainWindow;

app.allowRendererProcessReuse = true;

app.on("ready", function() {
    mainWindow = new BrowserWindow({webPreferences: {preload: path.join(__dirname,"/preload.js")}});
    mainWindow.loadURL('file://' + __dirname +  '/views/mainWindow.ejs');
});

ipcMain.on("addCertificate",(event, newCertificate) => {
    fetch('http://localhost:3001/mempool/add',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCertificate)
    })
    .then(response => event.returnValue = response)
    .catch(error => event.returnValue = error)
});

ipcMain.on("getMempool",(event,args) => {
    fetch("http://localhost:3001/mempool")
    .then(async response => event.returnValue = await response.json())
    .catch(error => event.returnValue = error)
});

ipcMain.on("mineBlock",(event,args) => {
    fetch('http://localhost:3001/blockchain/addblock',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => {
        if(response.status >= 400){
            event.returnValue = "fail";
        } else {
            event.returnValue = "ok";
        }
    })
    .catch(error => event.returnValue = error)
});

ipcMain.on("searchBlock",(event,hash) => {
    fetch('http://localhost:3001/blockchain/search/' + hash)
    .then(async response => event.returnValue = await response.json())
    .catch(error => event.returnValue = error)
});

ipcMain.on("getBlockchain",(event,args) => {
    fetch("http://localhost:3001/blockchain")
    .then(async response => event.returnValue = await response.json())
    .catch(error => event.returnValue = error)
})