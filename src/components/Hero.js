import React from 'react';
import Logo from  '../img/logo.png';

const Hero = () => {
  return (
    <a href="./index.html">
    <header>
      <span>Close the gap</span>
      <img className="header__logo" src={Logo} alt="logo"/>
      <span>Open the borders</span>
    </header>
    </a>
  );
};

export default Hero;
