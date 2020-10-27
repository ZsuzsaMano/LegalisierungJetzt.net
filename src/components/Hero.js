import React from 'react';
import Logo from  '../img/logo.png';

const Hero = ({ updatePage }) =>
{
  return (
    <header>
      <span>Close the gap</span>
      <img className="header__logo" src={Logo} alt="logo" id="main" onClick={updatePage}/>
      <span>Open the borders</span>
    </header>

  );
};

export default Hero;
