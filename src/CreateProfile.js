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
			sameAsShipping: false,
			refreshPageState: ''
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
			this.props.refreshPage()
		})
	}

	componentDidMount(){

	}

	componentDidUpdate(prevprop){
		if(prevprop.refreshPageState != this.props.refreshPageState){
			document.getElementById('input-name').value = ''
			document.getElementById('input-shippingFirstName').value = ''
			document.getElementById('input-shippingLastName').value = ''
			document.getElementById('input-shippingAddress1').value = ''
			document.getElementById('input-shippingAddress2').value = ''
			document.getElementById('input-shippingCity').value = ''
			document.getElementById('input-shippingProvince').value = ''
			document.getElementById('input-shippingCountry').value = ''
			document.getElementById('input-shippingZip').value = ''
			document.getElementById('input-shippingPhone').value = ''
			document.getElementById('input-billingFirstName').value = ''
			document.getElementById('input-billingLastName').value = ''
			document.getElementById('input-email').value = ''
			document.getElementById('input-billingAddress1').value = ''
			document.getElementById('input-billingAddress2').value = ''
			document.getElementById('input-billingCity').value = ''
			document.getElementById('input-billingProvince').value = ''
			document.getElementById('input-billingCountry').value = ''
			document.getElementById('input-billingZip').value = ''
			document.getElementById('input-billingPhone').value = ''
			document.getElementById('input-cardHolder').value = ''
			document.getElementById('input-cardNumber').value = ''
			document.getElementById('input-cvv').value = ''
			document.getElementById('input-yearExp').value = ''

			this.setState({
				sameAsShipping: false,
				refreshPageState : this.props.refreshPageState
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
					<div className="create-profile-shipping-container ">
						<div className="row pt-2">
							<div className="col-3 ml-4">
								<h1>Create Profile</h1>
							</div>
							<div className="col-2"></div>
							<Link className=" button col-2 " style={{ textDecoration: 'none' }}>	
								<h2 className="text-center pt-1" >Shipping</h2>
							</Link>

							<Link  className=" button2 col-2 ml-2 " style={{ textDecoration: 'none' }}>
								<h2 className="my-auto text-center pt-1 ">Billing</h2>
							</Link>

							<Link  className="button2 col-2 ml-2  " style={{ textDecoration: 'none' }}>
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
										id = "input-shippingFirstName"
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
										id = "input-shippingCity"
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
										id= "input-shippingLastName"
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
										id= "input-shippingZip"
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
										id= "input-email"
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
										id= "input-shippingPhone"
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
										id = "input-shippingAddress1"
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
										id= "input-shippingCountry"
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
										id= "input-shippingAddress2"
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
										id= "input-shippingProvince"
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
										id= "input-name"
										name="name"
										onChange={this.handleChange}
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
								<Link data-dismiss="modal" onClick={this.toShipping} className="button-text" style={{ textDecoration: 'none' }}>Close</Link>
							</div>
							<div className="col-2 ml-4">
								<Link onClick= {this.state.sameAsShipping?this.toCard: this.toBilling} className="button-text" style={{ textDecoration: 'none' }}>Next</Link>
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
					<Link  className=" button2 col-2  "style={{ textDecoration: 'none' }}>	
						<h2 className="text-center pt-1">Shipping</h2>
					</Link>

					<Link className=" button col-2 ml-2 "style={{ textDecoration: 'none' }}>
						<h2 className="my-auto text-center pt-1">Billing</h2>
					</Link>

					<Link  className="button2 col-2 ml-2  "style={{ textDecoration: 'none' }}>
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
								id= "input-billingFirstName"
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
								id= "input-billingCity"
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
								id = "input-billingLastName"
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
								id= "input-billingZip"
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
								id= "input-email"
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
								id= "input-billingPhone"
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
								id= "input-billingAddress1"
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
								id= "input-billingCountry"
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
								id= "input-billingAddress2"
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
								id= "input-billingProvince"
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
						<Link onClick= {this.toCard} className="button-text" style={{ textDecoration: 'none' }}>Next</Link>
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
					<Link  className=" button2 col-2 "style={{ textDecoration: 'none' }}>	
						<h2 className="text-center pt-1">Shipping</h2>
					</Link>

					<Link className=" button2 col-2 ml-2 "style={{ textDecoration: 'none' }}>
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
									id="input-cardHolder"
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
									id="input-cardNumber"
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
									id="input-yearExp"
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
									id="input-cvv"
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