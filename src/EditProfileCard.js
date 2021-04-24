import React from 'react';
import './css/EditProfileCard.css';
import {Link} from 'react-router-dom';

class EditProfileCard extends React.Component{
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
				<div className="rectangle_background9">
					<h1 className="edit_profile_card">Edit Profile</h1>
					<Link to="/edit_profile_shipping" className="shipping_logo"></Link>
					<Link to="/edit_profile_billing" className="billing_logo"></Link>
					<Link className="card_logo"></Link>

					<div className="credit_card_mockup"></div>

					<form>
						<input
						type="text"
						required
						placeholder = "Card Holder"
						className= "card_holder"
						/>
						
						<input
						type="text"
						required
						placeholder = "Card Number"
						className= "card_number_user"
						/>

						<input
						type="text"
						required
						placeholder = "MM/YY"
						className= "exp_date"
						/>

						<input
						type="text"
						required
						placeholder = "CVV"
						className= "cvv"
						/>
					</form>

					<Link to ="/profile" className="close_cpc">Close</Link>
					<Link to="/profile" className="create_cpc">Save</Link>
				</div>
			</div>
		);
	}

}

export default EditProfileCard;