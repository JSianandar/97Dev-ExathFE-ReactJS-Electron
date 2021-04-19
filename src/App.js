import './App.css';
import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Task from './Task';
import './css/Task.css';


import { Link } from 'react-router-dom';

function App() {
  
  return (
    <Router>
        {/* Panel Navbar */}

        <div className="panel-background">
            {/* Exath Logo */}
            <div className="exath-logo">
            </div>

            {/* Task Panel */}
            <Link to="/task" className="task-panel">
            </Link>

            <div className="task-logo">
            </div>

            <h1 className= "task-button">Tasks</h1>
            {/* Profile Panel */}
            <button className="profile-panel">
            </button>
            
            <div className="profile-logo">
            </div>

            <h1 className= "profile-button">Profiles</h1>
            {/* Proxies Panel */}
            <button className="proxies-panel">
            </button>
            
            <div className="proxies-logo">
            </div>

            <h1 className= "proxies-button">Proxies</h1>
            {/* Captcha Panel */}
            <button className="captcha-panel">
            </button>
            
            <div className="captcha-logo">
            </div>

            <h1 className= "captcha-button">Captcha</h1>
            {/* Dashboard Panel */}
            <button className="dashboard-panel">
            </button>
            
            <div className="dashboard-logo">
            </div>

            <h1 className= "dashboard-button">Dashboard</h1>
            {/* Settings Panel */}
            <button className="settings-panel">
            </button>
            
            <div className="settings-logo">
            </div>

            <h1 className= "settings-button">Settings</h1>
            {/* Version Panel */}
            <h1 className= "version-number">2.0.1</h1>
        </div>
        {/*Control Panel*/}
        <div className="control-panel">
            <h1 className="task-title">Tasks</h1>
            <p className="time">12:12:59</p>
            <h1 className="welcome">Welcome,</h1>
            <h1 className="username">Bluu#1234</h1>
            <p className= "alltask">Tasks -</p>
            <p className= "runningtask">Running Tasks -</p>
            {/*Chance to Link later*/}
            <div className="startalltask"></div>
            <div className="stopalltask"></div>
            <div className="edittask"></div>
            <div className="delaytask"></div>
            <div className="quicktask"></div>
            <div className="deletetask"></div>
            <div className="createtask"></div>
        </div>
        {/*Task Header*/}
        <div className="task-heading">
            <h1 className="task-site">Site</h1>
            <h1 className="task-size">Size</h1>
            <h1 className="task-product">Product</h1>
            <h1 className="task-profile">Profile</h1>
            <h1 className="task-proxies">Proxies</h1>
            <h1 className="task-status">Status</h1>
            <h1 className="task-actions">Actions</h1>
        </div>
        {/*Task Table*/}
        <div className="task-table">
            <h1 className="table-site">Custom Shopify</h1>
            <p className="table-site-quality">Safe</p>
            <h1 className="table-size">7W</h1>
            <h1 className="table-product">Jordan 1 High OG</h1>
            <h1 className="table-profile">ExathBluu</h1>
            <h1 className="table-proxies">ExathProxies</h1>
            <h1 className="table-status">Waiting for Restocks</h1>
            {/*Change to Button later*/}
            <div className="table-play"></div>
            <div className="table-stop"></div>
            <div className="table-edit"></div>
            <div className="table-delete"></div>
        </div>

       <Switch>
            {/*
            <Route exact path="/task">
                <Task />
            </Route>
            */}
       </Switch>
    </Router>
  );
}

export default App;
