import React from 'react';
import './css/IndividualProxy.css';
import axios from 'axios';

import {Link} from 'react-router-dom';
import table_edit from "./assets/icons/table_edit.png";
import table_delete from "./assets/icons/table_delete.png";
import EditProxy from './EditProxy.js';

class IndividualProxy extends React.Component{
	constructor(){
		super()
		this.state = {
			proxies: [],
			refreshPage: ''
		}
	}

	componentDidMount(){
		this.getProxies()
	}

	componentDidUpdate(prevprop){
		if(prevprop.refreshPage != this.props.refreshPage){
			this.getProxies();
			this.setState({
				refreshPage : this.props.refreshPage
			})
		}
	}

	getProxies = () =>{
		axios.get('http://exath.io/api/proxies')
		.then(response => {
			this.setState({
				proxies : response.data
			})
		},
		error=>{
		
		})
	}

	render(){
		return(
			<div className="IndividualProxy">
			{
				this.state.proxies.reverse().map( (e, index) =>{
					if(index < 5)

					return(
						<React.Fragment>
							<div className="row pt-2"></div>
							<div className="individual-proxy mx-auto row">
								<div className="col-2 pt-1">
									<h1 className="headings text-center">{e.group}</h1>
								</div>

								<div className="col-2 pt-1">
									<h1 className="headings text-center">999</h1>
								</div>

								<div className="col-6"></div>

								<div className="col-2 ml-0">
									<ul className="icons-wrapper" style={{marginLeft:'10px'}}>
										<li className="icon"><Link data-toggle="modal" data-target="#editProxy"><img src={table_edit} /></Link></li>
										<li className="icon"><Link><img src={table_delete} /></Link></li>
									</ul>
								</div>
							</div>
							{/*EditProxyModal*/}
								<div className="modal fade" id="editProxy" tabIndex="-1" aria-labelledby="editProxyLabel" aria-hidden="true" style={{overflowY: 'hidden'}}>
									<EditProxy/>
									<div className= "modal-dialog modal-dialog-centered">
										<div className="modal-content">		
										</div>
									</div>
								</div>
							{/*EditProxyModal*/}	
							
						</React.Fragment>
					)
				})
			}
			</div>
			
		);
	}
}

export default IndividualProxy;