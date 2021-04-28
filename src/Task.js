import React from 'react';
import './css/Task.css';
import App from './App.js';
import {Link} from 'react-router-dom';

import play_button from "./assets/icons/start_all_logo.png";
import stop_button from "./assets/icons/stop_task_logo.png";
import edit_button from "./assets/icons/edit_task_logo.png";
import delay_button from "./assets/icons/edit_delay_logo.png";
import quick_task_button from "./assets/icons/quick_task_logo.png";
import delete_button from "./assets/icons/delete_task.png";
import create_button from "./assets/icons/create_task_logo.png";

import table_play from "./assets/icons/table_play.png";
import table_stop from "./assets/icons/table_stop.png";
import table_edit from "./assets/icons/table_edit.png";
import table_delete from "./assets/icons/table_delete.png";

class Task extends React.Component{
   constructor(){
    super()
    this.state = {
    }
  }

  componentDidMount(){

  }

  render(){
	return(
        <div className="tasks-container pt-1">
            <div className="control-panel-wrapper row mx-auto">
                <div className="left-control-panel col-2 pt-3">
                    <h1 className="text-center">Tasks</h1>
                    <p className="clock text-center">12:12:59</p>
                </div>
                <div className="middle-control-panel col-4 pt-3">
                    <p className="welcome-message m-0">Welcome, <b>Bluu#1234</b></p>
                    <p className="m-0">Tasks - <span style={{color: '#F6FB06'}}>10</span></p>
                    <p className="m-0" >Running Tasks - <span style={{color: '#0DFE5F'}}>9</span></p>
                </div>
                <div className="col-1"></div>
                <div className="right-control-panel col-5">
                    <ul className="icons-wrapper pt-4 mr-0">
                        <li className="icon"><img src={play_button} /></li>
                        <li className="icon"><img src={stop_button} /></li>
                        <li className="icon"><img src={edit_button} /></li>
                        <li className="icon"><Link to="/delay_task"><img src={delay_button} /></Link></li>
                        <li className="icon"><Link to="/quick_task"><img src={quick_task_button} /></Link></li>
                        <li className="icon"><img src={delete_button} /></li>
                        <li className="icon"><img src={create_button} /></li>
                    </ul>
                </div>
            </div>

            <div className="table-heading row mx-auto pt-2">
                <div className="table-heading-wrapper mx-auto">
                    <div className="table row">
                        <div className="col-1 pt-2">
                            <h1 className="headings text-center">Site</h1>
                        </div>

                        <div className="col-1 pt-2">
                            <h1 className="headings text-center">Size</h1>
                        </div>

                        <div className="col-3  pt-2">
                            <h1 className="headings text-center">Product</h1>
                        </div>

                        <div className="col-1 pt-2">
                            <h1 className="headings text-center">Profile</h1>
                        </div>

                        <div className="col-1 pt-2">
                            <h1 className="headings text-center">Proxies</h1>
                        </div>

                        <div className="col-3 pt-2">
                            <h1 className="headings text-center">Status </h1>
                        </div>

                        <div className="col-2  pt-2">
                            <h1 className="headings text-center">Actions</h1>
                        </div>
                    </div>

                    <div className="individual-task-wrapper mx-auto">
                        <div className="individual-task row">
                            <div className="col-1 ml-2">
                                <p className="headings text-center">Custom Shopify Safe</p>
                            </div>

                            <div className="col-1 ">
                                <p className="headings-other text-center">7W</p>
                            </div>

                            <div className="col-3 ">
                                <p className="headings-other text-center">Jordan 1 High OG</p>
                            </div>
                            <div className="col-1 ">
                                <p className="headings-other text-center">ExathBluu</p>
                            </div>
                            <div className="col-1 ">
                                <p className="headings-other text-center">ExathProxies</p>
                            </div> 
                            <div className="col-3 ">
                                <p className="headings-other text-center"><span style={{color: '#FA0606'}}>Waiting for Restocks</span></p>
                            </div>
                            <div className="col-2">
                                <ul className="icons-wrapper  mr-0">
                                    <li className="icon"><img src={table_play} /></li>
                                    <li className="icon"><img src={table_stop} /></li>
                                    <li className="icon"><img src={table_edit} /></li>
                                    <li className="icon"><img src={table_delete} /></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    
                
                </div>

                
            </div>



            {/*
            
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

            </div> */}
        </div>
	);

    }
	

}

export default Task;


