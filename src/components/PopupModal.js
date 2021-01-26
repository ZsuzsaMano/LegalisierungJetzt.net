import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LegalisierungContext } from '../context/LegalisierungContext';

const PopupModal = (props) => {
    const [isChoosen, setIsChoosen] = useState(false);
   const {
     t,
     i18n } = useTranslation();

    const { setLanguage } = useContext(LegalisierungContext);

    const updateLanguage = (lang) => {
      setLanguage(lang);
      i18n.changeLanguage(lang);
      setIsChoosen(true);
    };

    return (
    <div className={isChoosen ? 'popup displaynone' : 'popup'}>
      <ul className="popup_languages">
       <li id="de" className="languages__tab" onClick = {() => updateLanguage('de')}>DE</li>
       <li id="en" className="languages__tab" onClick = {() => updateLanguage('en')}>EN</li>
       <li id="es" className="languages__tab" onClick = {() => updateLanguage('es')}>ES</li>
    </ul>
    </div>
    );
  };

export default PopupModal;
