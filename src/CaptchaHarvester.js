import React from 'react';
import './css/CaptchaHarvester.css';
import {Link} from 'react-router-dom';
import exit_logo from './assets/icons/exit_logo.png';
import email_logo from './assets/icons/email_logo.png';
import proxy_logo from './assets/icons/small_proxy_logo.png';
import Form from 'react-bootstrap/Form';

class CaptchaHarvester extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}

	componentDidMount(){

	}
	
	render(){
		return(
			<div className="captcha-harvester-container">
				<div className="row pt-1">
					<div className="col-9">
						<h1>Captcha Harvester</h1>
					</div>

					<div className="col-3 pt-1">
						<Link to="/captcha"><img src={exit_logo} /></Link>
					</div>
				</div>

				<div className="row pt-1 ml-1 mr-1">
					<Form mx-auto>
						<Form.Group controlId="Form.Textarea">
							<Form.Control as="textarea" rows={3} className="text-area ml-2"/>
						</Form.Group>
					</Form>
				</div>

				<div className="row pt-1 ml-3">
					<form className="textarea pt-1">
						<img className=" ml-3" src={email_logo} />
						<input type="text" className="background-color ml-3" style={{outline: 'none'}} placeholder = "Email"/>
					</form>
				</div>

				<div className="row pt-2 ml-3">
					<form className="textarea pt-1">
						<img className=" ml-3" src={proxy_logo} />
						<input type="text" className="background-color ml-3" style={{outline: 'none'}} placeholder = "Proxy"/>
					</form>
				</div>
				
			</div>

		);
	}

}

export default CaptchaHarvester;