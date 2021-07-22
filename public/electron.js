const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;
const isDev = require("electron-is-dev");
let mainWindow;
const path = require("path");
const fs = require("fs");

function createWindow() {
    mainWindow = new BrowserWindow(
        { 
            width: 1250, 
            height: 750,
            resizable: false,
            frame: true,
            webPreferences: {
                contextIsolation: false,
                enableRemoteModule: true,
                nodeIntegration: false
            }
        }
    );
    mainWindow.setMenuBarVisibility(false);
    mainWindow.loadURL(
        isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow = null));


    //Close app
    ipcMain.on('closeApp', ()=> {
        mainWindow.close();
    });

    //Minimize app
    ipcMain.on('minimizeApp', ()=> {
        mainWindow.minimize();
    });

    //Open Harvester
    ipcMain.on('harvesterOpen', ()=> {
        
    })
    
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
