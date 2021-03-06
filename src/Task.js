import React from 'react';
import './css/Task.css';
import { Link } from 'react-router-dom';
import IndividualTask from './IndividualTask.js';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import play_button from "./assets/icons/start_all_logo.png";
import stop_button from "./assets/icons/stop_task_logo.png";
import edit_button from "./assets/icons/edit_task_logo.png";
import delay_button from "./assets/icons/edit_delay_logo.png";
import quick_task_button from "./assets/icons/quick_task_logo.png";
import delete_button from "./assets/icons/delete_task.png";
import create_button from "./assets/icons/create_task_logo.png";

import TitleBar from './TitleBar.js';
import EditAllTask from './EditAllTask';
import DelayTask from './DelayTask';
import QuickTask from './QuickTask';
import CreateTask from './CreateTask';
import DeleteAllTask from './DeleteAllTask';

const notifySuccess = (text, delay) => toast.success(text, {
    position: 'bottom-right',
    autoClose: delay,
    hideProgressBar: false
});

const notifyError = (text, delay) => toast.error(text, {
    position: 'bottom-right',
    autoClose: delay,
    hideProgressBar: false
});

class Task extends React.Component{
    constructor(props){
        super(props)
        var updateTaskStateValue = this.updateTaskStateValue.bind(this)
        var refreshPage = this.refreshPage.bind(this)
        this.state = {
            refreshPage: '',
            totalTasksCount: 0,
            monitorDelay: 0,
            retryDelay: 0,
            user: this.props.user
        }
    }

    updateTaskStateValue(key, value) {
        this.setState({[key]: value})
    }

    refreshPage() {
        this.setState({
            refreshPage : Math.floor(Math.random() * 99999)
        })
    }

    reloadPage() {
        window.location.reload()
    }

    handleStartAllTask = async (event) => {
        event.preventDefault();
        axios.get('http://exath.io/api/action?id=all&act=start')
        .then(async res => {
            /* Since task's status is not available yet, we will call reload page instead refreshing it.
            *  - This will hard reload the page (sort of like pressing ctrl + r), the reason is because
            *    refreshing the page by updating the state will only re-render the component if THERES a
            *    change in the state's data being called in the render() function hence why using the
            *    refreshPage() function will only re-render the page once task's status is implemented. 
            */
            notifySuccess('Successfully started all tasks', 2000)
            await new Promise(r => setTimeout(r, 1000))
            // this.refreshPage()
            this.reloadPage()
        }, error => {
            notifyError('Error while starting all tasks..', 3000)
        })
    }

    handleStopAllTask = async (event) => {
        event.preventDefault();
        axios.get('http://exath.io/api/action?id=all&act=stop')
        .then(async res => {
            /* Since task's status is not available yet, we will call reload page instead refreshing it.
            *  - This will hard reload the page (sort of like pressing ctrl + r), the reason is because
            *    refreshing the page by updating the state will only re-render the component if THERES a
            *    change in the state's data being called in the render() function hence why using the
            *    refreshPage() function will only re-render the page once task's status is implemented. 
            */
            notifySuccess('Successfully stopped all tasks', 2000)
            await new Promise(r => setTimeout(r, 1000))
            // this.refreshPage()
            this.reloadPage()
        }, error => {
            notifyError('Error while stopping all tasks..', 3000)
        })
    }

    getCurrentTime(){
        var today = new Date()
        return today.toLocaleTimeString([], { hour12: false });
}

    componentDidMount() {
        this.interval = setInterval(() => this.setState({
            time: this.getCurrentTime()
        }), 1000);
    }

    componentDidUpdate(prevprop) {
        if(prevprop != this.props) {
            this.setState({
                user: this.props.user
            })
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        return(
            <div className="task">
                <TitleBar/>
                <div className="tasks-container pt-2">
                    <div className="control-panel-wrapper row mx-auto">
                        <div className="left-control-panel col-2 pt-3">
                            <h1 className="text-center">Tasks</h1>
                            <p className="clock text-center">{this.state.time}</p>
                        </div>
                        <div className="middle-control-panel col-4 pt-3">
                            <p className="welcome-message m-0">Welcome, <b>{this.state.user}</b></p>
                            <p className="m-0">Tasks - <span style={{color: '#F6FB06'}}>{this.state.totalTasksCount}</span></p>
                            {/* <p className="m-0" >Running Tasks - <span style={{color: '#0DFE5F'}}>-</span></p> */}
                            <p className="m-0" >Running Tasks - <span style={{color: 'grey'}}>Not Available</span></p>
                        </div>
                        <div className="col-1"></div>
                        <div className="right-control-panel col-5">
                            <ul className="icons-wrapper ml-5">
                                <li className="icon"><Link onClick={this.handleStartAllTask}><img src={play_button} /></Link></li>
                                <li className="icon"><Link onClick= {this.handleStopAllTask} ><img src={stop_button} /></Link></li>
                                <li className="icon"><Link data-toggle="modal" data-target="#editAllTask"><img src={edit_button} /></Link></li>
                                <li className="icon"><Link data-toggle="modal" data-target="#delayTask"><img src={delay_button} /></Link></li>
                                <li className="icon"><Link data-toggle="modal" data-target="#quickTask"><img src={quick_task_button} /></Link></li>
                                <li className="icon"><Link data-toggle="modal" data-target="#deleteAllTask"><img src={delete_button} /></Link></li>
                                <li className="icon"><Link data-toggle="modal" data-target="#createTask"><img src={create_button} /></Link></li>
                            </ul>
                        </div> 
                    </div>

                    <div className="row pt-1"></div>

                    <div className="table-heading row mx-auto pt-2">
                        <div className="table-heading-wrapper">
                            <div className="table row">
                                <div className="col ml-2 pt-2">
                                    <h1 className="headings text-center">Site</h1>
                                </div>

                                <div className="col pt-2">
                                    <h1 className="headings text-center">Size</h1>
                                </div>

                                <div className="col-3  pt-2">
                                    <h1 className="headings text-center">Product</h1>
                                </div>

                                <div className="col pt-2">
                                    <h1 className="headings text-center">Profile</h1>
                                </div>

                                <div className="col pt-2">
                                    <h1 className="headings text-center">Proxies</h1>
                                </div>

                                <div className="col-3 pt-2">
                                    <h1 className="headings text-center">Status </h1>
                                </div>

                                <div className="col pt-2">
                                    <h1 className="headings text-center">Actions</h1>
                                </div>
                            </div>
                            {/*IndividualTask*/}
                            <IndividualTask
                                retryDelay={this.state.retryDelay}
                                monitorDelay={this.state.monitorDelay}
                                updateTaskStateValue={this.updateTaskStateValue.bind(this)}
                                refreshPage={this.refreshPage.bind(this)}
                                refreshPageState={this.state.refreshPage}
                            />
                            {/*IndividualTask*/}

                            {/*EditAllTaskModal*/}
                            <div className="modal fade" id="editAllTask" tabIndex="-1" aria-labelledby="editAllTaskLabel" aria-hidden="true" style={{overflowY: 'hidden'}}>
                                <EditAllTask refreshPage={this.refreshPage.bind(this)} refreshPageState={this.state.refreshPage}/>
                                <div className= "modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                    </div>
                                </div>
                            </div>
                            {/*EditAllTaskModal*/}

                            {/*DelayTaskModal*/}
                            <div className="modal fade" id="delayTask" tabIndex="-1" aria-labelledby="delayTaskLabel" aria-hidden="true" style={{overflowY: 'hidden'}}>
                                <DelayTask
                                    monitorDelay={this.state.monitorDelay}
                                    retryDelay={this.state.retryDelay}
                                    refreshPage={this.refreshPage.bind(this)}
                                    refreshPageState={this.state.refreshPage}/>
                                <div className= "modal-dialog modal-dialog-centered">
                                    <div className="modal-content">		
                                    </div>
                                </div>
                            </div>
                            {/*DelayTaskModal*/}

                            {/*QuickTaskModal*/}
                            <div className="modal fade" id="quickTask" tabIndex="-1" aria-labelledby="quickTaskLabel" aria-hidden="true" style={{overflowY: 'hidden'}}>
                                <QuickTask refreshPage={this.refreshPage.bind(this)} refreshPageState={this.state.refreshPage}/>
                                <div className= "modal-dialog modal-dialog-centered">
                                    <div className="modal-content">		
                                    </div>
                                </div>
                            </div>
                            {/*QuickTaskModal*/}

                            {/*CreateTaskModal*/}
                            <div className="modal fade" id="createTask" tabIndex="-1" aria-labelledby="createTaskLabel" aria-hidden="true" style={{overflowY: 'hidden'}}>
                                <CreateTask refreshPage={this.refreshPage.bind(this)} refreshPageState={this.state.refreshPage}/>	
                                <div className= "modal-dialog modal-dialog-centered">
                                    <div className="modal-content">	    
                                    </div>
                                </div>
                            </div>
                            {/*CreateTaskModal*/}

                            {/*DeleteAllTaskModal*/}
                            <div className="modal fade" id="deleteAllTask" tabIndex="-1" aria-labelledby="deleteAllTaskLabel" aria-hidden="true" style={{overflowY: 'hidden'}}>
                                <DeleteAllTask refreshPage={this.refreshPage.bind(this)} refreshPageState={this.state.refreshPage}/>	
                                <div className= "modal-dialog modal-dialog-centered">
                                    <div className="modal-content">	    
                                    </div>
                                </div>
                            </div>
                            {/*DeleteAllTaskModal*/}
                        
                        </div>
                    </div>
                </div>
                <ToastContainer newestOnTop />
            </div>
        );
    }
}

export default Task;
