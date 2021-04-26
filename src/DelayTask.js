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
        <div>
            <div className="rectangle_background11">
                <h1 className="delay_task">Delay</h1>
                <Link className="monitor_delay"></Link>
                <Link className="retry_delay"></Link>

                <Link to="/task" className="close_dt">Close</Link>
                <Link to="/task" className="save_dt">Save</Link>
            </div>
        </div>
    );
  }
}

export default DelayTask;