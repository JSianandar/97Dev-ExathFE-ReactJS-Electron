import React from 'react';
import './css/IndividualCaptcha.css';
import axios from 'axios';

import {Link} from 'react-router-dom';
import table_edit from "./assets/icons/table_edit.png";
import table_delete from "./assets/icons/table_delete.png";
import harvester_logo from './assets/icons/harvester_logo.svg';


class IndividualCaptcha extends React.Component{
	constructor(){
		super()
		this.state = {
			captcha: [],
		}
	}

	componentDidMount(){
		this.getCaptcha()
	}

	getCaptcha = () =>{
		axios.get('http://exath.io/api/captcha')
		.then(response => {
			this.setState({
				captcha : response.data
			})
		},
		error=>{
		
		})
	}

	render(){
		return(
			<div className="IndividualCaptcha">
			{
				this.state.captcha.reverse().map( (e, index) =>{
					if(index < 5)

					return(
						<React.Fragment>
							<div className="row pt-2"></div>
							<div className="individual-captcha mx-auto row">
								<div className="col-2 mr-3 pt-1">
									<h1 className="headings text-center">{e.name}</h1>
								</div>

								<div className="col-2 ml-5 pt-1">
									<h1 className="headings text-center">{e.email}</h1>
								</div>

								<div className="col-2 ml-4 pt-1">
									<h1 className="headings text-center">{e.proxy}</h1>
								</div>

						
								<div className="col-2 mr-5"></div>

								<div className="col-2 ml-2">
									<ul className="icons-wrapper">
										<li className="icon"><Link to ="/captcha_harvester"><img src= {harvester_logo}/></Link></li>
										<li className="icon"><Link to="edit_captcha"><img src={table_edit} /></Link></li>
										<li className="icon"><Link><img src={table_delete} /></Link></li>
									</ul>
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

export default IndividualCaptcha;