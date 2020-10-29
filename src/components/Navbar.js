import React from 'react';
import languagesObject from '../languagesObject';

const Navbar = ({ page, updatePage, updateLanguage, language }) => {
  const pages = [
    {id: 'nav__letter'},
    {id: 'nav__events'},
    {id: 'nav__materials'}
  ];

  return (
      <nav>
        <ul>
            {pages.map((p, index) => (
              <li
                id={p.id}
                className={page === p.id ? 'active' : ''}
                onClick = {updatePage}>
                {languagesObject[language].nav[p.id]}
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
