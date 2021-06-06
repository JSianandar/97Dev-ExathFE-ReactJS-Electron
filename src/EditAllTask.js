import React from 'react';
import './css/EditAllTask.css';
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

class EditAllTask extends React.Component{
	constructor(){
		super()
		this.state = {
			profiles: [],
			sizes: [],
			sites: [],
			proxies: [],
			selectSite: 'Select Site',
			selectSize: 'Size',
			selectProfile: 'Profile',
			selectProxies: 'Proxies',
			selectMode: 'Select Mode'
		}
	}

	handleClickSite = (event) => {
		this.setState({ selectSite: event })
		console.log(event)
	}

	handleClickSize = (event) => {
		this.setState({ selectSize: event })
	}

	handleClickProfile = (event) => {
		this.setState({ selectProfile: event })
	}

	handleClickProxies = (event) => {
		this.setState({ selectProxies: event })
	}

	handleClickMode = (event) => {
		this.setState({ selectMode: event })
		console.log(event)
	}

	async componentDidMount(){
		await this.getProfiles();
		await this.getSizes();
		await this.getSites();
		await this.getProxies();
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

	render(){
		return(
			<div className="edit-all-task-container">
				<div className="row pt-2">
					<div className="col-4 ml-3">
						<h1 style={{fontWeight: "bold"}}>Edit All Tasks</h1>
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
							<Dropdown.Item href="#/action-1" eventKey= "SafePreload" >Safe Preload</Dropdown.Item>
							<Dropdown.Item href="#/action-1" eventKey= "Safe">Safe</Dropdown.Item>
							<Dropdown.Item href="#/action-1" eventKey= "Request">Request</Dropdown.Item>
							<Dropdown.Item href="#/action-1" eventKey= "Requests">Requests</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>

				<div className="row pt-4">
					<form variant="outline-none" className="text-area-left  ml-5 d-flex">
						<img src={keyword_icon} style={{width: '18.66px', marginLeft: '12px'}}/>
						<input type="text" className="background-color ml-2" style={{outline: 'none'}} placeholder = "Keywords/URL/SKU" required name="positiveKey" onChange={this.handleChange}/>
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
						<input type="text" className="background-color ml-2" style={{outline: 'none'}} placeholder = "Number of Tasks" required name="quantity" onChange={this.handleChange}/>
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
						<input type="text" className="background-color ml-2" style={{outline: 'none'}} placeholder = "Account" required name="accountEmail" onChange={this.handleChange}/>
					</form>
					
					<form className="text-area-left col-5 ml-5">
						<img src={password_icon}/>
						<input type="text" className="background-color ml-2" style={{outline: 'none'}} placeholder = "Password" required name="accountPassword onChange={this.handleChange}"/>
					</form>
				</div>

				<div className="row pt-5">
					<div className="col-8"></div>
					<div className="col-1 ml-5">
						<Link data-toggle="modal" data-target="#editAllTask" className="button-text" style={{ textDecoration: 'none' }}>Close</Link>
					</div>
					<div className="col-2 ml-4">
						<Link data-toggle="modal" data-target="#editAllTask" className="button-text" style={{ textDecoration: 'none' }}>Save</Link>
					</div>
					


				</div>

			</div>
		);
	}
}



export default EditAllTask;