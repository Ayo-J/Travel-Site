import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Navbar.css';
import { Menuitems } from './Menuitems';

class Navbar extends Component {
  render() {
    return (
      <div className='container'>
        <nav className='Navbaritems'>
          <div className='navbar-logo'>
            <h1 className='Nanlogo'>Tabrobana</h1>
            <div className='menu-Icon'>
              {/* Add your menu icon components here */}
            </div>
          </div>
          <ul className='nav-menu'>
            {Menuitems.map((item, index) => (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <button className='signup'>Signup</button>
        </nav>
      </div>
    );
  }
}

export default Navbar;
