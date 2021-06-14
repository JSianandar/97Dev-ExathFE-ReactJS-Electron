import React from 'react';
import './css/DelayTask.css';
import {Link} from 'react-router-dom';
import axios from 'axios';


class DelayTask extends React.Component{
	constructor(){
    super()
    this.state = {
        monitorDelay: '',
        retryDelay: '',
        refreshPageState: ''
    }
  }

  handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event =>{
		event.preventDefault();
        axios.put('http://exath.io/api/tasks/update/all', {
            "monitorDelay" : this.state.monitorDelay,
            "retryDelay": this.state.retryDelay
        })
        .then(response => {
           console.log(response)
           console.log(response.data)
           this.props.refreshPage()
        },
           error=>{
        })
  }


  
  
        


  componentDidMount(){
    
  }

  componentDidUpdate(prevprop){
    console.log('prevprop', prevprop)
    if(prevprop.refreshPageState != this.props.refreshPageState){
    document.getElementById('input-monitordelay').value = ''
	document.getElementById('input-retrydelay').value = ''
        this.setState({
            refreshPageState : this.props.refreshPageState
        })
    }
  }

  

  render(){
    return(
        <div className="delay-task-container">
            <div className="row pt-2">
                <div className="col-12">
                    <h1 className="text-center">Delay Task</h1>
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-1 ml-4"></div>
                <form className=" button col-4 pt-1" style={{textDecoration: "none"}}>
                    <input type="text" className="background-color" style={{outline: 'none'}} placeholder = "Monitor Delay" id= "input-monitordelay" onChange= {this.handleChange} required/>
                </form>
                <div className="col-1"></div>
                <form className=" button col-4 pt-1" style={{textDecoration: "none"}}>
                    <input type="text" className="background-color" style={{outline: 'none'}} placeholder = "Retry Delay" id= "input-retrydelay" onChange= {this.handleChange} required/>
                </form>
                <div className="col-1"></div>
            </div>

            <div className="row pt-4">
				<div className="col-7"></div>
				<div className="col-1 ml-4">
					<Link data-toggle="modal" data-target="#delayTask" className="button-text" style={{ textDecoration: 'none' }}>Close</Link>
				</div> 
				<div className="col-2 ml-4">
					<Link data-toggle="modal" data-target="#delayTask" className="button-text" style={{ textDecoration: 'none' }} onClick={this.handleSubmit} >Save</Link>
				</div>
			</div>
            
        </div>
    );
  }
}

export default DelayTask;