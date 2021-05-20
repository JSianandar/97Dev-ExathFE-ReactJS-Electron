import React from 'react';
import './css/IndividualTask.css';
import axios from 'axios';

import {Link} from 'react-router-dom';
import table_edit from "./assets/icons/table_edit.png";
import table_delete from "./assets/icons/table_delete.png";
import table_play from "./assets/icons/table_play.png";
import table_stop from "./assets/icons/table_stop.png";

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
									<div className="col-1">
										<div className="row ml-5 ">
											<p className="headings text-center">{e.site}</p>
										</div>
									</div>

									<div className="col-1 ml-5 ">
										<p className="headings-other text-center">{e.size}</p>
									</div>

									<div className="col-2 ml-2">
										<p className="headings-other text-center">{e.positiveKey}<span>{e.negativeKey}</span></p>
									</div>
									<div className="col-1">
										<p className="headings-other text-center">{e.id}</p>
									</div>
									<div className="col-1 ">
										<p className="headings-other text-center">{e.proxyGroup}</p>
									</div> 
									<div className="col-2 ml-5 ">
										<p className="headings-other text-center"><span style={{color: '#FA0606'}}>Waiting for Restocks</span></p>
									</div>
									<div className="col-2 ml-4">
										<ul className="icons-wrapper pt-2">
											<li className="icon"><Link><img src={table_play} /></Link></li>
											<li className="icon"><Link><img src={table_stop} /></Link></li>
											<li className="icon"><Link to ="/edit_task"><img src={table_edit} /></Link></li>
											<li className="icon"><Link><img src={table_delete} /></Link></li>
										</ul>
									</div>

								</div>
							</div>
							<div className="row pt-2"></div>
						</React.Fragment>
					)
				})
			}
			</div>
			
		);
	}
}

export default IndividualTask;