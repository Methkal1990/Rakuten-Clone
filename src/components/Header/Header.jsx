import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { clearError } from '../../actions';
import './Header.css';
import logo from '../../assets/logo.png';

function Header({ clearError }) {
  return (
    <nav className='header'>
      <div className='header__navbar--left'>
        <Link to='/' onClick={clearError}>
          <img src={logo} alt='Rakuten logo' className="header__logo" />
        </Link>
        <ul className='header__options'>
          <li>CINEMA</li>
          <li>FREE</li>
          <li>SUBSCRIPTION</li>
        </ul>
        <input type='text' placeholder='Search' className='header__search' />
      </div>
      <ul className='header__navbar--right'>
        <li>SIGN IN</li>
        <li className='header__button'>REGISTER</li>
      </ul>
      <ul className='header__responsive'>
        <li>
          <i className='fa fa-home fa-lg'></i>
          <p>HOME</p>
        </li>
        <li>
          <i className='fa fa-play fa-lg' aria-hidden='true'></i>
          <p>CINEMA</p>
        </li>
        <li>
          <i className='fa fa-eye fa-lg' aria-hidden='true'></i>
          <p>FREE</p>
        </li>
        <li>
          <i className='fa fa-credit-card fa-lg' aria-hidden='true'></i>
          <p>SUBSCRIPTION</p>
        </li>
        <li>
          <i className='fa fa-user fa-lg' aria-hidden='true'></i>
          <p>SIGN IN</p>
        </li>
      </ul>
    </nav>
  );
}

export default connect(null, { clearError })(Header);
