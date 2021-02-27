import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav className='header'>
      <div className='header__navbar--left'>
        <div className='header__logo'>Rakuten TV</div>
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

export default Header;
