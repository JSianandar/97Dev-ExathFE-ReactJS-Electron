import React from 'react';
import {NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import './css/Navbar.css';

import logo from './assets/icons/exath_logo.png';
import tasks_icon from './assets/icons/task_logo.svg';
import profiles_icon from './assets/icons/profile_logo.svg';
import proxies_icon from './assets/icons/proxies_logo.svg';
import captcha_icon from './assets/icons/captcha_logo.svg';
import dashboard_icon from './assets/icons/dashboard_logo.svg';
import settings_icon from './assets/icons/settings_logo.svg';

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
        <div className="navbar-wrapper p-0 m-0">
          <Nav defaultActiveKey="/task" className="flex-column">
            <img className="exath-logo mx-auto" src={logo} />
            
            <NavLink exact to="/task" className='navbar-item d-flex mx-auto' activeStyle={{opacity: 1}} style={{ textDecoration: 'none' }} onClick={this.props.checkAndValidateSession()}>
              <img className="navbar-item-icon task-icon my-auto" src={tasks_icon} />
              <p className="my-auto">Tasks</p>
            </NavLink>

            <NavLink exact to="/profile" className='navbar-item d-flex mx-auto' activeStyle={{opacity: 1}} style={{ textDecoration: 'none' }} onClick={this.props.checkAndValidateSession()}>
              <img className="navbar-item-icon profile-icon my-auto" src={profiles_icon} />
              <p className="my-auto">Profiles</p>
            </NavLink>

              <NavLink exact to="/proxies" className='navbar-item d-flex mx-auto' activeStyle={{opacity: 1}} style={{ textDecoration: 'none' }} onClick={this.props.checkAndValidateSession()}>
              <img className="navbar-item-icon proxies-icon my-auto" src={proxies_icon} />
              <p className="my-auto">Proxies</p>
            </NavLink>

              <NavLink exact to="/captcha" className='navbar-item d-flex mx-auto' activeStyle={{opacity: 1}} style={{ textDecoration: 'none' }} onClick={this.props.checkAndValidateSession()}>
              <img className="navbar-item-icon captcha-icon my-auto" src={captcha_icon} />
              <p className="my-auto">Captcha</p>
            </NavLink>

              <NavLink exact to="/dashboard" className='navbar-item d-flex mx-auto' activeStyle={{opacity: 1}} style={{ textDecoration: 'none' }} onClick={this.props.checkAndValidateSession()}>
              <img className="navbar-item-icon dashboard-icon my-auto" src={dashboard_icon} />
              <p className="my-auto">Dashboard</p>
            </NavLink>

              <NavLink exact to="/settings" className='navbar-item d-flex mx-auto' activeStyle={{opacity: 1}} style={{ textDecoration: 'none' }} onClick={this.props.checkAndValidateSession()}>
              <img className="navbar-item-icon settings-icon my-auto" src={settings_icon} />
              <p className="my-auto">Settings</p>
            </NavLink>

            <p className="version-number">2.0.1</p>
          </Nav>
        </div>
    );
  }
}

export default NavBar;