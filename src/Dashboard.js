import React from 'react';
import './css/Dashboard.css';

import TitleBar from './TitleBar.js';
import IndividualDashboard from './IndividualDashboard.js';

class Dashboard extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}

	componentDidMount(){

	}

	render(){
		return(
			<div className="dashboard">
				<TitleBar/>
				<div className="dashboard-container pt-0">
					<div className="dashboard-wrapper mx-auto">
						<div className="row pt-2"></div>
						<div className="row heading-wrapper pt-1 ml-4">
							<div className="col-2 pt-2">
								<h1>Image</h1>
							</div>
						
							<div className="col-3 pt-2 ml-4">
								<h1>Product</h1>
							</div>
							<div className="col-2 pt-2">
								<h1>Size</h1>
							</div>
							<div className="col-2 pt-2">
								<h1>Profile Name</h1>
							</div>
						
							<div className="col-2 ml-4 pt-2">
								<h1>Date</h1>
							</div>
						</div>
						
						<IndividualDashboard/>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;