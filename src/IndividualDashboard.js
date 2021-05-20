import React from 'react';
import './css/IndividualDashboard.css';
import axios from 'axios';

import {Link} from 'react-router-dom';

class IndividualDashboard extends React.Component{
	constructor(){
		super()
		this.state = {
			dashboard: [],
		}
	}

	componentDidMount(){
		this.getDashboards()
	}

	getDashboards = () =>{
		axios.get('http://exath.io/api/dashboard')
		.then(response => {
			this.setState({
				dashboard : response.data
			})
		},
		error=>{
		
		})
	}

	render(){
		return(
			<div className="IndividualDashboard">
			{
				this.state.dashboard.split.map( (e, index) =>{
					if(index < 5)

					return(
						<React.Fragment>
							<div className="row pt-2"></div>
							<div className="row inside-wrapper ml-4">
								<div className="col-2 ml-4 pt-3">
									<img src={e.orders[0]["image"]} />
								</div>
								<div className="col-2 pt-2">
									<div className="row ">
										<div className="col-12 ml-5">
											<h2 className="text-center">{e.orders[0]["product"]}</h2>
										</div>
									</div>
									<div className="row ">
										<div className="col-12 ml-5">
											<h2 className="text-center">{e.orders[0]["price"]}</h2>
										</div>
									</div>
									<div className="row ">
										<div className="col-12 ml-5">
											<h2 className="text-center">Size - <span>{e.orders[0]["size"]}</span></h2>
										</div>
									</div>
								</div>
								<div className="col-3 ml-5 pt-4">
									<h2>{e.orders[0]["site"]}</h2>
								</div>
								<div className="col-1 pt-3">
									<h2>Dennis Mabuk Berat</h2>
								</div>
				
								<div className="col-2 ml-2 pt-4">
									<div className="row">
										<div className="col-12 ml-5">
											<h2 className="text-center">{e.orders[0]["date"]}</h2>
										</div>
									</div>
									<div className="row">
										<div className="col-12 ml-5">
											<h2 className="text-center">14.00.23</h2>
										</div>
									</div>
								</div>
							</div>
						</React.Fragment>
					)
				})
			}
			</div>
			
		);
	}
}

export default IndividualDashboard;