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
	constructor(props){
		super(props)
		this.state = {
			profiles: null,
			refreshPageState: '',
			id: '',
			countriesData: this.props.countriesData
		}
	}

	componentDidMount(){
		this.getProfiles()
	}

	async componentDidUpdate(prevprop){
		if(prevprop.refreshPageState != this.props.refreshPageState){
			await this.getProfiles()
			this.setState({
				refreshPageState : this.props.refreshPage,
				countriesData: this.props.countriesData
			})
		}
	}

	getProfiles = async () =>{
		await axios.get('http://exath.io/api/profiles')
		.then(response => {
			this.setState({
				profiles : response.data
			})
		},
		error=>{
		
		})
	}

	handleDelete = event => {
		event.preventDefault();
		axios.delete(`http://exath.io/api/profiles/update/${event.target.name}`)
		.then(res => {
			this.props.refreshPage()
		})
	}

	render(){
		return(
			<div className="IndividualProfile">
			{
				this.state.profiles && this.state.profiles.reverse().map( (e, index) =>{
					return(
						<React.Fragment>
							<div className="row pt-2"></div>
							<div className="individual-profile mx-auto row">
								<div className="col-4 pt-1">
									<p className="headings text-center">{e.name}</p>
								</div>
								<div className="col-2 pt-1">
									<h1 className="headings text-center" style={{marginLeft:'-5px'}}>{e.email}</h1>
								</div>
								<div className="col-2 pt-1">
									<h1 className="headings text-center" style={{marginLeft:'10px'}}>{e.cardNumber}</h1>
								</div>
								<div className="col-2 pt-1">
									<h1 className="headings text-center">{e.shippingFirstName}</h1>
								</div>
								<div className="col-2 ml-0">
									<ul className="icons-wrapper" style={{marginLeft:'10px'}}>
										<li className="icon"><Link data-toggle="modal" data-target={`#edit-${e.id}`}><img className="icon-edit" src={table_edit} /></Link></li>
										<li className="icon"><Link onClick= {this.handleDelete}><img className="icon-delete" src={table_delete} name = {e.id} /></Link></li>
									</ul>
								</div>
							</div>

							{/*EditProfileModal*/}
							<EditProfile
								countriesData = {this.state.countriesData}
								sameAsShipping = {e.sameAsShipping}
								name = {e.name}
								shippingFirstName = {e.shippingFirstName}
								shippingLastName = {e.shippingLastName}
								shippingAddress1 = {e.shippingAddress1}
								shippingAddress2 = {e.shippingAddress2}
								shippingCity = {e.shippingCity}
								shippingCountry = {e.shippingCountry}
								shippingProvince = {e.shippingProvince}
								shippingZip = {e.shippingZip}
								shippingPhone = {e.shippingPhone}
								email = {e.email}
								billingFirstName = {e.billingFirstName}
								billingLastName = {e.billingLastName}
								billingAddress1 = {e.billingAddress1}
								billingAddress2 = {e.billingAddress2}
								billingCity = {e.billingCity}
								billingCountry = {e.billingCountry}
								billingProvince = {e.billingProvince}
								billingZip = {e.billingZip}
								billingPhone = {e.billingPhone}
								cardHolder = {e.cardHolder}
								cardNumber = {e.cardNumber}
								cvv = {e.cvv}
								yearExp = {(e.monthExp) + '/' + (e.yearExp)}
								id = {e.id}
								refreshPageState={this.state.refreshPageState}
								refreshPage={this.props.refreshPage.bind(this)}
							/>
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