import React from 'react';
import './css/EditCaptcha.css';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import IndividualCaptcha from './IndividualCaptcha.js';
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

class EditCaptcha extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			email: this.props.email,
			proxy: this.props.proxy,
			name: this.props.name,
			id: this.props.id,
			refreshPageState: '',
		}
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = async (event) =>{
		event.preventDefault();

		axios.put(`http://exath.io/api/captcha/update/${this.state.id}`, {
			"email": this.state.email,
			"proxy": this.state.proxy,
		})
		.then(async res => {
			this.props.refreshPage()
			notifySuccess('Successfully updated captcha', 3000)
            await new Promise(r => setTimeout(r, 1000))
		}).catch(async error=> {
			notifyError('Error updating captcha', 3000)
		})
	}

	componentDidUpdate(prevprop){
		if(prevprop.refreshPageState != this.props.refreshPageState){
			this.setState({
				email: this.props.email,
				proxy: this.props.proxy,
				name: this.props.name,
				id: this.props.id,
				refreshPageState: this.props.refreshPageState
			})
		}
	}

	componentDidMount(){ }

	render(){
		return(
			<div className="modal fade" id={`edit-${this.state.id}`} tabIndex="-1" aria-labelledby={`edit-${this.state.id}`} aria-hidden="true" style={{overflowY: 'hidden'}}>
				<div className="edit-captcha-container">
					<div className="row ml-2 pt-1">
						<div className="col-9">
							<h1 className="cch" style={{fontWeight: "bold"}}>Edit Captcha Harvester</h1> 
						</div>
					</div>

					<div className="row ml-2 pt-1">
						<div className="col-8">
							<div className="textarea">
								<form>
									<input 
									type="text"
									required
									name= "email"
									onChange = {this.handleChange}
									value = {this.state.email}
									placeholder = "Email"
									className="textarea"
									/>
								</form>
							</div>
						</div>
					</div>

					<div className="row ml-2 pt-5">
						<div className="col-8">
							<div className="textarea">
								<form>
									<input 
									type="text"
									required
									name = "proxy"
									onChange = {this.handleChange}
									value = {this.state.proxy}
									placeholder = "Proxy"
									className="textarea"
									/>
								</form>
							</div>
						</div>
					</div>

					<div className="row ml-2 pt-5">
						<div className="col-4">
							<div className="textarea-hn">
								<form>
									<input 
									type="text"
									required
									disabled
									value = {this.state.name}
									placeholder = "Harvester Name"
									className="textarea-hn"
									/>
								</form>
							</div>
						</div>
						<div className="col-3"></div>
						<div className="col-2 ml-4 pt-1">
							<Link data-dismiss="modal" className="routing" style={{ textDecoration: 'none' }}>Close</Link>
						</div>
						<div className="col-2 pt-1">
							<Link data-dismiss="modal" className="routing" style={{ textDecoration: 'none' }} onClick={this.handleSubmit}>Save</Link>
						</div>
					</div>
				</div>
				<div className="modal-dialog"></div>
				<ToastContainer newestOnTop />
			</div>
		);
	}
}


export default EditCaptcha;
