import React from 'react';
import './css/Profile.css';
import {Link} from 'react-router-dom';
import IndividualProfile from './IndividualProfile.js';

import export_logo from "./assets/icons/export_logo.png";
import import_logo from "./assets/icons/import_logo.png";
import create_logo from "./assets/icons/create_task_logo.png";

import table_edit from "./assets/icons/table_edit.png";
import table_delete from "./assets/icons/table_delete.png";
import TitleBar from './TitleBar.js';

import CreateProfileShipping from './CreateProfileShipping.js';
import CreateProfileBilling from './CreateProfileBilling.js';
import CreateProfileCard from './CreateProfileCard.js';


class Profile extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}

	componentDidMount(){

	}

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
							<div className="right-control-panel col-2 pt-1">
								<ul className="icons-wrapper pt-4 mr-0">
									<li className="icon"><Link data-toggle="modal" data-target="#createProfileShipping"><img src={create_logo}/></Link></li>
								</ul>
							</div>
						</div>

					

						<div className="table-heading mx-auto row">
							<div className="col-4">
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
						<IndividualProfile />
						{/*individual Profile*/}

						{/*CreateProfileShippingModal*/}
							<div className="modal fade" id="createProfileShipping" tabIndex="-1" aria-labelledby="createProfileShippingLabel" aria-hidden="true">
								<CreateProfileShipping/>
								<div className= "modal-dialog modal-dialog-centered">
									<div className="modal-content">		
									</div>
								</div>
							</div>
						{/*CreateProfileShippingModal*/}

						{/*CreateProfileBillingModal*/}
							<div className="modal fade" id="createProfileBilling" tabIndex="-1" aria-labelledby="createProfileBillingLabel" aria-hidden="true">
								<CreateProfileBilling/>
								<div className= "modal-dialog modal-dialog-centered">
									<div className="modal-content">		
									</div>
								</div>
							</div>
						{/*CreateProfileBillingModal*/}

						{/*CreateProfileCardModal*/}
							<div className="modal fade" id="createProfileCard" tabIndex="-1" aria-labelledby="createProfileCardLabel" aria-hidden="true">
								<CreateProfileCard/>
								<div className= "modal-dialog modal-dialog-centered">
									<div className="modal-content">		
									</div>
								</div>
							</div>
						{/*CreateProfileCardModal*/}

						

					</div>
				</div>
			</div>
		);
	}
}

export default Profile;