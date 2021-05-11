import React from 'react';
import './css/Dashboard.css';
import {Link} from 'react-router-dom';

import shoe_img from './assets/icons/travis_1.svg';

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
					<div className="row heading-wrapper pt-1 ml-4">
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
					<div className="row pt-2"></div>
					<div className="row inside-wrapper ml-4">
						<div className="col-2 ml-4 pt-3">
							<img src={shoe_img} />
						</div>
						<div className="col-2 pt-2">
							<div className="row ">
								<h2 className="text-center">Jordan 1 Travis Scott</h2>
							</div>
							<div className="row ">
								<h2 className="text-center">$170</h2>
							</div>
							<div className="row ">
								<h2 className="text-center">Size - 6.0</h2>
							</div>
						</div>
						<div className="col-2 ml-5 pt-4">
							<h2>InvincibleID</h2>
						</div>
						<div className="col-2 ml-3 pt-4">
							<h2>Dennis Mabuk Berat</h2>
						</div>
				
						<div className="col-2 ml-5 pt-4">
							<div className="row ml-5 ">
								<h2 className="text-center">25/06/02</h2>
							</div>
							<div className="row ml-5 ">
								<h2 className="text-center">14.00.23</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;