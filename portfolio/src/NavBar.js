// NavBar.js
import React, { useState } from 'react';
import NavigationMenu from './NavigationMenu';
import Logo from './Assets/Logo.jpg';
import './Navigation.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* <Link to="/">
        <img src={Logo} alt="Logo" style={{ height: '50px' }} />
      </Link> */}
      <button className= 'menu-button' onClick={toggleMenu} style={{ cursor:'pointer' }}>
        Menu
      </button>

      {/* Navigation Menu */}
      <NavigationMenu isOpen={isMenuOpen} toggle={toggleMenu} />
    </header>
  );
};

export default NavBar;
