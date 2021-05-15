import React from 'react';
import './css/EditTask.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import account_icon from './assets/icons/createtask/account.svg';
import keyword_icon from './assets/icons/createtask/keyword.svg';
import number_of_task_icon from './assets/icons/createtask/number_of_task.svg';
import password_icon from './assets/icons/createtask/password.svg';
import profile_icon from './assets/icons/createtask/profile.svg';
import proxy_icon from './assets/icons/createtask/proxy.svg';
import ruler_icon from './assets/icons/createtask/ruler.svg';
import select_site_icon from './assets/icons/createtask/select_site.svg';

class EditTask extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}

	componentDidMount(){

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
					<Button variant="outline-none" className="text-area-left col-6 ml-5 d-flex">
						<img className="pt-0" src={select_site_icon}/>
						<h2 className="ml-2">Select Site</h2>
					</Button>
					<div className="col-1"></div>
					<Button variant="outline-none"className="text-area-right col-4 mr-1 d-flex">
						<h2 className="">Select Mode</h2>
					</Button>

				</div>

				<div className="row pt-4">
					<Button variant="outline-none" className="text-area-left col-6 ml-5 d-flex">
						<img src={keyword_icon}/>
						<h2 className="ml-2">Keywords/URL/SKU</h2>
					</Button>
					<div className="col-1"></div>
					<Button variant="outline-none" className="text-area-right col-4 mr-1 d-flex">
						<img src={ruler_icon}/>
						<h2 className="ml-2">Size</h2>
					</Button>

				</div>

				<div className="row pt-4">
					<Button variant="outline-none" className="text-area-left col-6 ml-5 d-flex">
						<img src={profile_icon}/>
						<h2 className="ml-2">Profile</h2>
					</Button>
					<div className="col-1"></div>
					<Button variant="outline-none" className="text-area-right col-4 mr-1 d-flex">
						<img src={number_of_task_icon}/>
						<h2 className="ml-2">Number of Tasks</h2>
					</Button>

				</div>

				<div className="row pt-4">
					<Button variant="outline-none" className="text-area-left col-6 ml-5 d-flex">
						<img src={proxy_icon}/>
						<h2 className="ml-2">Proxies</h2>
					</Button>
					

				</div>

				<div className="row pt-4">
					<form className="text-area-left col-5 ml-5">
						<img src={account_icon}/>
						<input type="text" className="background-color ml-2" style={{outline: 'none'}} placeholder = "Account"/>
					</form>
					<div className=""></div>
					<form className="text-area-left col-5 ml-5">
						<img src={password_icon}/>
						<input type="text" className="background-color ml-2" style={{outline: 'none'}} placeholder = "Password"/>
					</form>
				</div>

				<div className="row pt-5">
					<div className="col-8"></div>
					<div className="col-1 ml-5">
						<Link to="/task" className="button-text" style={{ textDecoration: 'none' }}>Close</Link>
					</div>
					<div className="col-2 ml-4">
						<Link to="/task" className="button-text" style={{ textDecoration: 'none' }}>Save</Link>
					</div>
					


				</div>

			</div>
		);
	}
}



export default EditTask;