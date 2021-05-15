import React from 'react';
import './css/Settings.css';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import discord_logo from './assets/icons/discord_logo.svg';
import user_logo from './assets/icons/account_logo.svg';
import password_logo from './assets/icons/password_logo.svg';
import profile_logo from './assets/icons/profile_logo.svg';
import ruler_logo from './assets/icons/ruler_logo.svg';


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
							<h1 className="settings text-center" style={{fontWeight: "bold"}}>Settings</h1>
						</div>
					</div>

					<div className="setup-wrapper row">
						<div className="col-2 pt-4 pr-5">
							<h1 className="setup text-center" style={{fontWeight: "bold"}}>Setup</h1>
						</div>
					</div>

					<div className="row mx-auto">
						<Button variant="outline-none" className="setup-button-wrapper col-6 d-flex pt-1 ml-3" >
							<img className="discord_icon pt-1" src={discord_logo} />
							<p className="heading ml-2">Discord Webhook</p>
						</Button>
						<div className="col-1"></div>
						<Button variant="outline-none" className="test-button-wrapper col-1">
							<p className="heading my-auto text-center">Test</p>
						</Button>
					</div>

					<div className="quick-task-wrapper row">
						<div className="col-3 pt-4 ml-3">
							<h1 className="quick-task" style={{fontWeight: "bold"}}>Quick Task</h1>
						</div>
					</div>
					<div className="row mx-auto pt-2">
						<Button variant="outline-none" className="setup-button-wrapper col-6 pt-1 d-flex ml-3">
							<img className="icon" src={profile_logo} />
							<p className="heading my-auto ml-2">Choose Profile</p>
						</Button>
					</div>

					<div className="row mx-auto pt-3">
						<Button variant="outline-none" className="setup-button-wrapper col-6 pt-1 d-flex ml-3">
							<img className="icon" src={ruler_logo} />
							<p className="heading my-auto ml-2" >Preferred Size</p>
						</Button>
					</div>
					<div className="row mx-auto pt-3">
						<form className="col-4 quick-task-button-wrapper ml-3">
							<img className="discord_icon" src={user_logo} />
							<input type="text" className="background-color ml-3" style={{outline: 'none'}} placeholder = "Account"/>
						</form>
						<div className="col-1"></div>
						<form className="col-4 quick-task-button-wrapper">
							<img className="discord_icon" src={password_logo} />
							<input type="text" className="background-color ml-3" placeholder = "Password"/>
						</form>
					</div>
					<div className="updates-wrapper row pt-4">
						<div className="col-2 pt-2 pr-4">
							<h1 className="update text-center" style={{fontWeight: "bold"}}>Updates</h1>
						</div>
					</div>

					<div className="row   mx-auto pt-2">
						<Button variant="outline-none" className="cfu-button-wrapper pt-1 ml-3">
							<p className="heading text-center">Check for Updates</p>
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default Settings;