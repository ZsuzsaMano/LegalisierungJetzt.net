import React from 'react';
import Logo from  '../img/logo.png';

const Hero = ({ updatePage }) =>
{
  return (
    <header>
      <span className= "hero__text">Close the gap</span>
      <img className="header__logo" src={Logo} alt="logo" id="main" onClick={updatePage}/>
      <span className= "hero__text">Open the borders</span>
    </header>

  );
};

export default Hero;
