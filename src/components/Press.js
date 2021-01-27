/* eslint-disable max-len */
import React from 'react';
import { useTranslation } from 'react-i18next';
import doc1 from '../pdf/1_Carta Abierta Legalisierung_Jetzt.pdf';
import doc2 from '../pdf/2_Open Letter Legalisierung_Jetzt.pdf';
import doc3 from '../pdf/3_Offener Brief Legalisierung_Jetzt.pdf';
import doc4 from '../pdf/4_Rechtliche Möglichkeiten auf Landesebene_Kurzversion.pdf';
import doc5 from '../pdf/5_Stellungnahme Medibuero.pdf';
import doc6 from '../pdf/6_Aktionen der Kampagne Legalisierung Jetzt.pdf';

const Press = () => {
  const { t } = useTranslation();
  return (
    <main className="materials">
      <section className="dark-box" id="press_info">
        <div className="links">
          <h3 className="press__title">{t('press_conference.documents')}</h3>
          <a href={doc1} rel="noreferrer" target="_blank">{'-> Open Letter English'}</a>
          <br />
          <a href={doc2} rel="noreferrer" target="_blank">{'-> Carta Abierta Español'}</a>
          <br />
          <a href={doc3} rel="noreferrer" target="_blank">{'-> Offener Brief Deutsch'}</a>
          <br />
          <a href={doc4} rel="noreferrer" target="_blank">{'-> Rechtliche Möglichkeiten auf Landesebene_Kurzversion'}</a>
          <br />
          <a href={doc5} rel="noreferrer" target="_blank">{'-> Stellungnahme Medibuero'}</a>
          <br />
          <a href={doc6} rel="noreferrer" target="_blank">{'-> Aktionen der Kampagne Legalisierung Jetzt'}</a>
          <br />

        </div>

      </section>

      <section className="dark-box">

        <div className="lettersToDownload">
          <h3>{t('press_conference.articles')}</h3>

          <ul className="press__list">
            <li>
              <a
                href="https://m.tagesspiegel.de/berlin/ich-bete-jeden-tag-dass-es-mich-nicht-erwischt-was-die-pandemie-fuer-undokumentierte-migranten-bedeutet/26642734.html"
              >
                Tagesspiegel was die pandemie fuer undokumentierte migranten bedeutet
              </a>
            </li>
            <li className="press__list-item">
              <a href="https://taz.de/Kampagne-Legalisierung-jetzt/!5719542/">
                taz, 12.10.2020: Kampagne „Legalisierung jetzt“: Bisher politisch meist unsichtbar
              </a>
            </li>
            <br />
            <li className="press__list-item">
              <a href="https://www.neues-deutschland.de/artikel/1143036.legalisierung-jetzt-raus-aus-der-unsichtbarkeit.html">
                Neues Deutschland, 12.10. 2020: Raus aus der Unsichtbarkeit. Zehntausende Migranten leben in Berlin ohne Dokumente und ohne Rechte
              </a>
            </li>
            <br />
            <li className="press__list-item">
              <a href="https://www.jungewelt.de/loginFailed.php?ref=/artikel/388462.menschen-die-selbst-prek%C3%A4r-leben-unterst%C3%BCtzen-andere.html">
                Junge welt, 16.10 2020: »Menschen, die selbst prekär leben, unterstützen andere«.Coronakrise verschärft die Lage von Menschen, die ohne legalen Aufenthaltsstatus in der BRD sind. Ein Gespräch mit Llanquiray Painemal
              </a>
            </li>
            <li className="press__list-item">
              <a href="https://www1.wdr.de/radio/cosmo/programm/sendungen/estacionsur/deutschland/-wdr-legalisierung-jetzt-campana-102.html">
                WDR, estacíon sur, 13.10.2020: Campaña “Legalisierung Jetzt!” Por un país sin invisibles
              </a>
            </li>
            <br />
            <li>
              <a href="https://radiocorax.de/legalisierung-jetzt-gespraech-zur-kampagne-mit-respect-berlin/">#Legalisierung Jetzt! Gespräch zur Kampagne mit Respect Berlin, Radio Coray, 24.11.2020</a>
            </li>
          </ul>

        </div>

      </section>

    </main>
  );
};
export default Press;
