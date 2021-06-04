import React from 'react';
import './css/Proxies.css';
import {Link} from 'react-router-dom';
import IndividualProxy from './IndividualProxy.js';

import export_logo from "./assets/icons/export_logo.png";
import import_logo from "./assets/icons/import_logo.png";
import create_logo from "./assets/icons/create_task_logo.png";

import table_edit from "./assets/icons/table_edit.png";
import table_delete from "./assets/icons/table_delete.png";

import TitleBar from './TitleBar.js';
import CreateProxy from './CreateProxy.js';

class Proxies extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}

	componentDidMount(){

	}

	render(){
		return(
			<div className="proxies">
				<TitleBar/>
				<div className="proxies-container pt-0">
					<div className="page-wrapper mx-auto">
						<div className="profile-icons-wrapper row">
							<div className="left-control-panel col-2 pt-1">
								<ul className="icons-wrapper pt-4 mr-0">
									<li className="icon"><Link><img src={export_logo}/></Link></li>
									<li className="icon"><Link><img src={import_logo}/></Link></li>
								</ul>
							</div>
							<div className="col-8"></div>
							<div className="right-control-panel col pt-1" style={{marginLeft: '30px'}}>
								<ul className="icons-wrapper pt-4 mr-0">
									<li></li>
									<li className="icon"><Link data-toggle="modal" data-target="#createProxy"><img src={create_logo}/></Link></li>
								</ul>
							</div>
						</div>


						<div className="table-heading mx-auto row">

							<div className="col-2">
								<h1 className="headings text-center">Proxy Group</h1>
							</div>

							<div className="col-2">
								<h1 className="headings text-center">Proxy Counts</h1>
							</div>

							<div className="col-6"></div>
						
						
							<div className="col-2">
								<h1 className="headings text-center">Actions</h1>
							</div>
						
						</div>
						{/*Individual Proxy*/}
						<IndividualProxy/>
						{/*Individual Proxy*/}

						
						{/*CreateProxyModal*/}
							<div className="modal fade" id="createProxy" tabIndex="-1" aria-labelledby="createProxyLabel" aria-hidden="true">
								<CreateProxy/>
								<div className= "modal-dialog modal-dialog-centered">
									<div className="modal-content">		
									</div>
								</div>
							</div>
						{/*CreateProxyModal*/}
					</div>
				</div>
			</div>
		);
	}
}

export default Proxies;