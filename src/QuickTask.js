import './css/QuickTask.css';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifySuccess = (text, delay) => toast.success(text, {
    position: 'bottom-right',
    autoClose: delay,
    hideProgressBar: false
});

const notifyError = (text, delay) => toast.error(text, {
    position: 'bottom-right',
    autoClose: delay,
    hideProgressBar: false
});

class QuickTask extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			link: '',
			refreshPageState: ''
		}
	}

	handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
	}

	handleModalClose = () => {
		this.setState({link: ''})
	}

	handleStartQuickTask = async() => {
        axios.get(`http://exath.io/api/quicktask?qt=${this.state.link}`)
        .then(async response => {
			notifySuccess('Success - ' + response.data.Message, 3000)
            await new Promise(r => setTimeout(r, 1000))
			this.props.refreshPage()
        }, error => {
			notifyError('Error while starting quick task..', 3000)
        })
	}

	componentDidMount(){}

	componentDidUpdate(prevprop){
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
							<input type="text" className="button" placeholder="Enter Link" name="link" value={this.state.link}
								onChange={this.handleChange} required />
						</form>
					</div>
				</div>

				<div className="row pt-4">
					<div className="col-8"></div>
					<div className="col-2">
						<Link data-toggle="modal" data-target="#quickTask" className="button-text" style={{ textDecoration: 'none' }}
							onClick={this.handleModalClose}>Close</Link>
					</div> 
					<div className="col-2 ">
						<Link data-toggle="modal" data-target="#quickTask" className="button-text" style={{ textDecoration: 'none' }}
							onClick={this.handleStartQuickTask}>Save</Link>
					</div>
				</div>
            </div>
		);
	}

}

export default QuickTask;