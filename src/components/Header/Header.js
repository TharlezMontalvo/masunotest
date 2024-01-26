import React from 'react';
import './Header.scss'; 
import logo from '../../img/Logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </header>
  );
}

export default Header;
