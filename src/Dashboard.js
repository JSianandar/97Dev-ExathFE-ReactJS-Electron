import React from 'react';
import './css/Dashboard.css';
import {Link} from 'react-router-dom';

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
			<div className="dashboard-container pt-1">
				<div className="dashboard-wrapper mx-auto">
					<div className="row pt-2"></div>
					<div className="row heading-wrapper mx-auto pt-1">
						<div className="col-2 pt-2">
							<h1>Image</h1>
						</div>
						<div className="col-1"></div>
						<div className="col-2 pt-2">
							<h1>Product</h1>
						</div>
						<div className="col-2 pt-2">
							<h1>Size</h1>
						</div>
						<div className="col-2 pt-2">
							<h1>Profile Name</h1>
						</div>
						<div className="col-1"></div>
						<div className="col-2 pt-2">
							<h1>Date</h1>
						</div>
					</div>
				</div>
				<div className="row pt-2"></div>
				<div className="individual-dashboard-wrapper mx-auto">

				</div>
			</div>
		);
	}
}

export default Dashboard;