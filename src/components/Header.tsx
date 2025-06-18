import React from 'react';
import './Header.css';
import logo from '../logo.svg';

const Header: React.FC = () => {
  return (
    <header className="ez-header ez-header--centered">
      <img src={logo} alt="EZ Assets Logo" className="ez-header__logo" />
    </header>
  );
};

export default Header; 