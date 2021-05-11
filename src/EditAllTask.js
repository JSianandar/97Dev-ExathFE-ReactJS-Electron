import React from 'react';
import './css/EditAllTask.css';
import {Link} from 'react-router-dom';

import account_icon from './assets/icons/createtask/account.svg';
import keyword_icon from './assets/icons/createtask/keyword.svg';
import number_of_task_icon from './assets/icons/createtask/number_of_task.svg';
import password_icon from './assets/icons/createtask/password.svg';
import profile_icon from './assets/icons/createtask/profile.svg';
import proxy_icon from './assets/icons/createtask/proxy.svg';
import ruler_icon from './assets/icons/createtask/ruler.svg';
import select_site_icon from './assets/icons/createtask/select_site.svg';

class EditAllTask extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}

	componentDidMount(){

	}

	render(){
		return(
			<div className="edit-all-task-container">
				<div className="row pt-2">
					<div className="col-4 ml-3">
						<h1>Edit All Tasks</h1>
					</div>
				</div>

				<div className="row pt-4">
					<div className="text-area-left col-6 ml-5">
						<img src={select_site_icon}/>
					</div>
					<div className="col-1"></div>
					<div className="text-area-right col-4 mr-1">
						<h2 className="pt-1">Select Mode</h2>
					</div>

				</div>

				<div className="row pt-4">
					<div className="text-area-left col-6 ml-5">
						<img src={keyword_icon}/>
					</div>
					<div className="col-1"></div>
					<div className="text-area-right col-4 mr-1">
						<img src={ruler_icon}/>
					</div>

				</div>

				<div className="row pt-4">
					<div className="text-area-left col-6 ml-5">
						<img src={profile_icon}/>
					</div>
					<div className="col-1"></div>
				</div>

				<div className="row pt-4">
					<div className="text-area-left col-6 ml-5">
						<img src={proxy_icon}/>
					</div>
					

				</div>

				<div className="row pt-4">
					<div className="text-area-left col-5 ml-5">
						<img src={account_icon}/>
					</div>
					<div className=""></div>
					<div className="text-area-left col-5 ml-5">
						<img src={password_icon}/>
					</div>
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



export default EditAllTask;