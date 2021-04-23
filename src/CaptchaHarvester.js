import React from 'react';
import './css/CaptchaHarvester.css';
import {Link} from 'react-router-dom';

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
			<div>
				<div className="rectangle_background3">
					<h1 className="captcha_harvester_title">Captcha Harvester</h1>
					<Link to ="/captcha" className="exit_logo"></Link>
					<div className="text_area"></div>
					<div className="email_logo"></div>
					<div className="proxy_logo"></div>
				</div>
			</div>

		);
	}

}

export default CaptchaHarvester;