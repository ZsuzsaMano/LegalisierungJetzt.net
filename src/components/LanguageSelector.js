/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LegalisierungContext } from '../context/LegalisierungContext';

const PopupModal = () => {
  const {
    i18n,
  } = useTranslation();

  const { setLanguage } = useContext(LegalisierungContext);

  const updateLanguage = lang => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="popup">
      <ul className="popup_languages">
        <li id="de" className="languages__tab" onClick={() => updateLanguage('de')}>
          DE
        </li>
        <li id="en" className="languages__tab" onClick={() => updateLanguage('en')}>
          EN
        </li>
        <li id="es" className="languages__tab" onClick={() => updateLanguage('es')}>
          ES
        </li>
      </ul>
    </div>
  );
};

export default PopupModal;
