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

import axios from 'axios';


class CreateTask extends React.Component{
	constructor(){
		super()
		this.state = {
			profiles: [],
			sizes: [],
			sites: [],
			proxies: []
		}
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
			<div className="create-task-container">
				<div className="row pt-2">
					<div className="col-4 ml-3">
						<h1 style={{fontWeight: "bold"}}>Create Task</h1>
					</div>
				</div>

				<div className="row pt-4">
					<Dropdown>
						<Dropdown.Toggle variant="outline-none" className="text-area-left col ml-5 d-flex">
							<img className="pt-0" src={select_site_icon}/>
							<h2 className="ml-2">Select Site</h2>
						</Dropdown.Toggle>

						<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}}>
							{this.state.sites.map((e, index) => {
									
								return(<Dropdown.Item href="#/action-1">{e.identifier}</Dropdown.Item>)
									
							})}
						</Dropdown.Menu>


					</Dropdown>

					<Dropdown>
						<Dropdown.Toggle variant="outline-none"className="text-area-right col d-flex" style={{marginLeft: '40px'}}>
							<h2 className="">Select Mode</h2>
						</Dropdown.Toggle>

						<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}}>
							<Dropdown.Item href="#/action-1">Safe Preload</Dropdown.Item>
							<Dropdown.Item href="#/action-1">Safe</Dropdown.Item>
							<Dropdown.Item href="#/action-1">Request</Dropdown.Item>
							<Dropdown.Item href="#/action-1">Requests</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>

				<div className="row pt-4">
					<form variant="outline-none" className="text-area-left col-6 ml-5 d-flex">
						<img src={keyword_icon} style={{width: '18.66px'}}/>
						<input type="text" className="background-color ml-2" style={{outline: 'none'}} placeholder = "Keywords/URL/SKU" required/>
					</form>
					<Dropdown>
						<Dropdown.Toggle variant="outline-none" className="text-area-right col d-flex" style={{marginLeft: '45px'}}>
							<img src={ruler_icon}/>
							<h2 className="ml-2">Size</h2>
						</Dropdown.Toggle>

						<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}}>
							{this.state.sizes.map((e, index) => {
									
								return(<Dropdown.Item href="#/action-1">{e}</Dropdown.Item>)
									
							})}
						</Dropdown.Menu>
					</Dropdown>

				</div>

				<div className="row pt-4">
					<Dropdown>
						<Dropdown.Toggle variant="outline-none" className="text-area-left col ml-5 d-flex">
							<img src={profile_icon}/>
							<h2 className="ml-2">Profile</h2>
						</Dropdown.Toggle>

						<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}}>
							{this.state.profiles.map((e, index) => {
									
								return(<Dropdown.Item href="#/action-1">{e.name}</Dropdown.Item>)
									
							})}
						</Dropdown.Menu>
					</Dropdown>
					<div className="col-1"></div>
					<form variant="outline-none" className="text-area-right col-4 d-flex" style={{marginLeft: '-7px'}}>
						<img src={number_of_task_icon} style={{width: '20.73px'}}/>
						<input type="text" className="background-color ml-2" style={{outline: 'none'}} placeholder = "Number of Tasks" required/>
					</form>

				</div>

				<div className="row pt-4">
					<Dropdown>
						<Dropdown.Toggle variant="outline-none" className="text-area-left col ml-5 d-flex">
							<img src={proxy_icon}/>
							<h2 className="ml-2">Proxies</h2>
						</Dropdown.Toggle>
					
					
						<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}}>
							{this.state.proxies.map((e, index) => {
									
								return(<Dropdown.Item href="#/action-1">{e.group}</Dropdown.Item>)
									
							})}
						</Dropdown.Menu>
					</Dropdown>
				</div>

				<div className="row pt-4">
					<form className="text-area-left col-5 ml-5">
						<img src={account_icon}/>
						<input type="text" className="background-color ml-2" style={{outline: 'none'}} placeholder = "Account" required/>
					</form>
					
					<form className="text-area-left col-5 ml-5">
						<img src={password_icon}/>
						<input type="text" className="background-color ml-2" style={{outline: 'none'}} placeholder = "Password" required/>
					</form>
				</div>

				<div className="row pt-5">
					<div className="col-8"></div>
					<div className="col-1 ml-5">
						<Link data-toggle="modal" data-target="#createTask" className="button-text" style={{ textDecoration: 'none' }}>Close</Link>
					</div>
					<div className="col-2 ml-4">
						<Link data-toggle="modal" data-target="#createTask" className="button-text" style={{ textDecoration: 'none' }}>Create</Link>
					</div>
					


				</div>

			</div>
		);
	}
}



export default CreateTask;