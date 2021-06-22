import React from 'react';
import './css/TitleBar.css';



import minimize_logo from './assets/icons/titlebar/minus.svg';

import maximize_logo from './assets/icons/titlebar/stop.svg';

import close_logo from './assets/icons/titlebar/close.svg';
import Button from 'react-bootstrap/Button';


import TopBarFunction from './TopBarFunction';



class TitleBar extends React.Component{
	constructor(){
		super()
		this.state={
			
		}

		this.topBarFunction = new TopBarFunction();
	}

	componentDidMount(){
		
	}

	closeApp(){
		document.getElementById('closeBtn').addEventListener('click', ()=>{
			this.ipc.send('closeApp')
		})
	}

	render(){
		return(
			<div className="title-container">
				<div className="button-wrapper">
					<Button variant="outline-none" size="sm" id="minimizeBtn" /*onClick = {this.topBarFunction.minimizeApp}*/ className="minimize-btn" style={{marginLeft: '51px'}}><img src={minimize_logo}/></Button>
					<Button variant="outline-none" size="sm" id="closeBtn" /*onClick = {this.closeApp}*/  className="close-btn"><img src={close_logo}/></Button>
				</div>
			</div>
			
		)
	}

}

export default TitleBar;