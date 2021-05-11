const { ipcRenderer } = require('electron');
const ipc = ipcRenderer;

//Close App
closeBtn.addEventListener('click', ()=>{
	ipc.send('closeApp')
})

//Minimize App
minimizeBtn.addEventListener('click', ()=>{
	ipc.send('minimizeApp')
})