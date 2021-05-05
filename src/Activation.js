import {useState} from "react";
import React from 'react';
import { Link } from 'react-router-dom';

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
            <div className="activation-container">
	            <div className="row mx-auto">
                    <div className="col-12">
                        <div className="exath-activation"></div>
                    </div>
                </div>
                <div className="row mx-auto">
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
                <div className="row mx-auto">
                    <Link className="close_button ml-5"></Link>
                    <Link to="/task" className="activate_button ml-5"></Link>
                </div>
             </div>
	    );
    }
}

	


export default Activation;