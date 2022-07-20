import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Header.css'

function Header({ logo }) {
  return (
    <header className='App-header'>
        <img 
        src={logo} 
        className='App-logo' 
        alt='logo'/>

        <h3>My Git Profile</h3>

        <nav>
          <RouterLink to='/' className='App-link'>
            About Me
          </RouterLink>
          <RouterLink to='/projects' className='App-link'>
            Projects
          </RouterLink>
        </nav>
            
    </header>
  );
}

export default Header;