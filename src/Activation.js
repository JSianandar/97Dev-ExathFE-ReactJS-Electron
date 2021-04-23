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
            <div>
	            <div className="exath-activation"></div>
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