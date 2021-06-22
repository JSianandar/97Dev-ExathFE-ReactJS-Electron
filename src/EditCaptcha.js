import React from 'react';
import './css/EditCaptcha.css';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import IndividualCaptcha from './IndividualCaptcha.js';
import axios from 'axios';

class EditCaptcha extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			email: this.props.email,
			proxy: this.props.proxy,
			name: this.props.name,
			id: this.props.id,
			refreshPageState: ''
		}
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = event =>{
		event.preventDefault();


		axios.put(`http://exath.io/api/captcha/update/${this.state.id}`, {
			"email": this.state.email,
			"proxy": this.state.proxy,
		})
		.then(res => {
			console.log(res);
			console.log(res.data);
			this.props.refreshPageState()
		})
	}

	componentDidUpdate(prevprop){
		if(prevprop.refreshPageState != this.props.refreshPageState){
			document.getElementById('input-email').value = this.state.email
			document.getElementById('input-proxy').value = this.state.proxy
			document.getElementById('input-name').value = this.state.name
			this.setState({
				refreshPageState : this.props.refreshPageState
			})
		}
	}



	componentDidMount(){
		console.log(this.state)
	}

	render(){
		return(
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
						<Link data-dismiss="modal" className="routing" style={{ textDecoration: 'none' }} onClick={this.handleSubmit } >Save</Link>
					</div>
				</div>


				
				
			</div>
		);
	}
}


export default EditCaptcha;
