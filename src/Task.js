import React from 'react';
import './css/Task.css';
import App from './App.js'

const Task = () => {
	return(
    <div>
	    <div className="control-panel">
            <h1 className="task-title">Tasks</h1>
            <p className="time">12:12:59</p>
            <h1 className="welcome">Welcome,</h1>
            <h1 className="username">Bluu#1234</h1>
            <p className= "alltask">Tasks -</p>
            <p className= "runningtask">Running Tasks -</p>
            
            <div className="startalltask"></div>
            <div className="stopalltask"></div>
            <div className="edittask"></div>
            <div className="delaytask"></div>
            <div className="quicktask"></div>
            <div className="deletetask"></div>
            <div className="createtask"></div>
        </div>
        
        <div className="task-heading">
            <h1 className="task-site">Site</h1>
            <h1 className="task-size">Size</h1>
            <h1 className="task-product">Product</h1>
            <h1 className="task-profile">Profile</h1>
            <h1 className="task-proxies">Proxies</h1>
            <h1 className="task-status">Status</h1>
            <h1 className="task-actions">Actions</h1>
        </div>
        
        <div className="task-table">
            <h1 className="table-site">Custom Shopify</h1>
            <p className="table-site-quality">Safe</p>
            <h1 className="table-size">7W</h1>
            <h1 className="table-product">Jordan 1 High OG</h1>
            <h1 className="table-profile">ExathBluu</h1>
            <h1 className="table-proxies">ExathProxies</h1>
            <h1 className="table-status">Waiting for Restocks</h1>
            
            <div className="table-play"></div>
            <div className="table-stop"></div>
            <div className="table-edit"></div>
            <div className="table-delete"></div>
        </div>
	</div>
	);
	

}

export default Task;


