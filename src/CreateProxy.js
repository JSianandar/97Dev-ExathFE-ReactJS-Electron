import React from 'react';
import './css/CreateProxy.css';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

class CreateProxy extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			refreshPageState: '',
			proxyList: '',
			group: ''
		}
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = async (event) =>{
		event.preventDefault()
		axios.post('http://exath.io/api/proxies/create', {
			"proxyList": this.state.proxyList.split('\n'),
			"group": this.state.group
		})
		.then(async res=>{
			this.props.refreshPage()
			notifySuccess('Successfully created proxy', 3000)
            await new Promise(r => setTimeout(r, 1000))
		}).catch(async error =>{
			notifyError('Error creating captcha', 3000)
		})
	}

	componentDidMount(){}

	componentDidUpdate(prevprop){
		if(prevprop.refreshPageState != this.props.refreshPageState){
			document.getElementById('input-group').value = ''
			document.getElementById('input-proxyList').value = ''
			this.setState({
				refreshPageState : this.props.refreshPageState
			})
		}
	}

	render(){
		return(
			<div>
				<div className="create-proxy-container">
					<div className="row">
						<div className="col-6 ml-3">
							<h1 style={{fontWeight: "bold"}}>Create Proxy Group</h1>
						</div>
					</div>

					<div className="row pt-3">
						<div className="text-area mx-auto">
							<div className="row ml-4 pt-3">
								<p>Paste Your Proxy Here</p>
							</div>
							<div className="row ml-4">
								<p>Format = ipadress:port:user:password</p>
							</div>
							<div className="row ml-4">
								<form>
									<textarea 
									required
									placeholder = "Enter Your Proxy"
									className="background-color"
									name="proxyList"
									onChange = {this.handleChange}
									rows={8}
									style={{resize: 'none'}}
									id = "input-proxyList"
									>
									</textarea>
								</form>
							</div>
						</div>
					</div>

					<div className="row pt-1">
						<div className="col-4 ml-3">
							<Form>
								<Form.Group>
									<Form.Control id = "input-group" type="text" placeholder="Group Name" name="group" onChange = {this.handleChange} className="group-name" required/>
								</Form.Group>
							</Form>
						</div>
						<div className="col-4"></div>
						<div className="col-2 ml-3 pt-3">
							<Link data-toggle="modal" data-target="#createProxy" className="routing" style={{ textDecoration: 'none' }}>Close</Link>
						</div>
						<div className="col-1 pt-3">
							<Link data-toggle="modal" data-target="#createProxy" className="routing" style={{ textDecoration: 'none' }} onClick = {this.handleSubmit}>Create</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CreateProxy;