import React from 'react';
import './css/EditTask.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import account_icon from './assets/icons/createtask/account.svg';
import keyword_icon from './assets/icons/createtask/keyword.svg';
import number_of_task_icon from './assets/icons/createtask/number_of_task.svg';
import password_icon from './assets/icons/createtask/password.svg';
import profile_icon from './assets/icons/createtask/profile.svg';
import proxy_icon from './assets/icons/createtask/proxy.svg';
import ruler_icon from './assets/icons/createtask/ruler.svg';
import select_site_icon from './assets/icons/createtask/select_site.svg';
import axios from 'axios';

class EditTask extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			profiles: [],
			sizes: [],
			sites: [],
			proxies: [],
			profile: this.props.profile,
			site: this.props.site,
			mode: this.props.mode,
			sku: this.props.sku,
			id: this.props.id,
			accountEmail: this.props.accountEmail,
			accountPassword: this.props.accountPassword,
			positiveKey:'',
			negativeKey:'',
			directLink:'',
			size: this.props.size,
			proxyGroup: this.props.proxyGroup,
			selectSite: 'Select Site',
			selectSize: 'Size',
			selectProfile: 'Profile',
			selectProxies: 'Proxies',
			selectMode: 'Select Mode',
			refreshPageState: '',

		}
		console.log(this.state)
	}

	async componentDidMount(){
		await this.getProfiles();
		await this.getSizes();
		await this.getSites();
		await this.getProxies();
		await this.setState({a: "a"})
	}

	handleClickSite = (event) => {
		this.setState({ selectSite: event, site: event })
		console.log(event)
	}

	handleClickSize = (event) => {
		this.setState({ selectSize: event, size: event })
	}

	handleClickProfile = (event) => {
		this.setState({ selectProfile: event, profile: event })
	}

	handleClickProxies = (event) => {
		this.setState({ selectProxies: event, proxyGroup: event })
	}

	handleClickMode = (event) => {
		this.setState({ selectMode: event, mode: event })
		console.log(event)
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
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

	handleSubmit = event =>{
		event.preventDefault();


		axios.put(`http://exath.io/api/tasks/update/${this.state.id}`, {
			"profile": this.getStateProfileIdByName(this.state.profile),
			"site": this.state.site,
			"mode": this.state.mode,
			"sku": this.state.sku,
			"positiveKey" : this.state.positiveKey,
			"negativeKey": this.state.negativeKey,
			"directLink": this.state.directLink,
			"size": this.state.size,
			"proxyGroup": this.getStateProxyIdByGroup(this.state.proxyGroup),
			"accountEmail": this.state.accountEmail,
			"accountPassword": this.state.accountPassword,
		})
		.then(res => {
			console.log(res);
			console.log(res.data);
			this.props.refreshPageState()
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

	getProxies = async () =>{
		await axios.get('http://exath.io/api/proxies')
		.then(response => {
		
			this.setState({
				proxies : response.data
			})
		},
		error=>{
		
		})
	}

	getSites = async () =>{
		await axios.get('http://exath.io/api/sitelist')
		.then(response => {
		
			this.setState({
				sites : response.data
			})
		},
		error=>{
		
		})
	}

	getStateProfileIdByName(name){
		var profileId = ''
		for(var i=0; i<this.state.profiles.length; i++) {
			if(this.state.profiles[i].name == name) {
				profileId = this.state.profiles[i].id;
				break;
			}
		}
		return profileId;
	}

	getStateProxyIdByGroup(group){
		var proxyId = ''
		for(var i=0; i<this.state.proxies.length; i++) {
			if(this.state.proxies[i].group == group) {
				proxyId = this.state.proxies[i].id;
				break;
			}
		}
		return proxyId;

	}

	async componentDidUpdate(prevprop){
		console.log('prevprop', prevprop)

		if(prevprop.refreshPageState != this.props.refreshPageState){
			await this.getProfiles();
			await this.getSizes();
			await this.getSites();
			await this.getProxies();
			document.getElementById('input-keyword').value = ''
			document.getElementById('input-quantity').value = ''
			document.getElementById('input-account').value = ''
			document.getElementById('input-password').value = ''
			this.setState({
				selectSite: 'Select Site',
				selectSize: 'Size',
				selectProfile: 'Profile',
				selectProxies: 'Proxies',
				selectMode: 'Select Mode',
				inputKeyword: 'Keywords/URL/SKU',
				inputAccount: 'Account',
				inputPassword: 'Password',
				refreshPageState : this.props.refreshPageState
				
			})
		}
	}


	render(){
		return(
			<div className="edit-task-container">
				<div className="row pt-2">
					<div className="col-4 ml-3">
						<h1 style={{fontWeight: "bold"}}>Edit Task</h1>
					</div>
				</div>

				<div className="row pt-4">
					<Dropdown name="site" onChange={this.handleChange} onSelect = {this.handleClickSite}>
						<Dropdown.Toggle variant="outline-none" className="text-area-left ml-5 d-flex">
							<img className="pt-0" src={select_site_icon}/>
							<h2 className="ml-2" style={{marginTop: '-3px'}}>{this.state.site}</h2>
						</Dropdown.Toggle>

						<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}}>
							{this.state.sites.map((e, index) => {
									
								return(<Dropdown.Item href="#/action-1" active = {e.identifier == this.state.site} eventKey= {e.identifier} >{e.identifier}</Dropdown.Item>)
									
							})}
						</Dropdown.Menu>


					</Dropdown>

					<Dropdown name="mode" onChange={this.handleChange} onSelect= {this.handleClickMode}>
						<Dropdown.Toggle variant="outline-none"className="text-area-right  d-flex" style={{marginLeft: '40px'}}>
							<h2 className="" style={{marginTop: '-3px'}}>{this.state.mode}</h2>
						</Dropdown.Toggle>

						<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}}>
							<Dropdown.Item href="#/action-1" active = {"Safe Preload" == this.state.mode} eventKey= "Safe Preload" >Safe Preload</Dropdown.Item>
							<Dropdown.Item href="#/action-1" active = {"Safe" == this.state.mode} eventKey= "Safe">Safe</Dropdown.Item>
							<Dropdown.Item href="#/action-1" active = {"Request" == this.state.mode} eventKey= "Request">Request</Dropdown.Item>
							<Dropdown.Item href="#/action-1" active = {"Requests" == this.state.mode} eventKey= "Requests">Requests</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>

				<div className="row pt-4">
					<form variant="outline-none" className="text-area-left  ml-5 d-flex">
						<img src={keyword_icon} style={{width: '18.66px', marginLeft: '12px'}}/>
						<input type="text" className="background-color ml-2" style={{outline: 'none'}} placeholder = "Keywords/URL/SKU" id= "input-keyword" value = {this.state.sku} required name="sku" onChange={this.handleChange}/>
					</form>
					<Dropdown name="size" onChange={this.handleChange} onSelect= {this.handleClickSize}>
						<Dropdown.Toggle variant="outline-none" className="text-area-right  d-flex" style={{marginLeft: '40px'}}>
							<img src={ruler_icon}/>
							<h2 className="ml-2" style={{marginTop: '-3px'}}>{this.state.size}</h2>
						</Dropdown.Toggle>

						<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}} >
							{this.state.sizes.map((e, index) => {
									
								return(<Dropdown.Item href="#/action-1" active = {e == this.state.size} eventKey= {e} >{e}</Dropdown.Item>)
									
							})}
						</Dropdown.Menu>
					</Dropdown>

				</div>

				<div className="row pt-4">
					<Dropdown name="profile" onChange={this.handleChange} onSelect={this.handleClickProfile}>
						<Dropdown.Toggle variant="outline-none" className="text-area-left col ml-5 d-flex">
							<img src={profile_icon}/>
							<h2 className="ml-2" style={{marginTop: '-3px'}}>{this.state.profile}</h2>
						</Dropdown.Toggle>

						<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}} >
							{this.state.profiles.map((e, index) => {
									
								return(<Dropdown.Item href="#/action-1" active = {e.name == this.state.profile} eventKey={e.name}>{e.name}</Dropdown.Item>)
									
							})}
						</Dropdown.Menu>
					</Dropdown>
					<div className="col-1"></div>

				</div>

				<div className="row pt-4">
					<Dropdown name="proxyGroup" onChange={this.handleChange} onSelect={this.handleClickProxies}>
						<Dropdown.Toggle variant="outline-none" className="text-area-left col ml-5 d-flex">
							<img src={proxy_icon}/>
							<h2 className="ml-2" style={{marginTop: '-3px'}}>{this.state.proxyGroup}</h2>
						</Dropdown.Toggle>
					
					
						<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}} >
							{this.state.proxies.map((e, index) => {
									
								return(<Dropdown.Item href="#/action-1" active = {e.group == this.state.proxyGroup}eventKey= {e.group} >{e.group}</Dropdown.Item>)
									
							})}
						</Dropdown.Menu>
					</Dropdown>
				</div>

				<div className="row pt-4">
					<form className="text-area-left col-5 ml-5">
						<img src={account_icon}/>
						<input type="text" className="background-color ml-2" style={{outline: 'none'}} value = {this.state.accountEmail} placeholder = "Account" id="input-account" required name="accountEmail" onChange={this.handleChange}/>
					</form>
					
					<form className="text-area-left col-5 ml-5">
						<img src={password_icon}/>
						<input type="password" className="background-color ml-2" style={{outline: 'none'}} value = {this.state.accountPassword} placeholder = "Password" id="input-password" required name="accountPassword" onChange={this.handleChange}/>
					</form>
				</div>

				<div className="row pt-5">
					<div className="col-8"></div>
					<div className="col-1 ml-5">
						<Link data-dismiss="modal" className="button-text" style={{ textDecoration: 'none' }}>Close</Link>
					</div>
					<div className="col-2 ml-4">
						<Link data-dismiss="modal" className="button-text" style={{ textDecoration: 'none' }} onClick= {this.handleSubmit}>Save</Link>
					</div>
					


				</div>

			</div>
		);
	}
}



export default EditTask;