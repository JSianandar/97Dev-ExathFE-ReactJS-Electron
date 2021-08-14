import React from 'react';
import './css/DiscordWebhook.css';
import { Link } from 'react-router-dom';

import axios from 'axios';

class DiscordWebhook extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			refreshPageState: ''

		}
	}

	componentDidMount(){

	}

	componentDidUpdate(prevprop){
		if (prevprop.refreshPageState != this.props.refreshPageState) {
			this.setState({
				refreshPageState : this.props.refreshPageState
			})
		}
	}

	render(){
		return(
			<div className="discord-webhook-container">
				<div className="row pt-2">
					<div className="col-6 ml-3">
						<h1 style={{fontWeight: "bold"}}>Input Discord Webhook</h1>
					</div>
				</div>
				<div className="row pt-3">
					<div className="text-area mx-auto">
						<div className="row pt-1 ml-4">
							<form>
								<textarea 
								required
								placeholder = "Enter your Discord Webhook"
								className="background-color"
								name="discordWebhook"
								//onChange = {this.handleChange}
								rows={4}
								style={{resize: 'none'}}
								id = "input-discordWebhook"
								>
								</textarea>
                  
							</form>
						</div>
					</div>
				</div>
				<div className="row pt-4">
					<div className="col-8"></div>
					<div className="col-1 ml-5">
						<Link data-dismiss="modal" className="button-text"  style={{ textDecoration: 'none' }} >Close</Link>
					</div>
				</div>
				
			</div>
		);
	}
}

export default DiscordWebhook;