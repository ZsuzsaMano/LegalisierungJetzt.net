import React from 'react';
import languagesObject from '../languagesObject';

const Navbar = ({ updatePage, updateLanguage, language }) =>
  {
  return (
      <nav>
        <ul>
            <li id="nav__letter" onClick = {updatePage}>{languagesObject.[language].nav[0]}</li>
            <li id="nav__events" onClick = {updatePage}> {languagesObject.[language].nav[1]}</li>
            <li id="nav__materials" onClick = {updatePage}>{languagesObject.[language].nav[2]}</li>
                    <li>
            <ul className="languages">
               <li id="DE" className="languages__tab" onClick = {updateLanguage}>DE</li>
               <li id="EN" className="languages__tab" onClick = {updateLanguage}>EN</li>
               <li id="ES" className="languages__tab" onClick = {updateLanguage}>ES</li>
             </ul> </li>
        </ul>
      </nav>
  );
};

export default Navbar;
