import React from 'react';

const Navbar = ({ page,  updatePage, active, setActive }) =>
  {
  return (
      <nav>
        <ul>
            <li id="nav__letter" onClick = {updatePage}>Brief</li>
            <li id="nav__events" onClick = {updatePage}> Termine</li>
            <li id="nav__materials" onClick = {updatePage}>Materialen</li>
                    <li>
            <ul className="languages">
               <li id="DE" className="languages__tab">DE</li>
               <li id="EN" className="languages__tab">EN</li>
               <li id="ES" className="languages__tab">ES</li>
             </ul> </li>
        </ul>
      </nav>
  );
};

export default Navbar;
