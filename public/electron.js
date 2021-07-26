const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
const fs = require("fs");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ 
        width: 1250, 
        height: 750,
        resizable: false,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });

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
