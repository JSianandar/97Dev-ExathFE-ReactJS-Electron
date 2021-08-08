import React from 'react';
import './css/Profile.css';
import {Link} from 'react-router-dom';
import IndividualProfile from './IndividualProfile.js';

import export_logo from "./assets/icons/export_logo.png";
import import_logo from "./assets/icons/import_logo.png";
import create_logo from "./assets/icons/create_task_logo.png";

import TitleBar from './TitleBar.js';
import CreateProfile from './CreateProfile.js';


class Profile extends React.Component{
	constructor(props){
		super(props)
		var refreshPage =  this.refreshPage.bind(this)
		this.state = {
			refreshPage: '',
			countriesData: this.props.countriesData
		}
	}

	refreshPage(){
		this.setState({
			refreshPage : Math.floor(Math.random() * 99999)
		})
	}

	componentDidMount(){}

	render(){
		return(
			<div className="profile">
				<TitleBar/>
				<div className="profile-container pt-0">
					<div className="page-wrapper mx-auto">
						<div className="profile-icons-wrapper row">
							<div className="left-control-panel col-2 pt-1">
								<ul className="icons-wrapper pt-4 mr-0">
									<li className="icon"><img src={export_logo}/></li>
									<li className="icon"><img src={import_logo}/></li>
								</ul>
							</div>
							<div className="col-8"></div>
							<div className="right-control-panel col pt-1" style={{marginLeft: '30px'}}>
								<ul className="icons-wrapper pt-4 mr-0">
									<li className="icon"><Link data-toggle="modal" data-target="#createProfile"><img src={create_logo}/></Link></li>
								</ul>
							</div>
						</div>

					

						<div className="table-heading mx-auto row">
							<div className="col">
								<h1 className="profile-name text-center">Profile Name</h1>
							</div>
							<div className="col-2">
								<h1 className="headings text-center">Email</h1>
							</div>
							<div className="col-2">
								<h1 className="headings text-center">Card Number</h1>
							</div>
							<div className="col-2">
								<h1 className="headings text-center">Shipping Name</h1>
							</div>
							<div className="col-2">
								<h1 className="headings text-center">Actions</h1>
							</div>
						</div>
						{/*individual Profile*/}
						<IndividualProfile
							refreshPage={this.refreshPage.bind(this)}
							refreshPageState={this.state.refreshPage}
							countriesData={this.state.countriesData}
						/>
						{/*individual Profile*/}
							

						{/*CreateProfileModal*/}
							<div className="modal fade" id="createProfile" tabIndex="-1" aria-labelledby="createProfileLabel" aria-hidden="true" style={{overflowY: 'hidden'}}>
								<CreateProfile
									countriesData={this.state.countriesData}
									refreshPage={this.refreshPage.bind(this)}
									refreshPageState={this.state.refreshPage}
								/>
								<div className= "modal-dialog modal-dialog-centered">
									<div className="modal-content">		
									</div>
								</div>
							</div>
						{/*CreateProfileModal*/}						

					</div>
				</div>
			</div>
		);
	}
}

export default Profile;