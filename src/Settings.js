import React from 'react';
import './css/Settings.css';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

import discord_logo from './assets/icons/discord_logo.png';
import user_logo from './assets/icons/user_logo.png';
import password_logo from './assets/icons/password_logo.png';
import profile_logo from './assets/icons/profile_logo.png';
import ruler_logo from './assets/icons/ruler_logo.png';


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
			<div className="settings-container">
				<div className="page-wrapper mx-auto">
					<div className="title-wrapper row">
						<div className="col-2 pt-3">
							<h1 className="settings text-center">Settings</h1>
						</div>
					</div>

					<div className="setup-wrapper row">
						<div className="col-2 pt-2 pr-5">
							<h1 className="setup text-center">Setup</h1>
						</div>
					</div>

					<div className="row mx-auto">
						<div className="setup-button-wrapper col-6 pt-2 d-flex">
							<img className="discord_icon" src={discord_logo} />
							<p className="heading my-auto">Discord Webhook</p>
						</div>
						<div className="col-1"></div>
						<div className="test-button-wrapper col-1">
							<p className="heading my-auto text-center pt-1">Test</p>
						</div>
					</div>

					<div className="quick-task-wrapper row">
						<div className="col-3 pt-2 pr-5">
							<h1 className="quick-task text-center">Quick Task</h1>
						</div>
					</div>
					<div className="row mx-auto pt-2">
						<div className="setup-button-wrapper col-6 pt-2 d-flex">
							<img className="icon" src={profile_logo} />
							<p className="heading my-auto">Choose Profile</p>
						</div>
					</div>

					<div className="row mx-auto pt-2">
						<div className="setup-button-wrapper col-6 pt-2 d-flex">
							<img className="icon" src={ruler_logo} />
							<p className="heading my-auto">Preferred Size</p>
						</div>
					</div>
					<div className="row mx-auto pt-4">
						<div className="col-4 quick-task-button-wrapper">
							<img className="discord_icon" src={user_logo} />
						</div>
						<div className="col-1"></div>
						<div className="col-4 quick-task-button-wrapper">
							<img className="discord_icon" src={password_logo} />
						</div>
					</div>
					<div className="updates-wrapper row">
						<div className="col-2 pt-2 pr-4">
							<h1 className="update text-center">Updates</h1>
						</div>
					</div>

					<div className="row mx-auto">
						<div className="cfu-button-wrapper pt-1">
							<h1 className="heading text-center">Check for Updates</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Settings;