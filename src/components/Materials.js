/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { useTranslation } from 'react-i18next';
import img2 from '../img/Perreo Combativo/Perreo comabativo-hbf.jpg';
import img3 from '../img/Perreo Combativo/Perreo comabativo-hbf2.jpg';
import img4 from '../img/Perreo Combativo/Washingtonplatz_Coreo.jpg';
import img5 from '../img/Perreo Combativo/Washingtonplatz_Schilder.jpg';
import img6 from '../img/december_action/Alexanderplatz.jpg';
import img7 from '../img/december_action/Alexanderplatz_1.jpg';
import img8 from '../img/december_action/Alexanderplatz_2.jpg';
import vid1 from '../video/december_action/dec-action.mp4';

const Materials = () => {
  const { t } = useTranslation();

  return (
    <main className="materials">
      <section className="dark-box" id="monthly_actions">
        <h2 className="materials__title title" id="materials__title">
          {t('events.past.januar')}
        </h2>
        <div className="video">
          <a href="https://fb.watch/3nJznEXf4G/">Link</a>
        </div>
      </section>
      <section className="dark-box" id="monthly-actions">
        <h2 className="materials__title title" id="materials__title">
          {t('events.past.diciembre')}
        </h2>
        <div className="material">
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
        </div>

        <div className="video">
          <video id="december-video" width="640" height="480" controls>
            <source src={vid1} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="dark-box" id="monthly-actions">
        <h2 className="materials__title title" id="materials__title">
          {t('events.past.noviembre')}
        </h2>
        <div className="material">
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
      </section>

      <section className="dark-box" id="monthly_actions">
        <h2 className="materials__title title" id="materials__title">
          {t('events.past.octubre')}
        </h2>
        <div className="video">
          <iframe
            width="560"
            height="349"
            src="https://www.youtube.com/embed/q4HM1sDtz6I"
            title="Presskonferenz"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
};

export default Materials;
