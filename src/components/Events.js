import React from 'react';
import languagesObject from '../languagesObject';

const Events = ({language}) => {
  return(
    <main className="event">

        <h2 className="event__title title" id="event__title">{languagesObject.[language].nav.nav__events}</h2>
      <section className="dark-box">
        <p>12.10.2020, 11h Aquarium Berlin Presskonferenz</p>
      </section>

    </main>
  );
};

export default Events;
