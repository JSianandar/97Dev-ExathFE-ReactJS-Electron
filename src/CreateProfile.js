import React from 'react';
import './css/CreateProfileShipping.css';
import './css/CreateProfileBilling.css';
import './css/CreateProfileCard.css';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import credit_card_logo from './assets/icons/credit_card_logo.png';
import axios from 'axios';

class CreateProfile extends React.Component{
	constructor(){
		super()
		this.state = {
			mode: 'shipping',
			name: '',
			shippingFirstName: '',
			shippingLastName: '',
			shippingAddress1: '',
			shippingAddress2: '',
			shippingCity: '',
			shippingProvince: '',
			shippingCountry: '',
			shippingZip: '',
			shippingPhone: '',
			billingFirstName: '',
			billingLastName: '',
			email: '',
			billingAddress1: '',
			billingAddress2: '',
			billingCity: '',
			billingProvince: '',
			billingCountry: '',
			billingZip: '',
			billingPhone: '',
			cardHolder: '',
			cardNumber: '',
			cvv: '',
			monthExp: '',
			yearExp: '',
			sameAsShipping: false
			

			
		}
		this.toBilling = this.toBilling.bind(this)
		this.toCard = this.toCard.bind(this)
		this.toShipping = this.toShipping.bind(this)
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = event =>{
		event.preventDefault();


		axios.post('http://exath.io/api/profiles/create', {
			"name": this.state.name,
			"shippingFirstName": this.state.shippingFirstName,
			"shippingLastName": this.state.shippingLastName,
			"shippingAddress1": this.state.shippingAddress1,
			"shippingAddress2": this.state.shippingAddress2,
			"shippingCity": this.state.shippingCity,
			"shippingProvince": this.state.shippingProvince,
			"shippingCountry": this.state.shippingCountry,
			"shippingZip": this.state.shippingZip,
			"shippingPhone": this.state.shippingPhone,
			"bllingFirstName": this.state.billingFirstName,
			"billingLastName": this.state.billingLastName,
			"email": this.state.email,
			"billingAddress1": this.state.billingAddress1,
			"billingAddress2": this.state.billingAddress2,
			"billingCity": this.state.billingCity,
			"billingProvince": this.state.billingProvince,
			"billingCountry": this.state.billingCountry,
			"billingZip": this.state.billingZip,
			"billingPhone": this.state.billingPhone,
			"cardHolder": this.state.cardHolder,
			"cardNumber": this.state.cardNumber,
			"cvv": this.state.cvv,
			"monthExp": this.state.monthExp,
			"yearExp": this.state.yearExp,
			"sameAsShipping": this.state.sameAsShipping
		})
		.then(res => {
			console.log(res);
			console.log(res.data);
		})
	}

	componentDidMount(){

	}

	toBilling(){
		this.setState({mode: 'billing' })
	}

	toCard(){
		this.setState({mode: 'card' })
	}

	toShipping(){
		this.setState({mode: 'shipping' })
	}

	render(){
		return(
			<div>
				{this.state.mode == 'shipping' && 
					<div className="create-profile-shipping-container ">
						<div className="row pt-2">
							<div className="col-3 ml-4">
								<h1>Create Profile</h1>
							</div>
							<div className="col-2"></div>
							<Link className=" button col-2 " style={{ textDecoration: 'none' }}>	
								<h2 className="text-center pt-1" >Shipping</h2>
							</Link>

							<Link onClick = {this.toBilling} className=" button2 col-2 ml-2 " style={{ textDecoration: 'none' }}>
								<h2 className="my-auto text-center pt-1 ">Billing</h2>
							</Link>

							<Link onClick = {this.toCard} className="button2 col-2 ml-2  " style={{ textDecoration: 'none' }}>
								<h2 className="my-auto text-center pt-1 ">Card</h2>
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
										name= "shippingFirstName"
										onChange={this.handleChange}
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
										name="shippingCity"
										onChange={this.handleChange}
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
										name="shippingLastName"
										onChange={this.handleChange}
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
										name="shippingZip"
										onChange={this.handleChange}
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
										name="email"
										onChange={this.handleChange}
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
										name="shippingPhone"
										onChange={this.handleChange}
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
										name="shippingAddress1"
										onChange={this.handleChange}
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
										name="shippingCountry"
										onChange={this.handleChange}
										placeholder="Country"
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
										name="shippingAddress2"
										onChange={this.handleChange}
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
										name="shippingProvince"
										onChange={this.handleChange}
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
										name="name"
										onChange={this.handleChange}
										className="text-area-right"
										required
									/>
								</form>
							</div>
							<div className="col-1"></div>
							<div className="col-3 pt-1">
								<input type="checkbox" class="form-check-input" id="exampleCheck1" name="sameAsShipping" />
								<label class="form-check-label" for="exampleCheck1" style={{color: '#C4C4C4'}}>Use for Billing</label>
							</div>
							<div className="col-2"></div>
							<div className="col-1 ml-4">
								<Link data-dismiss="modal" onClick={this.toShipping} className="button-text" style={{ textDecoration: 'none' }}>Close</Link>
							</div>
							<div className="col-2 ml-4">
								<Link onClick= {this.toBilling} className="button-text" style={{ textDecoration: 'none' }}>Create</Link>
							</div>
					


						</div>

				</div>}
				{this.state.mode == 'billing' && 
				<div className="create-profile-billing-container ">
				<div className="row pt-2">
					<div className="col-3 ml-4">
						<h1>Create Profile</h1>
					</div>
					<div className="col-2"></div>
					<Link onClick = {this.toShipping} className=" button2 col-2  "style={{ textDecoration: 'none' }}>	
						<h2 className="text-center pt-1">Shipping</h2>
					</Link>

					<Link className=" button col-2 ml-2 "style={{ textDecoration: 'none' }}>
						<h2 className="my-auto text-center pt-1">Billing</h2>
					</Link>

					<Link onClick= {this.toCard} className="button2 col-2 ml-2  "style={{ textDecoration: 'none' }}>
						<h2 className="my-auto text-center pt-1">Card</h2>
					</Link>
				</div>

				<div className="row pt-3">
					<h1 className="billing-address mx-auto">Billing Address</h1>
				</div>

				<div className="row pt-3">
					<div className="col-1"></div>
					<div className="col-6">
						<form>
							<input
								type="text"
								name="billingFirstName"
								onChange={this.handleChange}
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
								name="billingCity"
								onChange={this.handleChange}
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
								name="billingLastName"
								onChange={this.handleChange}
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
								name="billingZip"
								onChange={this.handleChange}
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
								name="billingPhone"
								onChange={this.handleChange}
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
								name="billingAddress1"
								onChange={this.handleChange}
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
								name="billingCountry"
								onChange={this.handleChange}
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
								placeholder="Address 2"
								name="billingAddress2"
								onChange={this.handleChange}
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
								name="billingProvince"
								onChange={this.handleChange}
								className="text-area-right"
								required
							/>
						</form>
					</div>


				</div>

				<div className="row pt-5">
					<div className="col-8"></div>
					<div className="col-1 ml-5">
						<Link data-dismiss="modal" onClick={this.toShipping} className="button-text" style={{ textDecoration: 'none' }}>Close</Link>
					</div>
					<div className="col-2 ml-4">
						<Link onClick= {this.toCard} className="button-text" style={{ textDecoration: 'none' }}>Create</Link>
					</div>
					


				</div>

			</div>}
				{this.state.mode == 'card' && 
				<div className="create-profile-card-container">
				<div className="row pt-2">
					<div className="col-3 ml-4">
						<h1>Create Profile</h1>
					</div>
					<div className="col-2"></div>
					<Link onClick= {this.toShipping} className=" button2 col-2 "style={{ textDecoration: 'none' }}>	
						<h2 className="text-center pt-1">Shipping</h2>
					</Link>

					<Link onClick= {this.toBilling} className=" button2 col-2 ml-2 "style={{ textDecoration: 'none' }}>
						<h2 className="my-auto text-center pt-1">Billing</h2>
					</Link>

					<Link className="button col-2 ml-2  "style={{ textDecoration: 'none' }}>
						<h2 className="my-auto text-center pt-1">Card</h2>
					</Link>
				</div>

				<div className="row pt-5 ml-4">
					<div className="col-6 ml-5">
						<img src={credit_card_logo} / >
					</div>
					
					<div className="col-4 pt-4 ml-2">
						<div className="row">
							<form>
								<input
									type="text"
									name="cardHolder"
									onChange={this.handleChange}
									placeholder="Card Holder"
									className="text-area-right"
									required
								/>
							</form>
						</div>
						<div className="row pt-3">
							<form>
								<input
									type="text"
									name="cardNumber"
									onChange={this.handleChange}
									placeholder="Card Number"
									className="text-area-right"
									required
								/>
							</form>
						</div>
						<div className="row pt-3">
							<form>
								<input
									type="text"
									placeholder="MM/YY"
									name="yearExp"
									onChange={this.handleChange}
									className="text-area-right"
									required
								/>
							</form>
						</div>
						<div className="row pt-3">
							<form>
								<input
									type="text"
									placeholder="CVV"
									name="cvv"
									onChange={this.handleChange}
									className="text-area-right"
									required
								/>
							</form>
						</div>
					</div>



				</div>
				
				<div className="row pt-4">
					<div className="col-8"></div>
					<div className="col-1 ml-5">
						<Link data-dismiss="modal" onClick={this.toShipping} className="button-text" style={{ textDecoration: 'none' }}>Close</Link>
					</div>
					<div className="col-2 ml-4">
						<Link data-dismiss="modal" onClick={this.toShipping} className="button-text" style={{ textDecoration: 'none' }} onClick= {this.handleSubmit}>Create</Link>
					</div>
					


				</div>

				
			</div>}
			</div>
		);

	}

}
	
export default CreateProfile;