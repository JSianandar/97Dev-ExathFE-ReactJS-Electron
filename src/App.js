import './App.css';
import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home.js';
import './css/Task.css';
import {useState} from "react";
import Task from './Task.js';
import Activation from'./Activation.js';
import NavBar from './Navbar.js';
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
          
          <Route exact path="/task">
            <NavBar />
            <Task />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
