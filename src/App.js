import './App.css';
import {useState} from "react";

import Task from './Task.js';
import Activation from'./Activation.js';
import NavBar from './Navbar.js';
import Profile from './Profile.js';
import Proxies from './Proxies.js';
import Captcha from './Captcha.js';
import Settings from './Settings.js';

import CreateCaptcha from './CreateCaptcha';
import EditCaptcha from './EditCaptcha';
import CaptchaHarvester from './CaptchaHarvester';

import CreateProxy from './CreateProxy';
import EditProxy from './EditProxy';

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
            <Activation />
          </Route>

          {/*With Navbar*/}
          <Route exact path="/task">
            <NavBar />
            <Task />
          </Route>
          
          <Route exact path="/profile">
            <NavBar />
            <Profile />
          </Route>

          <Route exact path="/proxies">
            <NavBar />
            <Proxies />
          </Route>

          <Route exact path="/captcha">
            <NavBar />
            <Captcha />
          </Route>

          <Route exact path="/settings">
            <NavBar />
            <Settings />
          </Route>

          {/*Captcha Related Pages*/}
          <Route exact path="/create_captcha">
            <CreateCaptcha />
          </Route>

          <Route exact path="/edit_captcha">
            <EditCaptcha />
          </Route>

          <Route exact path="/captcha_harvester">
            <CaptchaHarvester />
          </Route>

          {/*Proxy Related Pages*/}
          <Route exact path="/create_proxy">
            <CreateProxy />
          </Route>

          <Route exact path="/edit_proxy">
            <EditProxy />
          </Route>



          
      </Switch>
    </Router>
  );
}

export default App;
