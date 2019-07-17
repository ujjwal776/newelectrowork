const electron = require('electron');
const url = require('url');
const path = require('path');
const { app, BrowserWindow } = electron;
let mainWindow;
// Listen for App to be Ready!
app.on('ready', function() {
    // create new Window
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

});