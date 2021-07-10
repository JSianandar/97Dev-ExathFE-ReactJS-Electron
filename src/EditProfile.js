import React from 'react';
import './css/EditProfileShipping.css';
import './css/EditProfileBilling.css';
import './css/EditProfileCard.css';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import credit_card_logo from './assets/icons/credit_card_logo.png';
import axios from 'axios';

class EditProfile extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			mode: 'shipping',
			sameAsShipping: false,
			name: this.props.name,
			shippingFirstName: this.props.shippingFirstName,
			shippingLastName: this.props.shippingLastName,
			shippingAddress1: this.props.shippingAddress1,
			shippingAddress2: this.props.shippingAddress2,
			shippingCity: this.props.shippingCity,
			shippingCountry: this.props.shippingCountry,
			shippingProvince: this.props.shippingProvince,
			shippingZip: this.props.shippingZip,
			shippingPhone: this.props.shippingPhone,
			email: this.props.email,
			billingFirstName: this.props.billingFirstName,
			billingLastName: this.props.billingLastName,
			billingAddress1: this.props.billingAddress1,
			billingAddress2: this.props.billingAddress2,
			billingCity: this.props.billingCity,
			billingCountry: this.props.billingCountry,
			billingProvince: this.props.billingProvince,
			billingZip: this.props.billingZip,
			billingPhone: this.props.billingPhone,
			cardHolder: this.props.cardHolder,
			cardNumber: this.props.cardNumber,
			cvv: this.props.cvv,
			yearExp: this.props.yearExp,
			id: this.props.id,
			refreshPageState: '',
			
		}
		this.toBilling = this.toBilling.bind(this)
		this.toCard = this.toCard.bind(this)
		this.toShipping = this.toShipping.bind(this)
		this.sameAsShippingTrue = this.sameAsShippingTrue.bind(this)
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = event =>{
		event.preventDefault();


		axios.put(`http://exath.io/api/profiles/update/${this.state.id}`, {
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
			"monthExp": this.state.yearExp.split('/')[0],
			"yearExp": this.state.yearExp.split('/')[1],
			"sameAsShipping": this.state.sameAsShipping
		})
		.then(res => {
			console.log(res);
			console.log(res.data);
			this.props.refreshPageState()
		})
	}

	componentDidMount(){

	}

	componentDidUpdate(prevprop){
		console.log('prevprop', prevprop)
		if(prevprop.refreshPageState != this.props.refreshPageState){
			this.setState({
				sameAsShipping: false,
				refreshPageState : this.props.refreshPageState,
				mode: 'shipping'
			})
		}
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

	sameAsShippingTrue(e){
		this.setState({sameAsShipping : e.target.checked})
		console.log('test', e.target.checked)
	}

	render(){
		return(
			<div>
				{this.state.mode == 'shipping' && 
					<div className="edit-profile-shipping-container ">
						<div className="row pt-2">
							<div className="col-3 ml-4">
								<h1>Edit Profile</h1>
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
										placeholder="First Name"
										onChange = {this.handleChange}
										value = {this.state.shippingFirstName}
										name = "shippingFirstName"
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
										onChange = {this.handleChange}
										value = {this.state.shippingCity}
										name= "shippingCity"
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
										name = "shippingLastName"
										onChange = {this.handleChange}
										value = {this.state.shippingLastName}
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
										onChange = {this.handleChange}
										value = {this.state.shippingZip}
										name = "shippingZip"
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
										onChange = {this.handleChange}
										value = {this.state.email}
										name = "email"
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
										onChange = {this.handleChange}
										value = {this.state.shippingPhone}
										name = "shippingPhone"
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
										onChange = {this.handleChange}
										name = "shippingAddress1"
										value = {this.state.shippingAddress1}
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
										onChange = {this.handleChange}
										name = "shippingCountry"
										value = {this.state.shippingCountry}
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
										onChange = {this.handleChange}
										name = "shippingAddress2"
										value = {this.state.shippingAddress2}
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
										onChange = {this.handleChange}
										name = "shippingProvince"
										value = {this.state.shippingProvince}
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
										name = "name"
										placeholder="Profile Name"
										onChange = {this.handleChange}
										value = {this.state.name}
										className="text-area-right"
										required
									/>
								</form>
							</div>
							<div className="col-1"></div>
							<div className="col-3 pt-1">
								<input type="checkbox" className="form-check-input" id="exampleCheck1" name="sameAsShipping" onClick={this.sameAsShippingTrue}/>
								<label className="form-check-label" for="exampleCheck1" style={{color: '#C4C4C4'}}>Use for Billing</label>
							</div>
							<div className="col-2"></div>
							<div className="col-1 ml-4">
								<Link data-dismiss="modal" className="button-text" onClick={this.toShipping} style={{ textDecoration: 'none' }}>Close</Link>
							</div>
							<div className="col-2 ml-4">
								<Link onClick= {this.state.sameAsShipping?this.toCard: this.toBilling} className="button-text" style={{ textDecoration: 'none' }}>Save</Link>
							</div>
					


						</div>

				</div>}
				{this.state.mode == 'billing' && 
				<div className="edit-profile-billing-container ">
				<div className="row pt-2">
					<div className="col-3 ml-4">
						<h1>Edit Profile</h1>
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
								placeholder="First Name"
								onChange = {this.handleChange}
								name = "billingFirstName"
								value = {this.state.billingFirstName}
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
								onChange = {this.handleChange}
								name = "billingCity"
								value = {this.state.billingCity}
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
								onChange = {this.handleChange}
								name = "billingLastName"
								value = {this.state.billingLastName}
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
								name = "billingZip"
								onChange = {this.handleChange}
								value = {this.state.billingZip}
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
								name = "email"
								onChange = {this.handleChange}
								value = {this.state.email}
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
								name = "billingPhone"
								onChange = {this.handleChange}
								value = {this.state.billingPhone}
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
								name = "billingAddress1"
								onChange = {this.handleChange}
								value = {this.state.billingAddress1}
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
								onChange = {this.handleChange}
								name = "billingCountry"
								value = {this.state.billingCountry}
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
								onChange = {this.handleChange}
								name = "billingAddress2"
								value = {this.state.billingAddress2}
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
								name = "billingProvince"
								onChange = {this.handleChange}
								value = {this.state.billingProvince}
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
						<Link onClick= {this.toCard} className="button-text" style={{ textDecoration: 'none' }}>Save</Link>
					</div>
					


				</div>

			</div>}
				{this.state.mode == 'card' && 
				<div className="edit-profile-card-container">
				<div className="row pt-2">
					<div className="col-3 ml-4">
						<h1>Edit Profile</h1>
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
									placeholder="Card Holder"
									name = "cardHolder"
									onChange = {this.handleChange}
									value = {this.state.cardHolder}
									className="text-area-right"
									required
								/>
							</form>
						</div>
						<div className="row pt-3">
							<form>
								<input
									type="text"
									placeholder="Card Number"
									name = "cardNumber"
									onChange = {this.handleChange}
									value = {this.state.cardNumber}
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
									name = "yearExp"
									onChange = {this.handleChange}t
									value = {this.state.yearExp}
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
									name = "cvv"
									onChange = {this.handleChange}
									value = {this.state.cvv}
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
						<Link data-dismiss="modal" onClick={this.toShipping} className="button-text" style={{ textDecoration: 'none' }} onClick={this.handleSubmit} >Save</Link>
					</div>
					


				</div>

				
			</div>}
			</div>
		);

	}

}
	
export default EditProfile;