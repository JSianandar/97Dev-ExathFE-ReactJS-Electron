import {useState} from "react";
import './css/QuickTask.css';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class QuickTask extends React.Component{
	constructor(){
		super()
		this.state = {
			refreshPageState: ''
		}
	}

	handleStartQuickTask = async() => {
        await axios.get('http://exath.io/api/quicktask?qt=https://www.hotsauce.com')
        .then(response => {
            console.log(response)
			console.log(response.data)
			this.props.refreshPage()
        },
        error=>{
        
        })
	}

	componentDidMount(){
		
	}

	componentDidUpdate(prevprop){
		console.log('prevprop', prevprop)
		if(prevprop.refreshPageState != this.props.refreshPageState){
			this.setState({
				refreshPageState : this.props.refreshPageState
			})
		}

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
						<Link data-toggle="modal" data-target="#quickTask" className="button-text" style={{ textDecoration: 'none' }} onClick= {this.handleStartQuickTask} >Save</Link>
					</div>
				</div>
            </div>
		);
	}

}

export default QuickTask;