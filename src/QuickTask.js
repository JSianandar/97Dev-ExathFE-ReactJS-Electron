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
			<div>
				<div className="rectangle_background10">
					<h1 className="quick_task">Quick Task</h1>
					<form>
						<input
						type="text"
						placeholder = "Enter Link"
						className="enter_link"
						/>
					</form>

					<Link to ="/task" className="close_qt">Close</Link>
					<Link to ="/task" className="save_qt">Save</Link>
				</div>
			</div>
		);
	}

}

export default QuickTask;