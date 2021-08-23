import React from 'react';
import './css/TitleBar.css';

import minimize_logo from './assets/icons/titlebar/minus.svg';
import close_logo from './assets/icons/titlebar/close.svg';

const ipcRenderer = window.require('electron').ipcRenderer

const TitleBar = () => {

    const minimizeApp = () => {
        ipcRenderer.send('minimizeApp')
    }

    const closeApp = () => {
        ipcRenderer.send('closeApp')
    }

    return (
        <div className="title-container">
            <div className="button-wrapper">
                <div id="minimizeBtn" onClick={minimizeApp} className="minimize-btn"><img className="mx-auto d-block" src={minimize_logo}/></div>
                <a id="closeBtn" onClick={closeApp} className="close-btn"><img className="mx-auto d-block" src={close_logo}/></a>
            </div>
        </div>   
    )
}

export default TitleBar;