import React from 'react';
import './css/Captcha.css';
import {Link} from 'react-router-dom';

class Captcha extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}

	componentDidMount(){

	}

	render(){
		return(
			<div className="proxies-container pt-1">
				<Link to ="/captcha_harvester" className="captcha_harvester_button">Captcha Harvester (Testing)</Link>
			</div>
		);
	}
}

export default Captcha;