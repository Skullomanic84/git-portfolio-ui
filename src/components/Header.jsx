import React from 'react'

import './Header.css'

function Header({ logo }) {
  return (
    <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo'
            />
            <h3>My Git Profile</h3>
            
    </header>
  )
}

export default Header;