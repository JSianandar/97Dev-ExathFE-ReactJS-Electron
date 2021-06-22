import './App.css';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import TitleBar from './TitleBar.js';
import NavBar from './Navbar.js';
import Activation from'./Activation.js';
import Task from './Task.js';
import Profile from './Profile.js';
import Proxies from './Proxies.js';
import Captcha from './Captcha.js';
import Dashboard from './Dashboard.js';
import Settings from './Settings.js';


import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';

function App() {
  const [key, setKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Redirect to="/activation" />
          </Route>
         
          <Route exact path="/activation">
            
            <div style={{height:"100vh"}}>
                <Activation />
            </div>
          </Route>

          {/*With Navbar*/}
          <Route exact path="/task">
            <div className="d-flex">
              <NavBar />
              <Task />
            </div>
          </Route>
          
          <Route exact path="/profile">
            <div className="d-flex">
                <NavBar />
                <Profile />
            </div>
          </Route>

          <Route exact path="/proxies">
            <div className="d-flex">
                <NavBar />
                <Proxies />
            </div>
          </Route>

          <Route exact path="/captcha">
            <div className="d-flex">
                <NavBar />
                <Captcha />
            </div>
          </Route>

          <Route exact path="/dashboard">
            <div className="d-flex">
                <NavBar />
                <Dashboard />
            </div>
          </Route>

          <Route exact path="/settings">
            <div className="d-flex">
                <NavBar />
                <Settings />
            </div>
          </Route>

      </Switch>
    </Router>
  );
}

export default App;
