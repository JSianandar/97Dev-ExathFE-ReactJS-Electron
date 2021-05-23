import React from 'react';
import './css/DelayTask.css';
import {Link} from 'react-router-dom';


class DelayTask extends React.Component{
	constructor(){
    super()
    this.state = {
    }
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
                <Link className=" button col-4" style={{textDecoration: "none"}}>
                    <h2 className="text-center">Monitor Delay</h2>
                </Link>
                <div className="col-1"></div>
                <Link className=" button col-4" style={{textDecoration: "none"}}>
                    <h2 className="text-center">Retry Delay</h2>
                </Link>
                <div className="col-1"></div>
            </div>

            <div className="row pt-4">
				<div className="col-7"></div>
				<div className="col-1 ml-4">
					<Link data-toggle="modal" data-target="#delayTask" className="button-text" style={{ textDecoration: 'none' }}>Close</Link>
				</div> 
				<div className="col-2 ml-4">
					<Link data-toggle="modal" data-target="#delayTask" className="button-text" style={{ textDecoration: 'none' }}>Save</Link>
				</div>
			</div>
            
        </div>
    );
  }
}

export default DelayTask;