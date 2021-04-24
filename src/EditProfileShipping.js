import React from 'react';
import './css/EditProfileShipping.css';
import {Link} from 'react-router-dom';

class EditProfileShipping extends React.Component{
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
				<div className="rectangle_background7">
					<h1 className="edit_profile_shipping">Edit Profile</h1>
					<Link className="shipping_logo"></Link>
					<Link to="/edit_profile_billing" className="billing_logo"></Link>
					<Link to="/edit_profile_card"className="card_logo"></Link>

					<h1 className="shipping_address">Shipping Address</h1>
					<form>
						<input
						type="text"
						required
						placeholder = "First Name"
						className= "first_name"
						/>

						<input
						type="text"
						required
						placeholder = "Last Name"
						className= "last_name"
						/>

						<input
						type="text"
						required
						placeholder = "First Name"
						className= "email_address"
						/>

						<input
						type="text"
						required
						placeholder = "Address 1"
						className= "address1"
						/>

						<input
						type="text"
						required
						placeholder = "Address 2"
						className= "address2"
						/>

						<input
						type="text"
						required
						placeholder = "City"
						className= "city"
						/>

						<input
						type="text"
						required
						placeholder = "Postal Code"
						className= "postal_code"
						/>

						<input
						type="text"
						required
						placeholder = "Phone Number"
						className= "phone_number"
						/>

						<input
						type="text"
						required
						placeholder = "Country"
						className= "country"
						/>

						<input
						type="text"
						required
						placeholder = "Province"
						className= "province"
						/>

						<input
						type="text"
						required
						placeholder = "Profile Name"
						className= "profile_name_cps"
						/>
						{/*Must Be Revised*/}
						<input 
						type="checkbox"
						name="Use For Billing"
						className="use_for_billing"
						/>
					</form>

					<Link to ="/profile" className="close_cps">Close</Link>
					<Link to="/edit_profile_billing" className="create_cps">Save</Link>
				</div>
			</div>
		);
	}

}

export default EditProfileShipping;