import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState, useEffect, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import languagesObject from '../languagesObject';
import { LegalisierungContext } from '../context/LegalisierungContext';

const pages = [
  { id: 'nav__letter', link: '/letter' },
  { id: 'nav__events', link: '/events' },
  { id: 'nav__materials', link: '/materials' },
];

const getHeadersData = (language) => pages.map((page) => (
  {
    label: `${languagesObject[language].nav[page.id]}`,
    href: page.link,
  }));

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: 'transparent',
    paddingRight: '79px',
    paddingLeft: '118px',
    marginTop: '110px',
    '@media (max-width: 900px)': {
      padding: '0px',
      marginTop: '0px',
    },
  },
  menuButton: {
    size: '13px',
    marginLeft: '38px',
    fontSize: '2vw',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    padding: '20px 30px',
  },
  desktopGridContainer: {
    flexGrow: 1,
    width: 'auto',
  },
}));

export default function Navbar() {
  const { language } = useContext(LegalisierungContext);

  const {
    header,
    menuButton,
    toolbar,
    drawerContainer,
    desktopGridContainer,
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => (window.innerWidth < 900
      ? setState((prevState) => ({ ...prevState, mobileView: true }))
      : setState((prevState) => ({ ...prevState, mobileView: false })));

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

  const getDrawerChoices = () => getHeadersData(language).map(({ label, href }) => (
    <Link
      {...{
        component: RouterLink,
        to: href,
        onClick: handleDrawerClose,
        color: 'inherit',
        style: { textDecoration: 'none' },
        key: label,
      }}
    >
      <MenuItem>{label}</MenuItem>
    </Link>
  ));

  const displayMobile = () => (
    <Grid container justify="flex-end">
      <Toolbar>
        <Drawer
          {...{
            anchor: 'right',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <Grid item xs>
          <IconButton
            {...{
              edge: 'end',
              color: 'inherit',
              'aria-label': 'menu',
              'aria-haspopup': 'true',
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
      </Toolbar>
    </Grid>
  );

  const displayDesktop = () => (
    <Grid
      container
      className={desktopGridContainer}
    >
      <Toolbar className={toolbar}>
        {getHeadersData(language).map(({ label, href }) => (
          <Grid item key={label}>
            <Button
              {...{
                key: label,
                color: 'inherit',
                to: href,
                component: RouterLink,
                className: menuButton,
              }}
            >
              {label}
            </Button>
          </Grid>
        ))}
      </Toolbar>
    </Grid>
  );

  return (
    <header>
      <AppBar className={header} elevation={0}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
