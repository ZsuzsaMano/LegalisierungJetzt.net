import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LegalisierungContext } from '../context/LegalisierungContext';
import languagesObject from '../languagesObject';

const Navbar = () => {
  const { language } = useContext(LegalisierungContext);

  const pages = [
    { id: 'nav__letter', link: 'letter' },
    { id: 'nav__events', link: 'events' },
    { id: 'nav__materials', link: 'materials' },
  ];

  return (
    <nav>
      <ul>
        {pages.map((p, index) => (
          <li key={p.id}>
            <NavLink
              to={`/${pages[index].link}`}
              activeClassName="activeRoute"
            >
              {languagesObject[language].nav[p.id]}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
