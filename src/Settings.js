import React from 'react';
import './css/Settings.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import TitleBar from './TitleBar.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import discord_logo from './assets/icons/discord_logo.svg';
import user_logo from './assets/icons/account_logo.svg';
import password_logo from './assets/icons/password_logo.svg';
import profile_logo from './assets/icons/profile_logo.svg';
import ruler_logo from './assets/icons/ruler_logo.svg';

import axios from 'axios';


const notifySuccess = (text, delay) => toast.success(text, {
    position: 'bottom-right',
    autoClose: delay,
    hideProgressBar: false
});

const notifyError = (text, delay) => toast.error(text, {
    position: 'bottom-right',
    autoClose: delay,
    hideProgressBar: false
});

class Settings extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			profiles: [],
			sizes: [],
			selectSize: 'Preferred Size',
			selectProfile: 'Choose Profile',
			refreshPage: '',
			qtProfile: '',
			preferredSize: '',
			account: '',
			password: '',
			webhook: '',
			discord: ''
		}
	}

	refreshPage() {
        this.setState({
            refreshPage : Math.floor(Math.random() * 99999)
        })
    }

	handleClickSize = (event) => {
		this.setState({ selectSize: event, preferredSize: event })
	}

	handleClickProfile = (event) => {
		this.setState({ selectProfile: event, qtProfile: event })
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmitDiscordTest = async event =>{
		event.preventDefault();

		let body = {
			"content": null,
			"embeds": [{
				"title": "ExathAIO Test Webhook",
				"url": "https://twitter.com/ExathAIO",
				"color": 2144324,
				"fields": [
					{
						"name": "Product",
						"value": "Test Product"
					},
					{
						"name": "Size",
						"value": "rs"
					},
					{
						"name": "Price",
						"value": "$1"
					},
					{
					"name": "Store",
					"value": "ExathAIO"
					},
					{
					"name": "Mode",
					"value": "Default"
					}
				],
				"footer": {
					"text": "ExathAIO v1.0.0",
					"icon_url": "https://cdn.discordapp.com/attachments/764840125850189854/844530421588688896/ExathAIO_Profile_Picture_1.png"
				},
				"thumbnail": {
					"url": "https://cdn.discordapp.com/attachments/764840125850189854/844530421588688896/ExathAIO_Profile_Picture_1.png"
				}
			}]
		}

		axios.post(this.state.webhook, body, {"Content-Type": "application/json"})
		.then(async res => {
			notifySuccess('Successfully Hit Webhook', 3000)
            await new Promise(r => setTimeout(r, 1000))
			this.refreshPage()
		}).catch(error => {
			notifyError('Error while hitting Discord Webhook..', 3000)
		})
	}

	handleSubmitUpdateSettings = async (event) =>{
		event.preventDefault();

		axios.put('http://exath.io/api/settings/update/', {
			"qtProfile": this.state.qtProfile,
			"preferredSize": this.state.preferredSize,
			"account": this.state.account,
			"password": this.state.password,
			"webhook": this.state.webhook,
		})
		.then(async () => {
			notifySuccess('Successfully updated settings', 3000)
            await new Promise(r => setTimeout(r, 1000))
			this.refreshPage();
		}).catch(() => {
			notifyError('Error updated settings ', 3000)
		})
	}


	async componentDidMount(){
		await this.getProfiles()
		await this.getSizes()
		await this.getSettings()
	}

	async componentDidUpdate(prevprop){
		if(prevprop != this.props){
			await this.getProfiles()
			await this.getSizes()
			await this.getSettings()
			this.setState({
				refreshPage: this.refreshPage
			})
		}
	}

	getProfiles = async () =>{
		await axios.get('http://exath.io/api/profiles')
		.then(response => {
			this.setState({
				profiles : response.data
			})
		}, () => {
			notifyError('Error while retrieving profiles data..')
		})
	}

	getSizes = async () =>{
		await axios.get('http://exath.io/api/sizes')
		.then(response => {
			this.setState({
				sizes : response.data
			})
		}, () => {
			notifyError('Error while retrieving sizes data..')
		})
	}

	getSettings = async () => {
		await axios.get('http://exath.io/api/settings')
		.then(response => {
			this.setState({
				webhook: response.data.webhook,
				qtProfile: response.data.qtProfile,
				preferredSize: response.data.preferredSize,
				account: response.data.account,
				password: response.data.password,
				discord: response.data.discord
			})
		},
		() => {
			notifyError('Error while retrieving settings..')
		})
	}

	getProfileNameById = (id) => {
		var results = ""
		this.state.profiles.forEach(profile => {
			if (profile.id == id) {
				results = profile.name
			}
		});
		return results
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
							<form variant="outline-none" className="setup-button-wrapper d-flex pt-1 ml-3">
								<img className="discord_icon pt-0" src={discord_logo} />
								<input type="text" className="background-color ml-1" style={{outline: 'none'}} placeholder="Discord Webhook" name="webhook"
									value={this.state.webhook} onChange={this.handleChange} required />
							</form>
							<div className="col-1" style={{marginLeft: '25px'}}></div>

							<Button variant="outline-none" className="test-button-wrapper col-1" onClick={this.handleSubmitDiscordTest}>
								<p className="heading my-auto text-center">Test</p>
							</Button>
						</div>

						<div className="quick-task-wrapper row">
							<div className="col-3 pt-4 ml-3">
								<h1 className="quick-task" style={{fontWeight: "bold"}}>Quick Task</h1>
							</div>
						</div>
						<div className="row mx-auto pt-2">	
							<Dropdown onSelect = {this.handleClickProfile} name="qtProfile" onChange={this.handleChange}>
								<Dropdown.Toggle variant="outline-none" className="quick-task-button-wrapper  pt-1 d-flex ml-3">
									<img className="icon" src={profile_logo} />
									<p className="heading my-auto ml-2">{this.state.qtProfile ? this.getProfileNameById(this.state.qtProfile) : this.state.selectProfile}</p>
								</Dropdown.Toggle>
								<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}}>
									{this.state.profiles.map((e) => {
										return(<Dropdown.Item active={e.id == this.state.qtProfile} eventKey={e.id}>{e.name}</Dropdown.Item>)
									})}
								</Dropdown.Menu>
							</Dropdown>
						</div>

						<div className="row mx-auto pt-3">
							<Dropdown onSelect = {this.handleClickSize} name="preferredSize" onChange={this.handleChange}>
								<Dropdown.Toggle variant="outline-none" className="quick-task-button-wrapper col pt-1 d-flex ml-3">
									<img className="icon" src={ruler_logo} />
									<p className="heading my-auto ml-2" >{this.state.preferredSize ? this.state.preferredSize : this.state.selectSize}</p>
								</Dropdown.Toggle>

								<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}}>
								{this.state.sizes.map((e) => {
									return(<Dropdown.Item active={e == this.state.preferredSize} eventKey={e}>{e}</Dropdown.Item>)
								})}
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<div className="row mx-auto pt-3">
							<form className="col-4 quick-task-button-wrapper ml-3">
								<img className="discord_icon" src={user_logo} />
								<input type="text" className="background-color ml-3" onChange={this.handleChange} placeholder="Account" name="account" 
									value={this.state.account} required/>
							</form>
							<div className="col-1"></div>
							<form className="col-4 quick-task-button-wrapper">
								<img className="discord_icon" src={password_logo} />
								<input type="password" className="background-color ml-3" onChange={this.handleChange} placeholder="Password" name="password" 
									value={this.state.password} required/>
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
							<Button variant="outline-none" className="cfu-button-wrapper pt-1 ml-3" onClick={this.handleSubmitUpdateSettings}>
								<p className="heading text-center">Update Settings</p>
							</Button>
						</div>

					</div>
				</div>
				<ToastContainer newestOnTop />
			</div>
		);
	}
}

export default Settings;