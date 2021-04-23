import React from 'react';
import './css/CreateCaptcha.css';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

class CreateCaptcha extends React.Component{
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
				<div className="rectangle_background1">
					<h1 className="create_captcha">Create Captcha Harvester</h1>
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

					<Link to = "/captcha" className="exit_cc">Close</Link>
					<Link to = "/captcha" className="create_cc">Create</Link>
				</div>
			</div>

		);

	}
}

export default CreateCaptcha;