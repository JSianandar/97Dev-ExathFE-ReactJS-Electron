import React from 'react';
import './css/Captcha.css';
import {Link} from 'react-router-dom';

import create_logo from "./assets/icons/create_task_logo.png";

import TitleBar from './TitleBar.js';
import IndividualCaptcha from './IndividualCaptcha.js';
import CreateCaptcha from './CreateCaptcha.js';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Captcha extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			refreshPage: ''
		}
	}

	refreshPage(){
		this.setState({
			refreshPage : Math.floor(Math.random() * 99999)
		})
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
							</div>
							<div className="col-8"></div>
							<div className="right-control-panel col pt-1" style={{marginLeft: '30px'}}>
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
						<IndividualCaptcha refreshPage={this.refreshPage.bind(this)} refreshPageState={this.state.refreshPage}/>
						{/*IndividualCaptcha*/}

						{/*CreateCaptchaModal*/}
							<div className="modal fade" id="createCaptcha" tabIndex="-1" aria-labelledby="createCaptchaLabel" aria-hidden="true" style={{overflowY: 'hidden'}}>
								<CreateCaptcha refreshPage={this.refreshPage.bind(this)} refreshPageState={this.state.refreshPage}/>
								<div className= "modal-dialog modal-dialog-centered">
									<div className="modal-content">		
									</div>
								</div>
							</div>
						{/*CreateCaptchaModal*/}
					</div>

				
				</div>
				<ToastContainer newestOnTop />
			</div>
		);
	}
}

export default Captcha;