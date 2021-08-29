import React from 'react';
import './css/CreateProfileShipping.css';
import './css/CreateProfileBilling.css';
import './css/CreateProfileCard.css';
import {Link} from 'react-router-dom';
import credit_card_logo from './assets/icons/credit_card_logo.png';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const notifySuccess = (text, delay) => toast.success(text, {
    position: 'bottom-right',
    autoClose: delay,
    hideProgressBar: false
});

const notifyError = (text, delay) => toast.error(text, {
    position: 'bottom-right',
    autoClose: delay,
    hideProgressBar: false
});


class CreateProfile extends React.Component{
	constructor(props){
		super(props)
		this.state = this.getInitialState()
		this.toBilling = this.toBilling.bind(this)
		this.toCard = this.toCard.bind(this)
		this.toShipping = this.toShipping.bind(this)
		this.sameAsShippingTrue = this.sameAsShippingTrue.bind(this)
	}

	getInitialState = () => {
		return {
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
			refreshPageState: '',
			selectShippingCountry: 'Country',
			selectShippingProvince: 'Province',
			selectBillingCountry: 'Country',
			selectBillingProvince: 'Province',
			countriesData: this.props.countriesData,
			shippingProvincesOptions: null,
			billingProvincesOptions: null
		}
	}

	resetModal = () => {
		this.setState(this.getInitialState())
		try {
			document.getElementById('shippingProvinceDropdownToggle').disabled = false
			document.getElementById('billingProvinceDropdownToggle').disabled = false
		} catch (err) {
			// ignores error
		}
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleClickShippingCountry = (event) => {
		this.setState({
			selectShippingCountry: event,
			shippingCountry: event,
			shippingProvincesOptions: this.state.countriesData[event]["provinces"]
		});
		document.getElementById('shippingProvinceDropdownToggle').disabled =
			this.state.countriesData[event]["provinces"] ? false : true
	}

	handleClickShippingProvince = (event) => {
		this.setState({ selectShippingProvince: event, shippingProvince: event })
	}

	handleClickBillingCountry = (event) => {
		this.setState({
			selectBillingCountry: event,
			billingCountry: event,
			billingProvincesOptions: this.state.countriesData[event]["provinces"]
		});
		document.getElementById('billingProvinceDropdownToggle').disabled =
			this.state.countriesData[event]["provinces"] ? false : true
	}

	handleClickBillingProvince = (event) => {
		this.setState({ selectBillingProvince: event, billingProvince: event })
	}

	handleSubmit = async (event) =>{
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
			"monthExp": this.state.yearExp.split('/')[0],
			"yearExp": this.state.yearExp.split('/')[1],
			"sameAsShipping": this.state.sameAsShipping
		})
		.then(async () => {
			notifySuccess('Successfully created profile', 3000)
            await new Promise(r => setTimeout(r, 1000))
			this.props.refreshPage()
			
		}).catch(async () => {
			notifyError('Error creating profile ', 3000)
		})
	}

	componentDidMount(){}

	componentDidUpdate(prevprop){
		if(prevprop.refreshPageState != this.props.refreshPageState){
			this.setState({
				sameAsShipping: false,
				refreshPageState : this.props.refreshPageState,
				mode: 'shipping',
				countriesData: this.props.countriesData
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
										id = "input-shipping-FirstName"
										className="text-area-left"
										onChange={this.handleChange}
										placeholder="First Name"
										value={this.state.shippingFirstName}
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
										id = "input-shipping-City"
										className="text-area-right"
										onChange={this.handleChange}
										placeholder="City"
										value={this.state.shippingCity}
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
										id= "input-shipping-LastName"
										className="text-area-left"
										onChange={this.handleChange}
										placeholder="Last Name"
										value={this.state.shippingLastName}
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
										id= "input-shipping-Zip"
										className="text-area-right"
										onChange={this.handleChange}
										placeholder="Postal Code"
										value={this.state.shippingZip}
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
										id= "input-email"
										className="text-area-left"
										onChange={this.handleChange}
										placeholder="Email Address"
										value={this.state.email}
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
										id="input-shipping-Phone"
										onChange={this.handleChange}
										placeholder="Phone Number"
										className="text-area-right"
										value={this.state.shippingPhone}
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
										id = "input-shipping-Address1"
										onChange={this.handleChange}
										placeholder="Address 1"
										className="text-area-left"
										value={this.state.shippingAddress1}
										required
									/>
								</form>
							</div>
							<div className="col-1"></div>
							<div className="col-4">
								<Dropdown name="shippingCountry" onSelect={this.handleClickShippingCountry}>
									<Dropdown.Toggle variant="outline-none" className="text-area-right-dropdown  d-flex">
										<h3 className="" style={{marginTop: '-3px'}}>{this.state.selectShippingCountry}</h3>
									</Dropdown.Toggle>
									<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}}>
										{this.state.countriesData ? Object.keys(this.state.countriesData).map((countryName) => {
											return (<Dropdown.Item active={countryName == this.state.shippingCountry}
											eventKey={countryName}>{countryName}</Dropdown.Item>)
										}) : null}
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</div>

						<div className="row pt-3">
							<div className="col-1"></div>
							<div className="col-6">
								<form>
									<input
										type="text"
										name="shippingAddress2"
										id= "input-shipping-Address2"
										onChange={this.handleChange}
										placeholder="Address 2"
										className="text-area-left"
										value={this.state.shippingAddress2}
										required
									/>
								</form>
							</div>
							<div className="col-1"></div>
							<div className="col-4">
								<Dropdown name="shippingProvince" onChange={this.handleChange} onSelect={this.handleClickShippingProvince}>
									<Dropdown.Toggle id="shippingProvinceDropdownToggle" variant="outline-none" className="text-area-right-dropdown d-flex">
										<h3 className="" style={{marginTop: '-3px'}}>{this.state.selectShippingProvince}</h3>
									</Dropdown.Toggle>
									<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}}>
										{this.state.shippingProvincesOptions ? this.state.shippingProvincesOptions.map((provinceName) => {
											return (<Dropdown.Item active={provinceName == this.state.shippingProvince}
											eventKey={provinceName}>{provinceName}</Dropdown.Item>)
										}) : null}
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</div>

						<div className="row pt-5">
							<div className="col-2 ml-3">
								<form>
									<input
										type="text"
										placeholder="Profile Name"
										id= "input-profile-name"
										name="name"
										onChange={this.handleChange}
										className="text-area-right"
										value={this.state.name}
										required
									/>
								</form>
							</div>
							<div className="col-1"></div>
							<div className="col-3 pt-1">
								<input type="checkbox" className="form-check-input" id="exampleCheck1" name="sameAsShipping" onClick={this.sameAsShippingTrue} checked={this.state.sameAsShipping ? true : false}/>
								<label className="form-check-label" for="exampleCheck1" style={{color: '#C4C4C4'}}>Use for Billing</label>
							</div>
							<div className="col-2"></div>
							<div className="col-1 ml-4">
								<Link data-dismiss="modal" onClick={this.resetModal} className="button-text" style={{ textDecoration: 'none' }}>Close</Link>
							</div>
							<div className="col-2 ml-4">
								<Link onClick={this.state.sameAsShipping ? this.toCard: this.toBilling} className="button-text" style={{ textDecoration: 'none' }}>Next</Link>
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
									id= "input-billing-FirstName"
									onChange={this.handleChange}
									placeholder="First Name"
									className="text-area-left"
									value={this.state.billingFirstName}
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
									id= "input-billing-City"
									onChange={this.handleChange}
									placeholder="City"
									className="text-area-right"
									value={this.state.billingCity}
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
									id = "input-billing-LastName"
									onChange={this.handleChange}
									placeholder="Last Name"
									className="text-area-left"
									value={this.state.billingLastName}
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
									id= "input-billing-Zip"
									onChange={this.handleChange}
									placeholder="Postal Code"
									className="text-area-right"
									value={this.state.billingZip}
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
									value={this.state.email}
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
									id= "input-billing-Phone"
									onChange={this.handleChange}
									placeholder="Phone Number"
									className="text-area-right"
									value={this.state.billingPhone}
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
									id= "input-billing-Address1"
									name="billingAddress1"
									onChange={this.handleChange}
									className="text-area-left"
									value={this.state.billingAddress1}
									required
								/>
							</form>
						</div>
						<div className="col-1"></div>
						<div className="col-4">
							<Dropdown name= "billingCountry" onChange={this.handleChange} onSelect= {this.handleClickBillingCountry}>
								<Dropdown.Toggle variant="outline-none" className="text-area-right-dropdown  d-flex" >
									<h3 className="" style={{marginTop: '-3px'}}>{this.state.selectBillingCountry}</h3>
								</Dropdown.Toggle>
								<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}}>
									{this.state.countriesData ? Object.keys(this.state.countriesData).map((countryName) => {
										return (<Dropdown.Item active={countryName == this.state.billingCountry}
											eventKey={countryName}>{countryName}</Dropdown.Item>)
									}) : null}
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</div>

					<div className="row pt-3">
						<div className="col-1"></div>
						<div className="col-6">
							<form>
								<input
									type="text"
									placeholder="Address 2"
									id= "input-billing-Address2"
									name="billingAddress2"
									onChange={this.handleChange}
									className="text-area-left"
									value={this.state.billingAddress2}
									required
								/>
							</form>
						</div>
						<div className="col-1"></div>
						<div className="col-4">
							<Dropdown name="billingProvince" onChange={this.handleChange} onSelect= {this.handleClickBillingProvince}>
								<Dropdown.Toggle id="billingProvinceDropdownToggle" variant="outline-none" className="text-area-right-dropdown  d-flex">
									<h3 className="" style={{marginTop: '-3px'}}>{this.state.selectBillingProvince}</h3>
								</Dropdown.Toggle>
								<Dropdown.Menu style={{overflowY : 'scroll', maxHeight: '300px'}}>
									{this.state.billingProvincesOptions ? this.state.billingProvincesOptions.map((provinceName) => {
									return (<Dropdown.Item active={provinceName == this.state.billingProvince}
											eventKey={provinceName}>{provinceName}</Dropdown.Item>)
									}) : null}
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</div>

					<div className="row pt-5">
						<div className="col-8"></div>
						<div className="col-1 ml-5">
							<Link onClick={this.toShipping} className="button-text" style={{textDecoration: 'none'}}>Back</Link>
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
										id="input-card-Holder"
										onChange={this.handleChange}
										placeholder="Card Holder"
										className="text-area-right"
										value={this.state.cardHolder}
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
										id="input-card-Number"
										className="text-area-right"
										value={this.state.cardNumber}
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
										id="input-year-Exp"
										onChange={this.handleChange}
										className="text-area-right"
										value={this.state.yearExp}
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
										value={this.state.cvv}
										required
									/>
								</form>
							</div>
						</div>
					</div>
					
					<div className="row pt-4">
						<div className="col-8"></div>
						<div className="col-1 ml-5">
							<Link onClick={this.state.sameAsShipping ? this.toShipping : this.toBilling} className="button-text" style={{ textDecoration: 'none' }}>Back</Link>
						</div>
						<div className="col-2 ml-4">
							<Link data-dismiss="modal" onClick={this.toShipping} className="button-text" style={{ textDecoration: 'none' }} onClick= {this.handleSubmit}>Create</Link>
						</div>
					</div>
				</div>}
			</div>
		)

	}
}

export default CreateProfile;