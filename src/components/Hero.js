import React from 'react';
import Logo from '../img/logo.png';

const Hero = () => (
  <div className="banner">
    <span className="hero__text">Close the gap</span>
    <img className="header__logo" src={Logo} alt="logo" id="main" />
    <span className="hero__text">Open the borders</span>
  </div>
);

export default Hero;
