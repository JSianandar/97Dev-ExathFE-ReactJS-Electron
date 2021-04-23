import React from 'react';
import {Link} from 'react-router-dom';


class NavBar extends React.Component {
  constructor(){
    super()
    this.state = {
    }
  }

  componentDidMount(){

  }

  render(){
    return(
        <div className="panel-background">
            {/* Exath Logo */}
            <div className="exath-logo">
            </div>

            {/* Task Panel */}
            <Link to="/task" className="task-panel">
            </Link>

            {/* Profile Panel */}
            <Link to="/profile" className="profile-panel">
            </Link>
            
            
            {/* Proxies Panel */}
            <Link to="/proxies"className="proxies-panel">
            </Link>
            
            
            {/* Captcha Panel */}
            <Link to="/captcha" className="captcha-panel">
            </Link>
            
           
            {/* Dashboard Panel */}
            <Link className="dashboard-panel">
            </Link>
            
            
            {/* Settings Panel */}
            <Link to ="/settings" className="settings-panel">
            </Link>
            
            
            {/* Version Panel */}
            <h1 className= "version-number">2.0.1</h1>
        </div>
    
      
    );
  }
}

export default NavBar;