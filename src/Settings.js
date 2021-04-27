import React from 'react';
import './css/Settings.css';
import {Link} from 'react-router-dom';

class Settings extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}

	componentDidMount(){

	}

	render(){
		return(
			<div className="settings-container">
				<div className="page-wrapper mx-auto">
					<div className="title-wrapper row">
						<div className="col-2 pt-3">
							<h1 className="settings text-center">Settings</h1>
						</div>
					</div>

					<div className="setup-wrapper row">
						<div className="col-2 pt-2 pr-5">
							<h1 className="setup text-center">Setup</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Settings;