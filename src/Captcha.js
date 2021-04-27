import React from 'react';
import './css/Captcha.css';
import {Link} from 'react-router-dom';

import export_logo from "./assets/icons/export_logo.png";
import import_logo from "./assets/icons/import_logo.png";
import create_logo from "./assets/icons/create_task_logo.png";

class Captcha extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}

	componentDidMount(){

	}

	render(){
		return(
			<div className="proxies-container pt-1">
				<div className="page-wrapper mx-auto">
					<div className="profile-icons-wrapper row">
						<div className="left-control-panel col-2 pt-1">
							<ul className="icons-wrapper pt-4 mr-0">
								<li className="icon"><img src={export_logo}/></li>
								<li className="icon"><img src={import_logo}/></li>
							</ul>
						</div>
						<div className="col-8"></div>
						<div className="right-control-panel col-2 pt-1">
							<ul className="icons-wrapper pt-4 mr-0">
								<li></li>
								<li className="icon"><Link to="/create_captcha"><img src={create_logo}/></Link></li>
							</ul>
						</div>
					</div>

					<div className="table-heading mx-auto row">

						<div className="col-2 mr-5">
							<h1 className="headings text-center">Harvester</h1>
						</div>

						<div className="col-2 mr-5">
							<h1 className="headings text-center">Email</h1>
						</div>

						<div className="col-2">
							<h1 className="headings text-center">Proxy</h1>
						</div>

						
						<div className="col-2 mr-5"></div>
						
						<div className="col-2">
							<h1 className="headings text-center">Actions</h1>
						</div>
						
					</div>
					<Link to ="/captcha_harvester" className="captcha_harvester_button">Captcha Harvester (Testing)</Link>
				</div>

				
			</div>
		);
	}
}

export default Captcha;