import React from 'react';
import './css/EditCaptcha.css';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import IndividualCaptcha from './IndividualCaptcha.js';

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
						<h1 className="cch" style={{fontWeight: "bold"}}>Edit Captcha Harvester</h1> 
					</div>
				</div>

				<div className="row ml-2 pt-1">
					<div className="col-8">
						<div className="textarea">
							<form>
								<input
								type="hidden"
								name="captcha_id"
								id="captcha_id"
								/>
                                <input 
                                type="text"
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
						<Link data-dismiss="modal" className="routing" style={{ textDecoration: 'none' }}>Create</Link>
					</div>
				</div>


				
				
			</div>
		);
	}
}


export default EditCaptcha;
