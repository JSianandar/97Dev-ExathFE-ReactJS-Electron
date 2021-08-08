import React from 'react';
import './css/CreateTask.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

import account_icon from './assets/icons/createtask/account.svg';
import keyword_icon from './assets/icons/createtask/keyword.svg';
import number_of_task_icon from './assets/icons/createtask/number_of_task.svg';
import password_icon from './assets/icons/createtask/password.svg';
import profile_icon from './assets/icons/createtask/profile.svg';
import proxy_icon from './assets/icons/createtask/proxy.svg';
import ruler_icon from './assets/icons/createtask/ruler.svg';
import select_site_icon from './assets/icons/createtask/select_site.svg';
import Task from './Task.js';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (text, delay) => toast.dark(text, {
    position: 'bottom-right',
    autoClose: delay,
    hideProgressBar: false
});

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


class CreateTask extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			profiles: [],
			sizes: [],
			sites: [],
			proxies: [],
			profile:'',
			site:'',
			mode:'',
			sku:'',
			positiveKey:'',
			negativeKey:'',
			directLink:'',
			size:'',
			proxyGroup: '',
			accountEmail: '',
			accountPassword: '',
			quantity: '',
			selectSite: 'Select Site',
			selectSize: 'Size',
			selectProfile: 'Profile',
			selectProxies: 'Proxies',
			selectMode: 'Select Mode',
			inputKeyword: 'Keywords/URL/SKU',
			inputAccount: 'Account',
			inputPassword: 'Password',
			inputQuantity: 'Number of Tasks',
			refreshPageState: ''
		}
	}

	initializeState = async () => {
		await this.setState({
			profiles: [],
			sizes: [],
			sites: [],
			proxies: [],
			profile:'',
			site:'',
			mode:'',
			sku:'',
			positiveKey:'',
			negativeKey:'',
			directLink:'',
			size:'',
			proxyGroup: '',
			accountEmail: '',
			accountPassword: '',
			quantity: '',
			selectSite: 'Select Site',
			selectSize: 'Size',
			selectProfile: 'Profile',
			selectProxies: 'Proxies',
			selectMode: 'Select Mode',
			inputKeyword: 'Keywords/URL/SKU',
			inputAccount: 'Account',
			inputPassword: 'Password',
			inputQuantity: 'Number of Tasks',
			refreshPageState: ''
		})
	}

	handleClickSite = (event) => {
		this.setState({ selectSite: event, site: event})
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
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = async (event) =>{
		event.preventDefault();

		let skuArray = this.state.sku.split(',')
		let positiveKey = []
		let negativeKey = []
		let directLink = ''
		let sku = ''

		for(let i=0; i<skuArray.length; i++) {
			if(skuArray[i][0] == '+'){
				positiveKey.push(skuArray[i].substring(1))
			}
			else if(skuArray[i][0] == '-'){
				negativeKey.push(skuArray[i].substring(1))
			}
			else if(skuArray[i][0] == '#'){
				directLink = skuArray[i].substring(1)
			}
			else if(skuArray[i][0] == '&'){
				sku = skuArray[i].substring(1)
			}
		}

		axios.post('http://exath.io/api/tasks/create', {
			"profile": this.getStateProfileIdByName(this.state.profile),
			"site": this.state.site,
			"mode": this.state.mode,
			"sku": sku,
			"positiveKey" : positiveKey,
			"negativeKey": negativeKey,
			"directLink": directLink,
			"size": this.state.size,
			"proxyGroup": this.getStateProxyIdByGroup(this.state.proxyGroup),
			"accountEmail": this.state.accountEmail,
			"accountPassword": this.state.accountPassword,
			"quantity": this.state.quantity
		}).then( async res => {
			try {
				document.getElementById('CreateTaskForm-KeywordInput').value = ''
				document.getElementById('CreateTaskForm-QuantityInput').value = ''
				document.getElementById('CreateTaskForm-AccountInput').value = ''
				document.getElementById('CreateTaskForm-PasswordInput').value = ''
			} finally {
				notifySuccess('Successfully created task(s)', 3000)
				await new Promise(r => setTimeout(r, 1000))
				await this.props.refreshPage()
			}
		})
		
	}


	async componentDidMount(){
		await this.getProfiles();
		await this.getSizes();
		await this.getSites();
		await this.getProxies();
	}

	async componentDidUpdate(prevprop){
		if(prevprop.refreshPageState != this.props.refreshPageState){
			await this.initializeState();
			await this.getProfiles();
			await this.getSizes();
			await this.getSites();
			await this.getProxies();
			this.setState({
				refreshPageState : this.props.refreshPageState
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


	render(){
		return(
			<div className="create-task-container">
				<div className="row pt-2">
					<div className="col-4 ml-3">
						<h1 style={{fontWeight: "bold"}}>Create Task</h1>
					</div>
				</div>

				<div className="row pt-4">
					<Dropdown name="site" onChange={this.handleChange} onSelect = {this.handleClickSite}>
						<Dropdown.Toggle variant="outline-none" className="text-area-left ml-5 d-flex">
							<img className="pt-0" src={select_site_icon}/>
							<h2 className="ml-2" style={{marginTop: '-3px'}}>{this.state.selectSite}</h2>
						</Dropdown.Toggle>

						<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}}>
							{this.state.sites.map((e, index) => {
									
								return(<Dropdown.Item href="#/action-1" eventKey= {e.identifier} >{e.identifier}</Dropdown.Item>)
									
							})}
						</Dropdown.Menu>


					</Dropdown>

					<Dropdown name="mode" onChange={this.handleChange} onSelect= {this.handleClickMode}>
						<Dropdown.Toggle variant="outline-none"className="text-area-right  d-flex" style={{marginLeft: '40px'}}>
							<h2 className="" style={{marginTop: '-3px'}}>{this.state.selectMode}</h2>
						</Dropdown.Toggle>

						<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}}>
							<Dropdown.Item href="#/action-1" eventKey= "Safe Preload" >Safe Preload</Dropdown.Item>
							<Dropdown.Item href="#/action-1" eventKey= "Safe">Safe</Dropdown.Item>
							<Dropdown.Item href="#/action-1" eventKey= "Request">Request</Dropdown.Item>
							<Dropdown.Item href="#/action-1" eventKey= "Requests">Requests</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>

				<div className="row pt-4">
					<form variant="outline-none" className="text-area-left  ml-5 d-flex">
						<img src={keyword_icon} style={{width: '18.66px', marginLeft: '12px'}}/>
						<input id="CreateTaskForm-KeywordInput" type="text" className="background-color ml-2" style={{outline: 'none', width: '400px'}} placeholder={this.state.inputKeyword} required name="sku" onChange={this.handleChange}/>
					</form>
					<Dropdown name="size" onChange={this.handleChange} onSelect= {this.handleClickSize}>
						<Dropdown.Toggle variant="outline-none" className="text-area-right  d-flex" style={{marginLeft: '40px'}}>
							<img src={ruler_icon}/>
							<h2 className="ml-2" style={{marginTop: '-3px'}}>{this.state.selectSize}</h2>
						</Dropdown.Toggle>

						<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}} >
							{this.state.sizes.map((e, index) => {
									
								return(<Dropdown.Item href="#/action-1" eventKey= {e} >{e}</Dropdown.Item>)
									
							})}
						</Dropdown.Menu>
					</Dropdown>

				</div>

				<div className="row pt-4">
					<Dropdown name="profile" onChange={this.handleChange} onSelect={this.handleClickProfile}>
						<Dropdown.Toggle variant="outline-none" className="text-area-left col ml-5 d-flex">
							<img src={profile_icon}/>
							<h2 className="ml-2" style={{marginTop: '-3px'}}>{this.state.selectProfile}</h2>
						</Dropdown.Toggle>

						<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}} >
							{this.state.profiles.map((e, index) => {
									
								return(<Dropdown.Item href="#/action-1" eventKey={e.name}>{e.name}</Dropdown.Item>)
									
							})}
						</Dropdown.Menu>
					</Dropdown>
					<div className="col-1"></div>
					<form variant="outline-none" className="text-area-right d-flex" style={{marginLeft: '-33px'}}>
						<img src={number_of_task_icon} style={{width: '20.73px', marginLeft: '13px'}}/>
						<input id="CreateTaskForm-QuantityInput" type="text" className="background-color ml-2" style={{outline: 'none'}} placeholder = {this.state.inputQuantity} required name="quantity" onChange={this.handleChange}/>
					</form>

				</div>

				<div className="row pt-4">
					<Dropdown name="proxyGroup" onChange={this.handleChange} onSelect={this.handleClickProxies}>
						<Dropdown.Toggle variant="outline-none" className="text-area-left col ml-5 d-flex">
							<img src={proxy_icon}/>
							<h2 className="ml-2" style={{marginTop: '-3px'}}>{this.state.selectProxies}</h2>
						</Dropdown.Toggle>
					
						<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}} >
							{this.state.proxies.map((e, index) => {
									
								return(<Dropdown.Item href="#/action-1" eventKey= {e.group} >{e.group}</Dropdown.Item>)
									
							})}
						</Dropdown.Menu>
					</Dropdown>
				</div>

				<div className="row pt-4">
					<form className="text-area-left col-5 ml-5">
						<img src={account_icon}/>
						<input id="CreateTaskForm-AccountInput" type="text" className="background-color ml-2" style={{outline: 'none'}} placeholder={this.state.inputAccount} required name="accountEmail" onChange={this.handleChange}/>
					</form>
					
					<form className="text-area-left col-5 ml-5">
						<img src={password_icon}/>
						<input id="CreateTaskForm-PasswordInput" type="password" className="background-color ml-2" style={{outline: 'none'}} placeholder = {this.state.inputPassword} required name="accountPassword" onChange={this.handleChange}/>
					</form>
				</div>

				<div className="row pt-5">
					<div className="col-8"></div>
					<div className="col-1 ml-5">
						<Link data-toggle="modal" data-target="#createTask" className="button-text" style={{ textDecoration: 'none' }} >Close</Link>
					</div>
					<div className="col-2 ml-4">
						<Link data-toggle="modal" data-target="#createTask" className="button-text" style={{ textDecoration: 'none' }} onClick= {(e) => {this.handleSubmit(e)}} >Create</Link>
					</div>
					


				</div>

			</div>
		);
	}
}



export default CreateTask;