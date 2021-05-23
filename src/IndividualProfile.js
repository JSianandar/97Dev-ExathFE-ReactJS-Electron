import React from 'react';
import './css/IndividualProfile.css';
import axios from 'axios';

import {Link} from 'react-router-dom';
import table_edit from "./assets/icons/table_edit.png";
import table_delete from "./assets/icons/table_delete.png";

import EditProfileShipping from './EditProfileShipping.js';
import EditProfileBilling from './EditProfileBilling.js';
import EditProfileCard from './EditProfileCard.js';

class IndividualProfile extends React.Component{
	constructor(){
		super()
		this.state = {
			profiles: [],
		}
	}

	componentDidMount(){
		this.getProfiles()
	}

	getProfiles = () =>{
		axios.get('http://exath.io/api/profiles')
		.then(response => {
			this.setState({
				profiles : response.data
			})
		},
		error=>{
		
		})
	}

	render(){
		return(
			<div className="IndividualProfile">
			{
				this.state.profiles.reverse().map( (e, index) =>{
					if(index < 5)

					return(
						<React.Fragment>
							<div className="row pt-2"></div>
							<div className="individual-profile mx-auto row">
								<div className="col-4 pt-1">
									<p className="headings text-center">{e.name}</p>
								</div>
								<div className="col-2 pt-1">
									<h1 className="headings text-center">{e.email}</h1>
								</div>
								<div className="col-2 pt-1">
									<h1 className="headings text-center">{e.cardNumber}</h1>
								</div>
								<div className="col-2 pt-1">
									<h1 className="headings text-center">{e.shippingFirstName}</h1>
								</div>
								<div className="col-2 ml-0">
									<ul className="icons-wrapper">
										<li className="icon"><Link data-toggle="modal" data-target="#editProfileShipping"><img src={table_edit} /></Link></li>
										<li className="icon"><Link><img src={table_delete} /></Link></li>
									</ul>
								</div>
							</div>

						{/*EditProfileShippingModal*/}
							<div className="modal fade" id="editProfileShipping" tabIndex="-1" aria-labelledby="createProfileShippingLabel" aria-hidden="true">
								<EditProfileShipping/>
								<div className= "modal-dialog modal-dialog-centered">
									<div className="modal-content">		
									</div>
								</div>
							</div>
						{/*EditProfileShippingModal*/}

						{/*EditProfileBillingModal*/}
							<div className="modal fade" id="editProfileBilling" tabIndex="-1" aria-labelledby="editProfileBillingLabel" aria-hidden="true">
								<EditProfileBilling/>
								<div className= "modal-dialog modal-dialog-centered">
									<div className="modal-content">		
									</div>
								</div>
							</div>
						{/*EditProfileBillingModal*/}

						{/*EditProfileCardModal*/}
							<div className="modal fade" id="editProfileCard" tabIndex="-1" aria-labelledby="editProfileCardLabel" aria-hidden="true">
								<EditProfileCard/>
								<div className= "modal-dialog modal-dialog-centered">
									<div className="modal-content">		
									</div>
								</div>
							</div>
						{/*EditProfileCardModal*/}
							
						</React.Fragment>
					)
				})
			}
			</div>
			
		);
	}
}

export default IndividualProfile;