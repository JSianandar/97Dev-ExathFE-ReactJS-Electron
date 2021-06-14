import {useState} from "react";
import React from 'react';
import { Link } from 'react-router-dom';
import './css/Activation.css';
import TitleBar from './TitleBar.js';
import Popup from 'react-popup';
import Alert from 'react-bootstrap/Alert';


class Activation extends React.Component {
  constructor(){
    super()
    this.state = {
        key: '',
        mode: 'true',
        visible: false,

    }
    this.trueKeyActivate = this.trueKeyActivate.bind(this)
    this.wrongKeyActivate = this.wrongKeyActivate.bind(this)
  }

   onShowAlert = ()=>{
    this.setState({visible:true},()=>{
      window.setTimeout(()=>{
        this.setState({visible:false})
      },2000)
    });
  }

  handleChange = event => {
	this.setState({ [event.target.name]: event.target.value });
  }

  trueKeyActivate(){
        this.setState({mode: 'true'})
  }

  wrongKeyActivate(){
        this.setState({mode: 'false'})
        console.log('false')

  }


  componentDidMount(){
    
  }
  

  render(){
        return(
            <div>
                {this.state.mode == 'true' &&  <div className="activation-container">
	                    <div className="row pt-4">
                            <div className="exath-activation mx-auto"></div>   
                        </div>
                        <div className="row pt-3">
                            <div className="col-12">
                                <form>
                                    <input 
                                    type="text"
                                    required
                                    placeholder = "Enter your key"
                                    className="key_input"
                                    />
                                </form>
                            </div>
                        </div>

                        <div className="row pt-5">
                            <div className="col-3 ml-4"></div>
                            <Link onClick={this.wrongKeyActivate} className="col-2 ml-5 button" style={{ textDecoration: 'none' }}>
                                <h1 className="text-center">Close</h1>
                            </Link>
                
                            <Link to="/task"className="col-2 ml-5 button" style={{ textDecoration: 'none' }}>
                                <h1 className="text-center">Activate</h1>
                            </Link>
                            <div className="col-3"></div>
                        </div>
                    </div>}



                    {this.state.mode == 'false' && 
                    <div className="activation-container">
	                    <div className="row pt-4">
                            <div className="exath-activation mx-auto"></div>   
                        </div>
                        <div className="row pt-3">
                            <div className="col-12">
                                <form>
                                    <input 
                                    type="text"
                                    required
                                    placeholder = "Enter your key"
                                    className="key_input"
                                    />
                                </form>
                            </div>
                        </div>

                        



                        <div className="row pt-5">
                            <div className="col-3 ml-4"></div>
                            <Link className="col-2 ml-5 button" onClick = {this.trueKeyActivate} style={{ textDecoration: 'none' }}>
                                <h1 className="text-center">Close</h1>
                            </Link>
                
                            <Link to="/task"className="col-2 ml-5 button" style={{ textDecoration: 'none' }}>
                                <h1 className="text-center">Activate</h1>
                            </Link>
                            <div className="col-3"></div>
                        </div>
                        
                        <div className="row pt-3">
                            <div className="col-6"></div>
                            <div className="col-4 ml-4">
                                <Alert variant = 'danger' style={{width: '135px'}}>
                                    INVALID KEY 
                                </Alert>
                            </div>
                        </div>

                    </div>}
                </div>
               
	    );
    }
}

	


export default Activation;