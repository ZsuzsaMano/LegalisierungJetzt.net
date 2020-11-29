import React from 'react';
import languagesObject from '../languagesObject';

const Events = ({language}) => {
  return(
    <main className="event">

        <h2 className="event__title title" id="event__title">{languagesObject.[language].nav.nav__events}</h2>
      <section className="dark-box">
      <ul>
        <li>Weitere Termine folgen in Kürze!</li>
        <li>21.11.2020: Perreo Combativo - kämpferischer Tanz für die Sichtbarkeit und Legalisierung von Menschen ohne Papiere. </li>
        <li>12.10.2020: Pressekonferenz - Auftakt der Kampagne "Legalisierung Jetzt"</li>
      </ul>
      </section>

    </main>
  );
};

export default Events;
