import React from 'react';
import './css/Settings.css';
import {Link} from 'react-router-dom';

class Settings extends React.Component{
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
					<h1 className="settings">Settings</h1>

					<h1 className="setup">Setup</h1>
					<Link className="discord_webhook"></Link>
					<Link className="test_discord_webhook"></Link>

					<h1 className="quick_task">Quick Task</h1>
					<form>
						<select className="choose_profile">
							<option value="Main">Main</option>
							<option value="John T">John T</option>
							<option value="James">James</option>
						</select>
						<select className="preferred_size">
							<option value="XS">XS</option>
							<option value="S">S</option>
							<option value="M">M</option>
							<option value="L">L</option>
							<option value="XL">XL</option>
							<option value="XXL">XL</option>
						</select>
					</form>
					{/*Change to Text Area later*/}
					<div className="account"></div>
					

					<div className="password"></div>
			


					<h1 className="updates">Updates</h1>
					<Link className="check_for_updates"></Link>
				</div>
			</div>
		);
	}
}

export default Settings;