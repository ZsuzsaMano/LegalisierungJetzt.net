/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, Button, Popover } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import { LegalisierungContext } from '../context/LegalisierungContext';

const useStyles = makeStyles(() => ({
  link: {
    fill: 'white',
    zIndex: '99999',
    '&:hover': {
      transition: 'all 200ms ease-in',
      fill: '#D32AA2',
    },
  },
}));

const LanguageSelector = () => {
  const { link } = useStyles();
  const { i18n } = useTranslation();

  const { setLanguage } = useContext(LegalisierungContext);
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const toggleLanguage = event => {
    if (!isOpen) setAnchorEl(event.currentTarget);
    else setAnchorEl(null);

    setIsOpen(current => !current);
  };

  const updateLanguage = lang => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    toggleLanguage();
  };

  const id = isOpen ? 'simple-popover' : undefined;

  return (
    <div className="popup">
      <Button aria-describedby={id} onClick={toggleLanguage}>
        <LanguageIcon className={link} />
      </Button>
      <Popover
        id={id}
        open={isOpen}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div style={{ width: '100px', height: '100px' }}>
          <ul className="popup_languages">
            <li id="de" className="languages__tab" onClick={() => updateLanguage('de')}>
              Deutsch
            </li>
            <li id="en" className="languages__tab" onClick={() => updateLanguage('en')}>
              English
            </li>
            <li id="es" className="languages__tab" onClick={() => updateLanguage('es')}>
              Castellano
            </li>
          </ul>
        </div>
      </Popover>
    </div>
  );
};

export default LanguageSelector;
