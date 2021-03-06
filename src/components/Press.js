/* eslint-disable max-len */
import React from 'react';
import { useTranslation } from 'react-i18next';

const Press = () => {
  const { t } = useTranslation();
  return (
    <main className="materials">
      <section className="dark-box">
        <div className="lettersToDownload">
          <h3>{t('press_conference.articles')}</h3>
          <ul className="press__list">
            <li>
              <a href="https://www.bluewin.ch/de/news/schweiz/was-sich-fuer-sans-papier-nach-einem-jahr-pandemie-veraendert-hat-596672.html?fbclid=IwAR2V_hAlllFxjjdlfcBuPYO3uP8MqDQQ0HlG372MYYcWTZfRjIFna3RFeEE">
                blueNews, 1.03.2021: Das Risiko der Ausbeutung steigt.Mangelnde Gesundheitsversorgung, prekäres Leben, Angst vor Ausschaffung.
              </a>
            </li>
            <br />
            <li>
              <a href="https://www.neues-deutschland.de/artikel/1148684.illegalisierte-lernen-nur-mit-pass.html">
                Neues Deutschland, 23.2. 2021: Lernen nur mit Pass. Kinder ohne Papiere sind vom Schulbesuch oft ausgeschlossen.
              </a>
            </li>
            <br />
            <li>
              <a href="https://taz.de/Einschulung-fuer-Kinder-ohne-Papiere/!5754041/?fbclid=IwAR3RZeKGv81wl3Y0EtTuyeD-2BwcmNOO6FjAk1SjMI02D7wktJV_E0g0co4">
                Taz, 25.02.2021: Von wegen Recht auf Bildung.Einschulung für Kinder ohne Papiere.
              </a>
            </li>
            <br />
            <li>
              <a href="https://taz.de/!5750664/">
                taz, 26.2.2021: Schule bleibt ein Wunsch.
              </a>
            </li>
            <br />
            <li>
              <a href="https://jungle.world/artikel/2021/05/es-stimmt-nicht-dass-nichts-getan-werden-kann">
                Jungle World, 04.02.2021: Small Talk mit Amarilis Tapia über die Kampagne »Legalisierung jetzt«. »Es stimmt nicht, dass nichts getan werden kann
              </a>
            </li>
            <br />
            <li>
              <a href="https://www.neues-deutschland.de/artikel/1147592.menschen-ohne-aufenthaltsgenehmigung-keine-gesundheit-ohne-papiere.html?sstr=Menschen%20ohne%20Aufenthaltsgenehmigung">
                Neues Deutschland, 28.1.2021: Keine Gesundheit ohne Papiere.Illegalisierte Menschen können sich kaum vor dem Coronavirus schützen
              </a>
            </li>
            <br />
            <li>
              <a href="https://taz.de/Illegalisierte-Menschen-in-der-Pandemie/!5743518/">taz, 28.1.2021: Illegalisierte Menschen in der Pandemie: Impfung und Legalisierung gefordert</a>
            </li>
            <br />
            <li>
              <a href="https://jungle.world/artikel/2020/43/nicht-auf-dem-papier">
                Jungle World, 22.10.2020: Nicht auf dem Papier. Die Kampagne »Legalisierung jetzt!« fordert mehr Rechte für Menschen ohne Papiere
              </a>
            </li>
            <br />
            <li>
              <a href="https://m.tagesspiegel.de/berlin/ich-bete-jeden-tag-dass-es-mich-nicht-erwischt-was-die-pandemie-fuer-undokumentierte-migranten-bedeutet/26642734.html">
                Tagesspiegel was die pandemie fuer undokumentierte migranten bedeutet
              </a>
            </li>
            <br />
            <li className="press__list-item">
              <a href="https://taz.de/Kampagne-Legalisierung-jetzt/!5719542/">Taz, 12.10.2020: Kampagne „Legalisierung jetzt“: Bisher politisch meist unsichtbar</a>
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
                Junge welt, 16.10 2020: »Menschen, die selbst prekär leben, unterstützen andere«.Coronakrise verschärft die Lage von Menschen, die ohne legalen Aufenthaltsstatus in der BRD sind. Ein
                Gespräch mit Llanquiray Painemal
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="dark-box" id="press_info">
        <div className="links">
          <h3>Audios</h3>
          <ul>
            <li className="press__list-item">
              <a href="https://www1.wdr.de/radio/cosmo/programm/sendungen/estacionsur/deutschland/-wdr-legalisierung-jetzt-campana-102.html">
                WDR, Estación Sur, 13.10.2020: Campaña “Legalisierung Jetzt!” Por un país sin invisibles
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

