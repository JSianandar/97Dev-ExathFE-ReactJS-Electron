const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;
const path = require("path");
const isDev = require("electron-is-dev");
const ipc = ipcMain ;
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow(
        { 
            width: 1250, 
            height: 750,
            resizable: false,
            frame: false,
            webPreferences: {
                contextIsolation: false
            },
            frame:false
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
    ipc.on('closeApp', ()=>{
        console.log('clicked on close btn')
        mainWindow.close();
    });

    //Close app
    ipc.on('minimizeApp', ()=>{
        console.log('clicked on minimzie btn')
        mainWindow.minimize();
    });
    
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