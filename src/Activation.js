import {useState} from "react";
import React from 'react';
import { Link } from 'react-router-dom';
import './css/Activation.css';


class Activation extends React.Component {
  constructor(){
    super()
    this.state = {
    }
  }

  componentDidMount(){

  }
  

  render(){
        return(
            <div className="activation">
                <div className="activation-container">
	                <div className="row pt-4">
                        <div className="col-12">
                            <div className="exath-activation"></div>
                        </div>
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
                        <Link className="col-2 ml-5 button" style={{ textDecoration: 'none' }}>
                            <h1 className="text-center">Close</h1>
                        </Link>
                
                        <Link to="/task"className="col-2 ml-5 button" style={{ textDecoration: 'none' }}>
                            <h1 className="text-center">Activate</h1>
                        </Link>
                        <div className="col-3"></div>
                    </div>
                 </div>
            </div>
	    );
    }
}

	


export default Activation;