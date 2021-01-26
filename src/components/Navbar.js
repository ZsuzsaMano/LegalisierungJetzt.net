import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { t } = useTranslation();

  const pages = [
    { id: 'nav__letter', link: 'letter' },
    { id: 'nav__events', link: 'events' },
    { id: 'nav__materials', link: 'materials' },
    { id: 'nav__pressconference', link: 'press' },
  ];

  return (
    <nav>
      <ul>
        {pages.map((p, index) => (
          <li key={p.id}>
            <NavLink
              to={`/${p.link}`}
              activeClassName="activeRoute"
            >
              {t(`nav.${p.id}`)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
