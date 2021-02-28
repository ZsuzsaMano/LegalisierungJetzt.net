import {
  AppBar, Toolbar, makeStyles, IconButton, Drawer, Link, MenuItem, Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState, useEffect } from 'react';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const pages = [
  { id: 'nav__letter', link: 'letter' },
  { id: 'nav__events', link: 'events' },
  { id: 'nav__materials', link: 'materials' },
  { id: 'nav__pressconference', link: 'press' },
  { id: 'nav__documents', link: 'documents' },
];

const useStyles = makeStyles(() => ({
  hamburgerIconGridItem: {
    marginTop: '-11px',
  },
  hamburgerIcon: {
    color: 'black',
    fill: 'black',
    fontSize: '35px',
  },
  paper: {
    background: 'black',
  },
  menuContainer: {
    backgroundColor: 'black',
    color: 'white',
  },
  mobileMenuItem: {
    textDecoration: 'none',
    fontSize: '18px',
    color: 'inherit',
  },
  header: {
    backgroundColor: 'transparent',
    '@media (max-width: 900px)': {
      position: 'absolute',
      top: '0px',
      right: '0px',
    },
  },
  drawerContainer: {
    padding: '20px 30px',
  },
  desktopGridContainer: {
    flexGrow: 1,
    width: 'auto',
    height: '80px',
    '@media (max-width: 900px)': {
      height: '20px',
    },
  },
}));

export default function Navbar() {
  const { t } = useTranslation();

  const {
    header, menuContainer, drawerContainer, desktopGridContainer, hamburgerIcon, mobileMenuItem, paper, hamburgerIconGridItem,
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => (window.innerWidth < 900 ? setState(prevState => ({ ...prevState, mobileView: true })) : setState(prevState => ({ ...prevState, mobileView: false })));

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const handleDrawerOpen = () => setState(prevState => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () => setState(prevState => ({ ...prevState, drawerOpen: false }));

  const getDrawerChoices = () => pages.map(p => {
    const label = t(`nav.${p.id}`);
    return (
      <Link
        {...{
          component: RouterLink,
          to: `/${p.link}`,
          onClick: handleDrawerClose,
          className: mobileMenuItem,
          key: label,
        }}
      >
        <MenuItem className={mobileMenuItem}>{label}</MenuItem>
      </Link>
    );
  });

  const displayMobile = () => (
    <Grid container justify="flex-end" alignItems="center" spacing={0}>
      <Toolbar>
        <Drawer
          {...{
            classes: { paper },
            anchor: 'right',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <LanguageSelector />
            {getDrawerChoices()}
          </div>
        </Drawer>
        <Grid className={hamburgerIconGridItem} item xs spacing={0}>
          <IconButton
            {...{
              edge: 'end',
              'aria-label': 'menu',
              'aria-haspopup': 'true',
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon className={hamburgerIcon} />
          </IconButton>
        </Grid>
      </Toolbar>
    </Grid>
  );

  const displayDesktop = () => (
    <Grid container direction="row" justify="space-around" alignItems="center" className={desktopGridContainer} spacing={0}>
      <LanguageSelector />
      {pages.map(p => {
        const label = t(`nav.${p.id}`);
        return (
          <Grid item key={p.id} spacing={0}>
            <NavLink to={`/${p.link}`} className="route" activeClassName="activeRoute">
              {label}
            </NavLink>
          </Grid>
        );
      })}
    </Grid>
  );

  return (
    <div className={menuContainer}>
      <menu>
        <AppBar className={header} position="relative" elevation={0}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </menu>
    </div>
  );
}
