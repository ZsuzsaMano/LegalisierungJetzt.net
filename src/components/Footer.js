import React from 'react';
import Twitter from '../img/twitter.svg';
import Facebook from '../img/facebook.svg';

const Footer = () => {
  return(
    <footer>
    <a href=""><img src={Twitter} alt="Email"/></a>
    <a href=""><img src={Twitter} alt="Twitter"/></a>
    <a href=""><img src={Facebook} alt="Facebook"/></a>

    </footer>
  )
}

export default Footer;
