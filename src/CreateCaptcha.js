import React from 'react';
import './css/CreateCaptcha.css';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class CreateCaptcha extends React.Component{
	constructor(){
		super()
		this.state = {
			email: '',
			proxy: '',
			name: ''
		}
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = event =>{
		event.preventDefault();


		axios.post('http://exath.io/api/captcha/create', {
			"email": this.state.email,
			"proxy": this.state.proxy,
			"name": this.state.name
		})
		.then(res => {
			console.log(res);
			console.log(res.data);
		})
	}

	componentDidMount(){

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