import React, { Component } from 'react';
import img1 from '../assets/logo.jpg';
import './Navbar.css';
import icon1 from '../assets/menu.svg';
import './Navbar.css';
import { Menuitems } from './Menuitems';

class Navbar extends Component {
  render() {
    
    return (
      <div className='contaainer'>
      <nav className='Navbaritems'>
        <div className='navbar-logo'>
         <h1 className='Nanlogo'>Tabrobana</h1>

         <div className='menu-Icon'>
                 <img src={icon1}></img>
         </div>
        </div>
        <ul className='nav-menu'>
          {Menuitems.map((item, index) => (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          ))}

          <button className='signup'>Signup</button>
        </ul>
      </nav>
      </div>
    );
  }
}

export default Navbar;
