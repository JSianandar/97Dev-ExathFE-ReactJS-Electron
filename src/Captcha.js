import React from 'react';
import './css/Captcha.css';
import {Link} from 'react-router-dom';

import export_logo from "./assets/icons/export_logo.png";
import import_logo from "./assets/icons/import_logo.png";
import create_logo from "./assets/icons/create_task_logo.png";
import harvester_logo from "./assets/icons/harvester_logo.svg";

import table_edit from "./assets/icons/table_edit.png";
import table_delete from "./assets/icons/table_delete.png";
import TitleBar from './TitleBar.js';
import IndividualCaptcha from './IndividualCaptcha.js';
import CreateCaptcha from './CreateCaptcha.js';
import EditCaptcha from './EditCaptcha.js';
import CaptchaHarvester from './CaptchaHarvester.js';

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
			<div className="captcha">
				<TitleBar/>
				<div className="captcha-container pt-0">
					<div className="page-wrapper mx-auto">
						<div className="profile-icons-wrapper row">
							<div className="left-control-panel col-2 pt-1">
								<ul className="icons-wrapper pt-4 mr-0">
									<li className="icon"><Link><img src={export_logo}/></Link></li>
									<li className="icon"><Link><img src={import_logo}/></Link></li>
								</ul>
							</div>
							<div className="col-8"></div>
							<div className="right-control-panel col-2 pt-1">
								<ul className="icons-wrapper pt-4 mr-0">
									<li></li>
									<li className="icon"><Link data-toggle="modal" data-target="#createCaptcha"><img src={create_logo}/></Link></li>
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
						
							<div className="col-2 ml-2">
								<h1 className="headings text-center">Actions</h1>
							</div>
						
						</div>
						{/*IndividualCaptcha*/}
						<IndividualCaptcha/>
						{/*IndividualCaptcha*/}

						{/*CreateCaptchaModal*/}
							<div className="modal fade" id="createCaptcha" tabIndex="-1" aria-labelledby="createCaptchaLabel" aria-hidden="true">
								<CreateCaptcha/>
								<div className= "modal-dialog modal-dialog-centered">
									<div className="modal-content">		
									</div>
								</div>
							</div>
						{/*CreateCaptchaModal*/}
					</div>

				
				</div>
			</div>
		);
	}
}

export default Captcha;