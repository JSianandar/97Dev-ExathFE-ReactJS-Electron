import React from 'react';
import './css/DeleteAllTask.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class DeleteAllTask extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			refreshPageState: ''
		}
	}

	handleDeleteAllTask = event => {
        event.preventDefault();
        axios.delete('http://exath.io/api/tasks/update/all')
        .then(res => {
            this.props.refreshPage()
        },
        error=>{
        
        })
  }

	componentDidMount(){

	}

	componentDidUpdate(prevprop){
		if(prevprop.refreshPageState != this.props.refreshPageState){
			this.setState({
				refreshPageState : this.props.refreshPageState
			})
		}
	}

	render(){
		return(
			<div className="delete-all-task-container">
				<div className="row pt-3">
					<div className="col-12">
						<h1 className="text-center">Delete All Task</h1>
					</div>
				</div>
				<div className="row pt-2">
					<div className="col-12">
						<h2 className="text-center">Are you sure you want to delete all task?</h2>
					</div>
				</div>

				<div className="row pt-4">
					<div className="col-4" style= {{marginLeft: '150px'}}>
						<Link data-toggle="modal" data-target="#deleteAllTask" className="button-text" style={{ textDecoration: 'none' }}>Close</Link>
					</div> 
					<div className="col-4 ml-0">
						<Link data-toggle="modal" data-target="#deleteAllTask" className="button-text" style={{ textDecoration: 'none' }} onClick={this.handleDeleteAllTask} >Confirm</Link>
					</div>
				</div>

			</div>
		);
	}
}

export default DeleteAllTask;