import React from 'react';
import './css/Settings.css';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TitleBar from './TitleBar.js';
import DiscordWebhook from './DiscordWebhook.js';

import discord_logo from './assets/icons/discord_logo.svg';
import user_logo from './assets/icons/account_logo.svg';
import password_logo from './assets/icons/password_logo.svg';
import profile_logo from './assets/icons/profile_logo.svg';
import ruler_logo from './assets/icons/ruler_logo.svg';

import axios from 'axios';


class Settings extends React.Component{
	constructor(props){
		super(props)
		var refreshPage =  this.refreshPage.bind(this)
		this.state = {
			profiles: [],
			sizes: [],
			size: 'Preferred Size',
			profile: 'Choose Profile',
			refreshPage: '',
			qtProfile: '',
			preferredSize: '',
			account: '',
			password: '',
		}
	}

	refreshPage() {
        this.setState({
            refreshPage : Math.floor(Math.random() * 99999)
        })
    }

	handleClick = (event) => {
		this.setState({ size: event });
	}

	handleClickProfile = (event) => {
		this.setState({ profile: event })
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmitDiscordTest = event =>{
		event.preventDefault();
		axios.post('https://discord.com/api/webhooks/791366221815349258/ZaLjC5d_aNBbn-aWryS03Q09QgttE8g6md7bnG3eGf1r23i7eE5-4_wpeZ2IHnqw-l3n')
		.then(res=> {
			this.refreshPage()
		},
		error=>{

		})
	}

	async componentDidMount(){
		await this.getProfiles();
		await this.getSizes();
	}

	componentDidUpdate(prevprop){
		if(prevprop != this.props){
			this.setState({
			})
		}
	}

	getProfiles = async () =>{
		await axios.get('http://exath.io/api/profiles')
		.then(response => {
		
			this.setState({
				profiles : response.data
			})
		},
		error=>{
		
		})
	}

	getSizes = async () =>{
		await axios.get('http://exath.io/api/sizes')
		.then(response => {
		
			this.setState({
				sizes : response.data
			})
		},
		error=>{
		
		})
	}

	render(){
		return(
			<div className="settings">
				<TitleBar/>
				<div className="settings-container pt-0">
					<div className="page-wrapper mx-auto">
						<div className="title-wrapper row">
							<div className="col-2 pt-3 ml-1">
								<h1 className="settings text-center" style={{fontWeight: "bold"}}>Settings</h1>
							</div>
						</div>

						<div className="setup-wrapper row">
							<div className="col-2 pt-4 pr-5">
								<h1 className="setup text-center" style={{fontWeight: "bold"}}>Setup</h1>
							</div>
						</div>

						<div className="row mx-auto">
							<Button variant="outline-none" className="setup-button-wrapper d-flex pt-1 ml-3" data-toggle="modal" data-target="#discordWebhook">
								<img className="discord_icon pt-1" src={discord_logo} />
								<p className="heading ml-2">Discord Webhook</p>
							</Button>
							<div className="col-2"></div>

							<Button variant="outline-none" className="test-button-wrapper col-1" onClick = {this.handleSubmitDiscordTest}>
								<p className="heading my-auto text-center">Test</p>
							</Button>
						</div>

						<div className="quick-task-wrapper row">
							<div className="col-3 pt-4 ml-3">
								<h1 className="quick-task" style={{fontWeight: "bold"}}>Quick Task</h1>
							</div>
						</div>
						<div className="row mx-auto pt-2">	
							<Dropdown onSelect = {this.handleClickProfile}>
								<Dropdown.Toggle variant="outline-none" className="setup-button-wrapper  pt-1 d-flex ml-3">
									<img className="icon" src={profile_logo} />
									<p className="heading my-auto ml-2">{this.state.profile}</p>
								</Dropdown.Toggle>

								<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}}>
									{this.state.profiles.map((e, index) => {
										return(<Dropdown.Item href="#/action-1" eventKey = {e.name} >{e.name}</Dropdown.Item>)
									})}
								</Dropdown.Menu>
							</Dropdown>
						</div>

						<div className="row mx-auto pt-3">
							<Dropdown onSelect = {this.handleClick}>
								<Dropdown.Toggle variant="outline-none" className="setup-button-wrapper col pt-1 d-flex ml-3">
									<img className="icon" src={ruler_logo} />
									<p className="heading my-auto ml-2" >{this.state.size}</p>
								</Dropdown.Toggle>

								<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}}>
								{this.state.sizes.map((e, index) => {
									return(<Dropdown.Item href="#/action-1"  eventKey = {e} >{e}</Dropdown.Item>)
								})}
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<div className="row mx-auto pt-3">
							<form className="col-4 quick-task-button-wrapper ml-3">
								<img className="discord_icon" src={user_logo} />
								<input type="text" className="background-color ml-3"  placeholder = "Account" required/>
							</form>
							<div className="col-1"></div>
							<form className="col-4 quick-task-button-wrapper">
								<img className="discord_icon" src={password_logo} />
								<input type="text" className="background-color ml-3" placeholder = "Password" required/>
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

						<div className="row pt-5" style = {{marginLeft: '565px'}}>
							<Button variant="outline-none" className="cfu-button-wrapper pt-1 ml-3">
								<p className="heading text-center">Update Settings</p>
							</Button>
						</div>

						{/*DiscordWebhookModal*/}
						<div className="modal fade" id="discordWebhook" tabIndex="-1" aria-labelledby="discordWebhookLabel" aria-hidden="true" style={{overflowY: 'hidden'}}>
							<DiscordWebhook refreshPage={this.refreshPage.bind(this)} refreshPageState={this.state.refreshPage}/>
							<div className= "modal-dialog modal-dialog-centered">
                                <div className="modal-content">
								</div>
							</div>
                        </div>

					</div>
				</div>
			</div>
		);
	}
}

export default Settings;