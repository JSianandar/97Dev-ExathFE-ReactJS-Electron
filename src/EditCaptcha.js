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
			<div>
				<div className="rectangle_background2">
					<h1 className="edit_captcha">Edit Captcha Harvester</h1>
						<form>
							<input
							type="text"
							required
							placeholder = "Email"
							placeholderTextColor = "#C4C4C4;"
							className="email_captcha"
							/>

							<input
							type="text"
							required
							placeholder = "Proxy"
							className="proxy_captcha"
							/>

							<input
							type="text"
							required
							placeholder = "Harvester Name"
							className="harvester_name"
							/>

						</form>

						<Link to = "/captcha" className="exit_ec">Close</Link>
						<Link to = "/captcha" className="edit_ec">Save</Link>
				</div>
			</div>
		);
	}
}


export default EditCaptcha;
