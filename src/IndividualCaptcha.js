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
	constructor(props){
		super(props)
		this.state = {
			captcha: [],
			refreshPageState: '',
			id: '',
		}
	}

	componentDidMount(){
		this.getCaptcha()
	}

	handleSubmit = event => {
		event.preventDefault();
		axios.delete(`http://exath.io/api/captcha/update/${event.target.name}`)
		.then(res => {
			this.props.refreshPage()
		})
	}

	async componentDidUpdate(prevprop){
		if(prevprop.refreshPageState != this.props.refreshPageState){
			await this.getCaptcha()
			this.setState({
				refreshPageState : this.props.refreshPageState
			})
		}
	}

	getCaptcha = async () =>{
		await axios.get('http://exath.io/api/captcha')
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
									<h1 className="headings text-center" style={{marginLeft:'-10px'}}>{e.proxy}</h1>
								</div>

						
								<div className="col-2 mr-5"></div>

								<div className="col-2 ml-2">
									<ul className="icons-wrapper "style={{marginLeft:'5px'}}>
										<li className="icon"><Link data-toggle="modal" data-target="#captchaHarvester"><img src= {harvester_logo}/></Link></li>
										<li className="icon"><Link data-toggle="modal" data-target={`#edit-${e.id}`} ><img src={table_edit} /></Link></li>
										<li className="icon"><Link  onClick={this.handleSubmit}><img className= "icon-delete" src={table_delete} name = {e.id} /></Link></li>
									</ul>
								</div>
							</div>
							<EditCaptcha 
								name= {e.name}
								email = {e.email}
								proxy = {e.proxy}
								id = {e.id}
								refreshPageState={this.state.refreshPageState}
								refreshPage={this.props.refreshPage.bind(this)}
							/>
							{/*CaptchaHarvesterModal*/}
								<div className="modal fade" id="captchaHarvester" tabIndex="-1" aria-labelledby="captchaHarvesterLabel" aria-hidden="true" style={{overflowY: 'hidden'}}>
									<CaptchaHarvester/>
									<div className= "modal-dialog">	
										<div className="modal-content">
										</div>
									</div>
								</div>
							{/*CaptchaHarvesterModal*/}


{/*							<script>
								function passCaptchaId(e.id){
									document.getElementById("captcha_id").value = e.id
								}
							</script>
*/}
						</React.Fragment>
					)
				})
			}
			</div>
			
		);
	}
}

export default IndividualCaptcha;