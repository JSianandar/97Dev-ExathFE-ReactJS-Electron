import React from 'react';
import './css/EditProxy.css';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import IndividualProxy from './IndividualProxy.js';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

class EditProxy extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			group: this.props.group,
			proxyList: this.convertProxyListToString(this.props.proxyList),
			id: this.props.id,
			refreshPageState: '',
		}
	}

	convertProxyListToString = (proxyList) => {
		var temp = ''
		proxyList.forEach(proxy => temp += proxy + "\n")
		return temp.slice(0, -1)
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = async (event) =>{
		event.preventDefault()
		axios.put(`http://exath.io/api/proxies/update/${this.state.id}`, {
			"proxyList": this.state.proxyList.split('\n')
		})
		.then(async res=>{
			this.props.refreshPage()
			notifySuccess('Successfully updated proxy', 3000)
            await new Promise(r => setTimeout(r, 1000))
		}).catch(async error=> {
			notifyError('Error updating proxy ', 3000)
		})
	}

	componentDidMount(){
		
	}

	componentDidUpdate(prevprop){
		if(prevprop.refreshPageState != this.props.refreshPageState){
			this.setState({
				group: this.props.group,
				proxyList: this.convertProxyListToString(this.props.proxyList),
				id: this.props.id,
				refreshPageState : this.props.refreshPageState
			})
		}
	}

	render(){
		return(
			<div className="modal fade" id={`edit-${this.state.id}`} tabIndex="-1" aria-labelledby={`edit-${this.state.id}`} aria-hidden="true" style={{overflowY: 'hidden'}}>
				<div className="edit-proxy-container">
					<div className="row">
						<div className="col-6 ml-3">
							<h1 style={{fontWeight: "bold"}}>Edit Proxy Group</h1>
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
											name = "proxyList"
											placeholder = "Enter Your Proxy"
											onChange = {this.handleChange}
											className="background-color"
											rows={8}
											value = {this.state.proxyList}
											style={{resize: 'none'}}
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
									<Form.Control type="text" placeholder="Group Name" className="group-name" disabled value = {this.state.group} required/>
								</Form.Group>
							</Form>
						</div>
						<div className="col-4"></div>
						<div className="col-2 ml-3 pt-3">
							<Link data-dismiss="modal" className="routing" style={{ textDecoration: 'none' }}>Close</Link>
						</div>
						<div className="col-1 pt-3">
							<Link data-dismiss="modal" className="routing" style={{ textDecoration: 'none' }} onClick = {this.handleSubmit} >Save</Link>
						</div>
					</div>
				</div>
				<div className="modal-dialog"></div>
			</div>
		);
	}
}

export default EditProxy;