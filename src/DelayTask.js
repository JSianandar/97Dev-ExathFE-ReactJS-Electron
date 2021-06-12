import React from 'react';
import './css/DelayTask.css';
import {Link} from 'react-router-dom';
import axios from 'axios';


class DelayTask extends React.Component{
	constructor(){
    super()
    this.state = {
    }
  }

  
  handleUpdateChangeDelay = async() => {
        await axios.put('http://exath.io/api/tasks/update/all')
        .then(response => {
            console.log(response)
            console.log(response.data)
        },
        error=>{
        
        })
  }


  componentDidMount(){
    
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
                    <input type="text" className="background-color" style={{outline: 'none'}} placeholder = "Monitor Delay" required/>
                </form>
                <div className="col-1"></div>
                <form className=" button col-4 pt-1" style={{textDecoration: "none"}}>
                    <input type="text" className="background-color" style={{outline: 'none'}} placeholder = "Retry Delay" required/>
                </form>
                <div className="col-1"></div>

{/*             <Link className=" button col-4" style={{textDecoration: "none"}}>
                    <h2 className="text-center">Monitor Delay</h2>
                </Link>
                <div className="col-1"></div>
                <Link className=" button col-4" style={{textDecoration: "none"}}>
                    <h2 className="text-center">Retry Delay</h2>
                </Link>
*/}
            </div>

            <div className="row pt-4">
				<div className="col-7"></div>
				<div className="col-1 ml-4">
					<Link data-toggle="modal" data-target="#delayTask" className="button-text" style={{ textDecoration: 'none' }}>Close</Link>
				</div> 
				<div className="col-2 ml-4">
					<Link data-toggle="modal" data-target="#delayTask" className="button-text" style={{ textDecoration: 'none' }} onClick={this.handleUpdateChangeDelay} >Save</Link>
				</div>
			</div>
            
        </div>
    );
  }
}

export default DelayTask;