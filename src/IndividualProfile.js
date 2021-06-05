import React from 'react';
import './css/IndividualProfile.css';
import axios from 'axios';

import {Link} from 'react-router-dom';
import table_edit from "./assets/icons/table_edit.png";
import table_delete from "./assets/icons/table_delete.png";

import EditProfileShipping from './EditProfileShipping.js';
import EditProfileBilling from './EditProfileBilling.js';
import EditProfileCard from './EditProfileCard.js';

import EditProfile from './EditProfile.js';

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
									<h1 className="headings text-center" style={{marginLeft:'-1px'}}>{e.email}</h1>
								</div>
								<div className="col-2 pt-1">
									<h1 className="headings text-center" style={{marginLeft:'10px'}}>{e.cardNumber}</h1>
								</div>
								<div className="col-2 pt-1">
									<h1 className="headings text-center">{e.shippingFirstName}</h1>
								</div>
								<div className="col-2 ml-0">
									<ul className="icons-wrapper" style={{marginLeft:'10px'}}>
										<li className="icon"><Link data-toggle="modal" data-target="#editProfile"><img src={table_edit} /></Link></li>
										<li className="icon"><Link><img src={table_delete} /></Link></li>
									</ul>
								</div>
							</div>

						{/*EditProfileModal*/}
							<div className="modal fade" id="editProfile" tabIndex="-1" aria-labelledby="editProfileLabel" aria-hidden="true" style={{overflowY: 'hidden'}}>
								<EditProfile/>
								<div className= "modal-dialog modal-dialog-centered">
									<div className="modal-content">		
									</div>
								</div>
							</div>
						{/*EditProfileModal*/}
							
						</React.Fragment>
					)
				})
			}
			</div>
			
		);
	}
}

export default IndividualProfile;