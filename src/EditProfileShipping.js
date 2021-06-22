import React from 'react';
import './css/EditProfileShipping.css';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

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
			<div className="edit-profile-shipping-container ">
				<div className="row pt-2">
					<div className="col-3 ml-4">
						<h1>Edit Profile</h1>
					</div>
					<div className="col-2"></div>
					<Link className=" button col-2 " style={{ textDecoration: 'none' }}>	
						<h2 className="text-center pt-1">Shipping</h2>
					</Link>

					<Link data-toggle="modal" data-target="#editProfileBilling" className=" button2 col-2 ml-2 " style={{ textDecoration: 'none' }}>
						<h2 className="my-auto text-center pt-1">Billing</h2>
					</Link>

					<Link data-toggle="modal" data-target="#editProfileCard" className="button2 col-2 ml-2  " style={{ textDecoration: 'none' }}>
						<h2 className="my-auto text-center pt-1">Card</h2>
					</Link>
				</div>

				<div className="row pt-3">
					<h1 className="shipping-address mx-auto">Shipping Address</h1>
				</div>

				<div className="row pt-3">
					<div className="col-1"></div>
					<div className="col-6">
						<form>
							<input
								type="text"
								placeholder="First Name"
								className="text-area-left"
								required
							/>
						</form>
						
					</div>
					<div className="col-1"></div>
					<div className="col-4">
						<form>
							<input
								type="text"
								placeholder="City"
								className="text-area-right"
								required
							/>
						</form>
					</div>


				</div>

				<div className="row pt-3">
					<div className="col-1"></div>
					<div className="col-6">
						<form>
							<input
								type="text"
								placeholder="Last Name"
								className="text-area-left"
								required
							/>
						</form>
						
					</div>
					<div className="col-1"></div>
					<div className="col-4">
						<form>
							<input
								type="text"
								placeholder="Postal Code"
								className="text-area-right"
								required
							/>
						</form>
					</div>


				</div>

				<div className="row pt-3">
					<div className="col-1"></div>
					<div className="col-6">
						<form>
							<input
								type="text"
								placeholder="Email Address"
								className="text-area-left"
								required
							/>
						</form>
						
					</div>
					<div className="col-1"></div>
					<div className="col-4">
						<form>
							<input
								type="text"
								placeholder="Phone Number"
								className="text-area-right"
								required
							/>
						</form>
					</div>


				</div>

				<div className="row pt-3">
					<div className="col-1"></div>
					<div className="col-6">
						<form>
							<input
								type="text"
								placeholder="Address 1"
								className="text-area-left"
								required
							/>
						</form>
						
					</div>
					<div className="col-1"></div>
					<div className="col-4">
						<form>
							<input
								type="text"
								placeholder="Country"
								required
								className="text-area-right"
							/>
						</form>
					</div>


				</div>

				<div className="row pt-3">
					<div className="col-1"></div>
					<div className="col-6">
						<form>
							<input
								type="text"
								placeholder="Address 2"
								className="text-area-left"
								required
							/>
						</form>
						
					</div>
					<div className="col-1"></div>
					<div className="col-4">
						<form>
							<input
								type="text"
								placeholder="Province"
								className="text-area-right"
								required
							/>
						</form>
					</div>


				</div>

				<div className="row pt-5">
					<div className="col-2 ml-3">
						<form>
							<input
								type="text"
								placeholder="Profile Name"
								className="text-area-right"
								required
							/>
						</form>
					</div>
					<div className="col-1"></div>
					<div className="col-3 pt-1">
						<Form>
							<Form.Group controlId="formBillingAddress">
								<Form.Check type="checkbox" label="Use for Billing" />
							</Form.Group>
						</Form>
					</div>
					<div className="col-2"></div>
					<div className="col-1 ml-4">
						<Link data-dismiss="modal" className="button-text" style={{ textDecoration: 'none' }}>Close</Link>
					</div>
					<div className="col-2 ml-4">
						<Link data-toggle="modal" data-target="#editProfileBilling" className="button-text" style={{ textDecoration: 'none' }}>Save</Link>
					</div>
					


				</div>

			</div>
		);
	}

}

export default EditProfileShipping;