import { useTranslation } from 'react-i18next';
import React from 'react';

const Events = () => {
  const { t } = useTranslation();
  return (
    <main className="event">

      <h2 className="event__title title">{t('events.title_upcoming_events')}</h2>
      <ul className="dark-box event__box">
        <li>
          {' '}
          {t('events.upcoming.enero')}
        </li>
        <li>
          {' '}
          {t('events.upcoming.febrero')}
        </li>
      </ul>
      <h2 className="event__title title">{t('events.title_past_events')}</h2>
      <ul className="dark-box event__box">
        <li>
          {' '}
          {t('events.past.diciembre')}
        </li>
        <li>
          {' '}
          {t('events.past.noviembre')}
        </li>
        <li>
          {' '}
          {t('events.past.octubre')}
        </li>
      </ul>

      <section className="dark-box event__box">
        <h2 className="event__title title">{t('events.events_foot')}</h2>
      </section>

    </main>
  );
};

export default Events;
