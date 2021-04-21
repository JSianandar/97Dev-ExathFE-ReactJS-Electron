import {useState} from "react";
import React from 'react';
import { Link } from 'react-router-dom';

class Activation extends React.component {
  constructor(){
    super()
    this.state = {
    }
  }

  componentDidMount(){

  }
  

  render(){
        return(
	        <div className="exath-activation">
                <form>
                    <input 
                    type="text"
                    required
                    placeholder = "Enter your key"
                    className="key_input"
                    />
                </form>
    
                <Link className="close_button"></Link>
                <Link to="/task" className="activate_button"></Link>
            </div>
	    );
    }
}

	


export default Activation;