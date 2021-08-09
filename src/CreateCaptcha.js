import React from 'react';
import './css/CreateCaptcha.css';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
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

class CreateCaptcha extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			email: '',
			proxy: '',
			name: '',
			refreshPageState: ''
		}
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = async (event) =>{
		event.preventDefault();

		axios.post('http://exath.io/api/captcha/create', {
			"email": this.state.email,
			"proxy": this.state.proxy,
			"name": this.state.name
		})
		.then(async res => {
			this.props.refreshPage()
			notifySuccess('Successfully created captcha', 3000)
            await new Promise(r => setTimeout(r, 1000))
		}).catch( async error =>{
			notifyError('Error creating captcha ', 3000)
		})
	}

	componentDidMount(){

	}

	componentDidUpdate(prevprop){
		if(prevprop.refreshPageState != this.props.refreshPageState){
			document.getElementById('input-email').value = ''
			document.getElementById('input-proxy').value = ''
			document.getElementById('input-name').value = ''
			this.setState({
				refreshPageState : this.props.refreshPageState
			})
		}
	}


	render(){
		return(
			<div className="create-captcha-container">
				<div className="row ml-2 pt-1">
					<div className="col-9">
						<h1 className="cch" style={{fontWeight: "bold"}}>Create Captcha Harvester</h1> 
					</div>
				</div>

				<div className="row ml-2 pt-1">
					<div className="col-8">
						<div className="textarea">
							<form >
								<input 
								type="text"
								name= "email"
								onChange={this.handleChange}
								required
								id = "input-email"
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
								name= "proxy"
								id = "input-proxy"
								onChange={this.handleChange}
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
								name= "name"
								id = "input-name"
								placeholder = "Harvester Name"
								onChange={this.handleChange}
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
						<Link data-dismiss="modal" className="routing" style={{ textDecoration: 'none' }} onClick= {this.handleSubmit}>Create</Link>
					</div>
				</div>
			</div>

		);

	}
}

export default CreateCaptcha;