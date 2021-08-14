import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './css/Activation.css';
import TitleBar from './TitleBar.js';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ipcRenderer = window.require('electron').ipcRenderer

const closeApp = () => {
    ipcRenderer.send('closeApp')
}

const notify = (text, delay) => toast.dark(text, {
    position: 'bottom-right',
    autoClose: delay,
    hideProgressBar: false
});

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

class Activation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            key: '',
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        document.getElementById('appKeyInput').value = 'loading...'
        notify('Checking Key...', 3000)
        await new Promise(r => setTimeout(r, 1000))
        await this.getActivationKey()
    }

    getActivationKey = async () => {
        axios.get(`http://exath.io/api/authenticate?key=${this.state.key}`)
        .then(async res => {
            notifySuccess('Success', 3000)
            await new Promise(r => setTimeout(r, 1000))
            this.props.setSessionStorageValue('user', res.data.user[0].user)
            this.props.setLocalStorageValue('appKey', res.data.user[0].key)
            this.props.history.push('/task')
        }).catch(async error => {
            // If key is invalid or something went wrong, show error message from API.
            document.getElementById('appKeyInput').value = error.response.data.Message
            notifyError('Error - ' + error.response.data.Message, 3000)
        })
    }

    componentDidMount(){
        this.setState({key: this.props.appKey})
    }

    render(){
        return(
            <div>
                <TitleBar />
                <div className="activation-container">
                    <div className="row pt-4">
                        <div className="exath-activation mx-auto"></div>   
                    </div>
                    <div className="row pt-3">
                        <div className="col-12">
                            <form>
                                <input
                                    id="appKeyInput"
                                    type="text"
                                    name= "key"
                                    onChange = {this.handleChange}
                                    value = {this.state.key}
                                    placeholder = "Enter your key"
                                    className="key_input"
                                    required
                                />
                            </form>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col-3 ml-4"></div>
                        <Link className="col-2 ml-5 button" id="closeBtn" onClick={closeApp} style={{ textDecoration: 'none' }}>
                            <h1 className="text-center">Close</h1>
                        </Link>
            
                        <Link onClick={this.handleSubmit} className="col-2 ml-5 button" style={{ textDecoration: 'none' }}>
                            <h1 className="text-center">Activate</h1>
                        </Link>
                        <div className="col-3"></div>
                    </div>
                </div>
                <ToastContainer newestOnTop />
            </div>
        );
    }
}

export default withRouter(Activation);