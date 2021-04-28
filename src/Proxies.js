import React from 'react';
import './css/Proxies.css';
import {Link} from 'react-router-dom';

import export_logo from "./assets/icons/export_logo.png";
import import_logo from "./assets/icons/import_logo.png";
import create_logo from "./assets/icons/create_task_logo.png";

import table_edit from "./assets/icons/table_edit.png";
import table_delete from "./assets/icons/table_delete.png";

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
			<div className="proxies-container pt-1">
				<div className="page-wrapper mx-auto">
					<div className="profile-icons-wrapper row">
						<div className="left-control-panel col-2 pt-1">
							<ul className="icons-wrapper pt-4 mr-0">
								<li className="icon"><img src={export_logo}/></li>
								<li className="icon"><img src={import_logo}/></li>
							</ul>
						</div>
						<div className="col-8"></div>
						<div className="right-control-panel col-2 pt-1">
							<ul className="icons-wrapper pt-4 mr-0">
								<li></li>
								<li className="icon"><Link to ="create_proxy"><img src={create_logo}/></Link></li>
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

					<div className="individual-proxy mx-auto row">
						<div className="col-2">
							<h1 className="headings text-center">Proxy 1</h1>
						</div>

						<div className="col-2">
							<h1 className="headings text-center">999</h1>
						</div>

						<div className="col-6"></div>

						<div className="col-2">
							<ul className="icons-wrapper">
                                <li className="icon"><img src={table_edit} /></li>
                                <li className="icon"><img src={table_delete} /></li>
                            </ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Proxies;