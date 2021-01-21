import { useTranslation, Trans } from 'react-i18next';
import React, {useContext} from 'react';
import {LegalisierungContext} from '../context/LegalisierungContext';
import languagesObject from '../languagesObject';


const Events = () => {
  const {language} = useContext(LegalisierungContext);
  const { t, i18n } = useTranslation();

  return(
    <main className="event">

        <h2 className="event__title title" id="event__upcoming__event__title">{languagesObject.[language].title__upcoming__events}</h2>
      <section className="dark-box event__box">
    {languagesObject.[language].upcoming_events}
      </section>
      <h2 className="event__title title" id="event__past__event__title">{languagesObject.[language].title__past__events}</h2>

      <section className="dark-box event__box">
    {languagesObject.[language].past_events}
      </section>

      <section className="dark-box event__box">
    {languagesObject.[language].events_foot}
      </section>

    </main>
  );
};

export default Events;
