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
  {
    id: 'nav__campaign',
    link: 'https://legalisierungjetzt.netlify.app/',
    external: true,
    label: '2026',
  },
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
  const { t, i18n } = useTranslation();
  const currentLanguage = ['de', 'en', 'es'].includes(i18n.resolvedLanguage || i18n.language)
    ? (i18n.resolvedLanguage || i18n.language)
    : 'en';
  const campaignLink = `https://legalisierungjetzt.netlify.app/${currentLanguage}`;

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
    const label = p.external ? p.label : t(`nav.${p.id}`);

    if (p.external) {
      return (
        <a
          href={p.external ? campaignLink : p.link}
          target="_blank"
          rel="noreferrer"
          onClick={handleDrawerClose}
          className={mobileMenuItem}
          key={label}
          style={{
            display: 'block',
            fontWeight: 700,
            textDecoration: 'underline',
            color: '#d9a9ff',
          }}
        >
          <MenuItem className={mobileMenuItem}>{label}</MenuItem>
        </a>
      );
    }

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
        <Grid
          className={hamburgerIconGridItem}
          item
          xs
        >
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
        const label = p.external ? p.label : t(`nav.${p.id}`);

        if (p.external) {
          return (
            <Grid item key={p.id}>
              <a
                href={p.external ? campaignLink : p.link}
                target="_blank"
                rel="noreferrer"
                className="route"
                style={{
                  fontWeight: 700,
                  textDecoration: 'underline',
                  color: '#d9a9ff',
                }}
              >
                {label}
              </a>
            </Grid>
          );
        }

        return (
          <Grid item key={p.id}>
            <NavLink
              to={`/${p.link}`}
              className="route"
              activeClassName="activeRoute"
            >
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
        <h3 style={{ textAlign: 'center', margin: 'auto', padding: '1rem', color: 'white' }}>
          {t('nav.campaign_notice_prefix')}
          {' '}
          <a
            href={campaignLink}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: 'underline',
              color: '#d9a9ff',
              fontWeight: 700,
            }}
          >
            {t('nav.campaign_notice_link')}
          </a>
          .
        </h3>
      </menu>
    </div>
  );
}
