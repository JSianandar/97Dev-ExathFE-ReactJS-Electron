import React from 'react';
import './css/EditProxy.css';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import IndividualProxy from './IndividualProxy.js';
import axios from 'axios';

class EditProxy extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			group: this.props.group,
			proxyList: this.props.proxyList,
			id: this.props.id,
			proxyListArray: '',
			refreshPageState: ''
		}
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}



	handleSubmit = event =>{
		event.preventDefault();

		axios.put(`http://exath.io/api/proxies/update/${this.state.id}`, {
			"proxyList": this.state.proxyListArray.split(','),
		})
		.then(res=>{
			console.log(res);
			console.log(res.data);
			this.props.refreshPageState()
		})
	}

	componentDidMount(){
		console.log(this.state)
	}

	componentDidUpdate(prevprop){
		console.log('prevprop', prevprop)

		if(prevprop.refreshPageState != this.props.refreshPageState){
			document.getElementById('input-group').value = this.state.group
			document.getElementById('input-proxyList').value = this.state.proxyList
			this.setState({
				refreshPageState : this.props.refreshPageState
			})
		}
	}

	render(){
		return(
			<div className="edit-proxy-container">
				<div className="row">
					<div className="col-6 ml-3">
						<h1 style={{fontWeight: "bold"}}>Edit Proxy Group</h1>
					</div>
				</div>

				<div className="row pt-3">
					<div className="text-area mx-auto">
						<div className="row ml-4 pt-3">
							<p>Paste Your Proxy Here</p>
						</div>
						<div className="row ml-4">
							<p>Format = ipadress:port:user:password</p>
						</div>
						<div className="row ml-4">
							<form>
									<textarea 
									required
									name = "proxyList"
									placeholder = "Enter Your Proxy"
									onChange = {this.handleChange}
									className="background-color"
									rows={8}
									value = {this.state.proxyList}
									style={{resize: 'none'}}
									>
									</textarea>
                  
							</form>
						</div>
					</div>
				</div>

				<div className="row pt-1">
					<div className="col-4 ml-3">
						<Form>
							<Form.Group>
								<Form.Control type="text" placeholder="Group Name" className="group-name" disabled value = {this.state.group} required/>
							</Form.Group>
						</Form>
					</div>
					<div className="col-4"></div>
					<div className="col-2 ml-3 pt-3">
						<Link data-dismiss="modal" className="routing" style={{ textDecoration: 'none' }}>Close</Link>
					</div>
					<div className="col-1 pt-3">
						<Link data-dismiss="modal" className="routing" style={{ textDecoration: 'none' }} onClick = {this.handleSubmit} >Save</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default EditProxy;