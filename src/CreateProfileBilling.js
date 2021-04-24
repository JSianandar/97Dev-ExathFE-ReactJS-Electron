import React from 'react';
import './css/CreateProfileBilling.css';
import {Link} from 'react-router-dom';

class CreateProfileBilling extends React.Component{
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
				<div className="rectangle_background4">
					<h1 className="create_profile_billing">Create Profile</h1>
					<Link to="/create_profile_shipping" className="shipping_logo"></Link>
					<Link className="billing_logo"></Link>
					<Link to="/create_profile_card" className="card_logo"></Link>

					<h1 className="billing_address">Billing Address</h1>
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

					</form>

					<Link to ="/profile"className="close_cpb">Close</Link>
					<Link to="/create_profile_card" className="create_cpb">Create</Link>
				</div>
			</div>
		);
	}

}

export default CreateProfileBilling;