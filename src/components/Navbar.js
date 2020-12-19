import React, {useContext} from 'react';
import {LegalisierungContext} from '../context/LegalisierungContext';
import languagesObject from '../languagesObject';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

const Navbar = () => {
  const {language,setLanguage, updateLanguage} = useContext(LegalisierungContext);

  const pages = [
    {id: 'nav__letter', link:'letter'},
    {id: 'nav__events', link:'events'},
    {id: 'nav__materials', link:'materials'},
  ];

  return (
      <nav>
        <ul>
            {pages.map((p, index) => (
              <li>
                 <NavLink to={'/'+pages[index].link}
                  activeClassName="activeRoute">{languagesObject[language].nav[p.id]}</NavLink>
             </li>
            ))}

            <ul className="languages">
               <li id="DE" className="languages__tab" onClick = {updateLanguage}>DE</li>
               <li id="EN" className="languages__tab" onClick = {updateLanguage}>EN</li>
               <li id="ES" className="languages__tab" onClick = {updateLanguage}>ES</li>
            </ul>
        </ul>
      </nav>
  );
};

export default Navbar;
