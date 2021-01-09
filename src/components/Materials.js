import React, {useContext} from 'react';
import {LegalisierungContext} from '../context/LegalisierungContext';
import languagesObject from '../languagesObject';
import pdfDe from '../pdf/Offener Brief Legalisierung_Jetzt.pdf';
import pdfEn from '../pdf/Open Letter Legalisierung_Jetzt.pdf';
import pdfEs from '../pdf/Carta Abierta Legalisierung_Jetzt.pdf';
import img2 from '../img/Perreo Combativo/Perreo comabativo-hbf.jpg'
import img3 from '../img/Perreo Combativo/Perreo comabativo-hbf2.jpg'
import img4 from '../img/Perreo Combativo/Washingtonplatz_Coreo.jpg'
import img5 from '../img/Perreo Combativo/Washingtonplatz_Schilder.jpg'


const Materials = () => {
  const {language} = useContext(LegalisierungContext);

  return (
    <main className="materials">
      <h2 className="materials__title title" id="materials__title">{languagesObject.[language].nav.nav__materials}</h2>
    <section className="dark-box">
      <div className="material">
        <h3>Gallery</h3>
        <img src={img2} alt=""/>
        <img src={img3} alt=""/>
        <img src={img4} alt=""/>
        <img src={img5} alt=""/>

      <h3>12.10.2020, 11h Aquarium Berlin Presskonferenz</h3>
<iframe  src="https://www.youtube.com/embed/q4HM1sDtz6I" title= "Presskonferenz" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="lettersToDownload">
        <h3>Brief in anderen Sprachen herunterladen</h3>
        <a href={pdfEn} rel="noreferrer" target="_blank"> -> English </a><br/>
        <a href={pdfEs} rel="noreferrer" target="_blank"> -> Espanol </a><br/>
        <a href={pdfDe} rel="noreferrer" target="_blank"> -> Deutsch </a><br/>
      </div>
      <div className="links">
        <h3 className="press__title">Press</h3>
        <ul className="press__list">
          <li>
          <a href="https://m.tagesspiegel.de/berlin/ich-bete-jeden-tag-dass-es-mich-nicht-erwischt-was-die-pandemie-fuer-undokumentierte-migranten-bedeutet/26642734.html">Tagesspiegel was die pandemie fuer undokumentierte migranten bedeutet</a></li>
          <li className="press__list-item">
            <a href="https://taz.de/Kampagne-Legalisierung-jetzt/!5719542/">
            taz, 12.10.2020: Kampagne „Legalisierung jetzt“: Bisher politisch meist unsichtbar
          </a>
         </li>
          <li className="press__list-item">
            <a href="https://www.neues-deutschland.de/artikel/1143036.legalisierung-jetzt-raus-aus-der-unsichtbarkeit.html">
      Neues Deutschland, 12.10. 2020: Raus aus der Unsichtbarkeit. Zehntausende Migranten leben in Berlin ohne Dokumente und ohne Rechte
              </a>
          </li>
          <li className="press__list-item">
            <a href="https://www.jungewelt.de/loginFailed.php?ref=/artikel/388462.menschen-die-selbst-prek%C3%A4r-leben-unterst%C3%BCtzen-andere.html">
    junge welt, 16.10 2020: »Menschen, die selbst prekär leben, unterstützen andere«.Coronakrise verschärft die Lage von Menschen, die ohne legalen Aufenthaltsstatus in der BRD sind. Ein Gespräch mit Llanquiray Painemal
            </a>
          </li>
          <li className="press__list-item">
            <a href="https://www1.wdr.de/radio/cosmo/programm/sendungen/estacionsur/deutschland/-wdr-legalisierung-jetzt-campana-102.html">
  WDR, estacíon sur, 13.10.2020: Campaña “Legalisierung Jetzt!” Por un país sin invisibles
  </a>
  </li>
  <li>
    <a href="https://radiocorax.de/legalisierung-jetzt-gespraech-zur-kampagne-mit-respect-berlin/">#Legalisierung Jetzt! Gespräch zur Kampagne mit Respect Berlin, Radio Coray, 24.11.2020</a>
  </li>
        </ul>
      </div>

    </section>



    </main>);
};

export default Materials;
