//import { useTranslation, Trans } from 'react-i18next';
import React, {useContext} from 'react';
import {LegalisierungContext} from '../context/LegalisierungContext';
import languagesObject from '../languagesObject';


const Events = () => {
  const {language} = useContext(LegalisierungContext);
  //  const { t, i18n } = useTranslation();

  return(
    <main className="event">

        <h2 className="event__title title" id="event__title">{languagesObject.[language].nav.nav__events}</h2>
      <section className="dark-box event__box">
    {languagesObject.[language].event}
      </section>

    </main>
  );
};

export default Events;
