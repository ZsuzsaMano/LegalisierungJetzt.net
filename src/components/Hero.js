import React from 'react';
import Logo from  '../img/logo.png';

const Hero = () =>
{
  return (
    <header>
      <span className= "hero__text">Close the gap</span>
      <img className="header__logo" src={Logo} alt="logo" id="main"/>
      <span className= "hero__text">Open the borders</span>
    </header>

  );
};

export default Hero;
