import React from 'react';
import './css/EditProxy.css';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

class EditProxy extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}

	componentDidMount(){

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
                                <input 
                                type="text"
                                required
                                placeholder = "Enter Your Proxy"
                                className="background-color"
                                />
                  
							</form>
						</div>
					</div>
				</div>

				<div className="row pt-1">
					<div className="col-4 ml-3">
						<Form>
							<Form.Group controlId="formProxy">
								<Form.Control type="text" placeholder="Group Name" className="group-name"/>
							</Form.Group>
						</Form>
					</div>
					<div className="col-4"></div>
					<div className="col-2 ml-3 pt-3">
						<Link data-toggle="modal" data-target="#editProxy" className="routing" style={{ textDecoration: 'none' }}>Close</Link>
					</div>
					<div className="col-1 pt-3">
						<Link data-toggle="modal" data-target="#editProxy" className="routing" style={{ textDecoration: 'none' }}>Save</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default EditProxy;