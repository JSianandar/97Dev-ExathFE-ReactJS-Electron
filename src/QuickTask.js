import {useState} from "react";
import './css/QuickTask.css';
import React from 'react';
import { Link } from 'react-router-dom';

class QuickTask extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}

	componentDidMount(){

	}

	render(){
		return(
			<div className="quick-task-container">
				<div className="row pt-1">
					<div className="col-12">
						<h1 className="text-center">Quick Task</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-12 ml-3">
						<form>
							<input
								type="text"
								placeholder="Enter Link"
								className="button"
								required
							/>
						</form>
					</div>
				</div>

				<div className="row pt-4">
					<div className="col-8"></div>
					<div className="col-2">
						<Link data-toggle="modal" data-target="#quickTask" className="button-text" style={{ textDecoration: 'none' }}>Close</Link>
					</div> 
					<div className="col-2 ">
						<Link data-toggle="modal" data-target="#quickTask" className="button-text" style={{ textDecoration: 'none' }}>Save</Link>
					</div>
				</div>
            </div>
		);
	}

}

export default QuickTask;