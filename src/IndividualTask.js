import React from 'react';
import './css/IndividualTask.css';
import axios from 'axios';
import Task from './Task.js';

import {Link} from 'react-router-dom';
import table_edit from "./assets/icons/table_edit.png";
import table_delete from "./assets/icons/table_delete.png";
import table_play from "./assets/icons/table_play.png";
import table_stop from "./assets/icons/table_stop.png";
import EditTask from "./EditTask.js";

class IndividualTask extends React.Component{
	constructor(){
		super()
		this.state = {
			tasks: [],
		}
	}

	componentDidMount(){
		this.getTasks()
	}

	getTasks = () =>{
		axios.get('http://exath.io/api/tasks')
		.then(response => {
			this.setState({
				tasks : response.data
			})
		},
		error=>{
		
		})
	}

	render(){
		return(
			<div className="IndividualTask">
			{
				this.state.tasks.map( (e, index) =>{
					if(index < 11)

					return(
						<React.Fragment>
							<div className="individual-task-wrapper mx-auto">
								<div className="individual-task row">
									<div className="col-2 pt-2">
										<p className="headings text-center">{e.site}</p>
										<h3 className="headings-status text-center">{e.mode}</h3>
									</div>

									<div className="col-1">
										<p className="headings-other text-center">{e.size}</p>
									</div>

									<div className="col-2">
										<p className="headings-other text-center">{e.positiveKey}<span style={{ color: '#C4C4C4' }}>{e.negativeKey}</span><span style={{ color: '#C4C4C4' }}>{e.sku}</span><span style={{ color: '#C4C4C4' }}>{e.directLink}</span></p>
									</div>
									<div className="col-2">
										<p className="headings-other text-center">{e.id}</p>
									</div>
									<div className="col-1 ">
										<p className="headings-other text-center">{e.proxyGroup}</p>
									</div> 
									<div className="col-2 ">
										<p className="headings-other text-center"><span style={{color: '#FA0606'}}>Waiting for Restocks</span></p>
									</div>
									<div className="col-2">
										<ul className="icons-wrapper ml-1 pt-2">
											<li className="icon"><Link><img src={table_play} /></Link></li>
											<li className="icon"><Link><img src={table_stop} /></Link></li>
											<li className="icon"><Link data-toggle="modal" data-target="#editTask"><img src={table_edit} /></Link></li>
											<li className="icon"><Link><img src={table_delete} /></Link></li>
										</ul>
									</div>

								</div>
							</div>
							<div className="row pt-2"></div>
							{/*EditAllTaskModal*/}
							<div className="modal fade" id="editTask" tabIndex="-1" aria-labelledby="editTaskLabel" aria-hidden="true">
								<EditTask/>
								<div className= "modal-dialog modal-dialog-centered">
									<div className="modal-content">		
									</div>
								</div>
							</div>
						{/*EditAllTaskModal*/}
							
						</React.Fragment>
					)
				})
			}
			</div>
			
		);
	}
}

export default IndividualTask;