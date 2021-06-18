//const { ipcRenderer } = require('electron');
//const ipc = ipcRenderer;

//import * as electron from 'electron';
//const ipcRenderer = window.require("electron").ipcRenderer;

class TopBarFunction{
	closeApp(){
		//ipc.send('closeApp')
	}

	minimizeApp(){
		//ipcRenderer.send('minimizeApp')
	}
}

export default TopBarFunction;

{/*//Close App
document.getElementById('closeBtn').addEventListener('click', ()=>{
	
})

//Minimize App
document.getElementById('minimizeBtn').addEventListener('click', ()=>{
	ipc.send('minimizeApp')
})
*/}