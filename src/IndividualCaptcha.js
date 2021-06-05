import React from 'react';
import './css/IndividualCaptcha.css';
import axios from 'axios';

import {Link} from 'react-router-dom';
import table_edit from "./assets/icons/table_edit.png";
import table_delete from "./assets/icons/table_delete.png";
import harvester_logo from './assets/icons/harvester_logo.svg';
import EditCaptcha from './EditCaptcha.js';
import CaptchaHarvester from './CaptchaHarvester.js';
//const { ipcRenderer } = require("electron");



class IndividualCaptcha extends React.Component{
	constructor(){
		super()
		this.state = {
			captcha: [],
		}
	}

	componentDidMount(){
		this.getCaptcha()
	}

	getCaptcha = () =>{
		axios.get('http://exath.io/api/captcha')
		.then(response => {
			this.setState({
				captcha : response.data
			})
		},
		error=>{
		
		})
	}

	render(){
		return(
			<div className="IndividualCaptcha">
			{
				this.state.captcha.reverse().map( (e, index) =>{

					return(
						<React.Fragment>
							<div className="row pt-2"></div>
							<div className="individual-captcha mx-auto row">
								<div className="col-2 mr-3 pt-1">
									<h1 className="headings text-center" style={{marginLeft:'-10px'}}>{e.name}</h1>
								</div>

								<div className="col-2 ml-5 pt-1">
									<h1 className="headings text-center" style={{marginLeft:'-30px'}}>{e.email}</h1>
								</div>

								<div className="col-2 ml-4 pt-1">
									<h1 className="headings text-center" style={{marginLeft:'-20px'}}>{e.proxy}</h1>
								</div>

						
								<div className="col-2 mr-5"></div>

								<div className="col-2 ml-2">
									<ul className="icons-wrapper "style={{marginLeft:'5px'}}>
										<li className="icon"><Link data-toggle="modal" data-target="#captchaHarvester"><img src= {harvester_logo}/></Link></li>
										<li className="icon"><Link data-toggle="modal" data-target="#editCaptcha"><img src={table_edit} /></Link></li>
										<li className="icon"><Link><img src={table_delete} /></Link></li>
									</ul>
								</div>
							</div>
							{/*EditCaptchaModal*/}
								<div className="modal fade" id="editCaptcha" tabIndex="-1" aria-labelledby="editCaptchaLabel" aria-hidden="true" style={{overflowY: 'hidden'}}>
									<EditCaptcha/>
									<div className= "modal-dialog">
										<div className="modal-content">
											
										</div>
									</div>
								</div>
							{/*EditCaptchaModal*/}
							{/*CaptchaHarvesterModal*/}
								<div className="modal fade" id="captchaHarvester" tabIndex="-1" aria-labelledby="captchaHarvesterLabel" aria-hidden="true" style={{overflowY: 'hidden'}}>
									<CaptchaHarvester/>
									<div className= "modal-dialog">	
										<div className="modal-content">
										</div>
									</div>
								</div>
							{/*CaptchaHarvesterModal*/}
						</React.Fragment>
					)
				})
			}
			</div>
			
		);
	}
}

export default IndividualCaptcha;