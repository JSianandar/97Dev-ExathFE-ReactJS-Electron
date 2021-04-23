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
			<div>
				<div className="rectangle_background">
					<Link to="/create_captcha"className="create"></Link>
				</div>

				<div className="captcha_heading">
					<h1 className="captcha_harvester">Harvester</h1>
					<h1 className="captcha_email">Email</h1>
					<h1 className="captcha_proxy">Proxy</h1>
					<h1 className="actions">Actions</h1>
				</div>

				<div className="captcha_table">
					<p className="harvester">Captcha 1</p>
					<p className="email">randomrandom@gmail.com1</p>
					<p className="proxy">71.18.73.232:7556:space_fOHrX:hSvquyBeJF</p>
					<div className="external_link"></div>
					<Link to="/edit_captcha" className="table_edit"></Link>
					<div className="table_delete"></div>
				</div>

				<Link to ="/captcha_harvester" className="captcha_harvester_button">Captcha Harvester (Testing)</Link>
			</div>
		);
	}
}

export default Captcha;