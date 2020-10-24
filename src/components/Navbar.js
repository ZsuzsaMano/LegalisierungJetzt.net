import React from 'react';

const Navbar = () => {
  return (
      <nav>
        <ul>
          <a href="./letter.html">
            <li id="nav__letter">Brief</li>
          </a>

          <a href="./events.html">
            <li id="nav__events">Termine</li>
          </a>
          <a href="./materials.html" >
            <li id="nav__materials">Materialen</li>
          </a>

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
