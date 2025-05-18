import React from "react";
import { NavLink } from 'react-router-dom';
import './Header.css';


function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
      </div>
      <div className='navbar-center'>
        <ul className='nav-links'>
          <li>
            <NavLink to='/' end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/help'>
              Help
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='navbar-right'>
        <NavLink to='/account' className='user-icon'>
          <i className='fas fa-user'></i>
        </NavLink>
      </div>
    </nav>
  );
}

//Defining the Header component
const Header: React.FC = () => {
    return (
        <div className="header">
            <h1>WhereToWaste</h1>
            <h2>The waste disposal search browser!</h2>
            <NavBar />
        </div>
    );
 }

 export default Header;