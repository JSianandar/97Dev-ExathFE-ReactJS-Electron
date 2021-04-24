import React from 'react';
import './css/Profile.css';
import {Link} from 'react-router-dom';


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
			<div>
				<div className="rectangle_background">
					<div className="export"></div>
					<div className="import"></div>
					<Link to ="/create_profile_shipping" className="create"></Link>
				</div>
				
				<div className="profile_heading">
					<h1 className="profile_name">Profile Name</h1>
					<h1 className="profile_email">Email</h1>
					<h1 className="profile_card_number">Card Number</h1>
					<h1 className="profile_shipping_name">Shipping Name</h1>
					<h1 className="actions">Actions</h1>
				</div>

				<div className="profile_table">
					<h1 className="name">Main</h1>
					<h1 className="email">randomrandom@gmail.com</h1>
					<h1 className="card_number">4120</h1>
					<h1 className="shipping_name">First Name</h1>
					<div className="table_edit"></div>
					<div className="table_delete"></div>
				</div>
			</div>
		);
	}
}

export default Profile;