import React from 'react';
import './css/TitleBar.css';

class TitleBar extends React.Component{
	constructor(){
		super()
		this.state={

		}
	}

	componentDidMount(){

	}

	render(){
		return(
			<div className="title-container">
				<div className="col-9"></div>
				<div className="col-1">
					<button id="minimizeBtn" className="minimize-btn"></button>
				</div>
				<div className="col-1">
					<button id="maximizeBtn" className="maximize-btn"></button>
				</div>
				<div className="col-1">
					<button id="closeBtn" className="close-btn"></button>
				</div>
			</div>
		)
	}
}

export default TitleBar;