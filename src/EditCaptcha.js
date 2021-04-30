import React from 'react';
import './css/EditCaptcha.css';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

class EditCaptcha extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}

	componentDidMount(){

	}

	render(){
		return(
			<div className="edit-captcha-container">
				<div className="row ml-2 pt-1">
					<div className="col-9">
						<h1 className="cch">Edit Captcha Harvester</h1> 
					</div>
				</div>

				<div className="row ml-2 pt-1">
					<div className="col-8">
						<div className="textarea">
							{/*
							<Form>
								<Form.Group controlId="formEmail">
									<Form.Control type="text" className="text" placeholder="Email"/>
								</Form.Group>
							</Form>
							*/}
						</div>
					</div>
				</div>

				<div className="row ml-2 pt-5">
					<div className="col-8">
						<div className="textarea">
							{/*
							<Form>
								<Form.Group controlId="formEmail">
									<Form.Control type="text" className="text" placeholder="Proxy"/>
								</Form.Group>
							</Form>
							*/}
						</div>
					</div>
				</div>

				<div className="row ml-2 pt-5">
					<div className="col-4">
						<div className="textarea-hn">
							{/*
							<Form>
								<Form.Group controlId="formEmail">
									<Form.Control type="text" className="text" placeholder=""/>
								</Form.Group>
							</Form>
							*/}
						</div>
					</div>

					<div className="col-3"></div>

					<div className="col-2 ml-4">
						<Link to = "/captcha" className="routing">Close</Link>
					</div>
					<div className="col-2">
						<Link to = "/captcha" className="routing">Create</Link>
					</div>
				</div>


				
				
			</div>
		);
	}
}


export default EditCaptcha;
