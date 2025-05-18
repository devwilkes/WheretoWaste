import React from "react";
import { NavLink } from 'react-router-dom';
import './header.css';


function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
      </div>
      <div className='navbar-center'>
        <ul className='nav-links'>
          <li>
            <NavLink to='/HomeBody'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/AboutBody'>About</NavLink>
          </li>
          <li>
            <NavLink to='/HelpBody'>Help</NavLink>
          </li>
        </ul>
      </div>
      <div className='navbar-right'>
        <a href='/account' className='user-icon'>
          <i className='fas fa-user'></i>
        </a>
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