import React from 'react';
import './css/IndividualProxy.css';
import axios from 'axios';

import {Link} from 'react-router-dom';
import table_edit from "./assets/icons/table_edit.png";
import table_delete from "./assets/icons/table_delete.png";
import EditProxy from './EditProxy.js';

class IndividualProxy extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			proxies: [],
			refreshPage: '',
			id: '',
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

	handleDelete = event => {
		event.preventDefault();
		axios.delete(`http://exath.io/api/proxies/update/${event.target.name}`)
		  .then(res => {
			console.log(res);
			console.log(res.data);
			this.props.refreshPage()
		})
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
										<li className="icon"><Link data-toggle="modal" data-target={`#edit-${e.id}`}><img src={table_edit} /></Link></li>
										<li className="icon"><Link onClick={this.handleDelete} ><img src={table_delete} name = {e.id} /></Link></li>
									</ul>
								</div>
							</div>
							{/*EditProxyModal*/}
								<div className="modal fade" id={`edit-${e.id}`} tabIndex="-1" aria-labelledby={`edit-${e.id}`} aria-hidden="true" style={{overflowY: 'hidden'}}>
									<EditProxy group = {e.group} proxyList = {e.proxyList} id= {e.id}  refreshPageState={this.props.refreshPage}/>
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