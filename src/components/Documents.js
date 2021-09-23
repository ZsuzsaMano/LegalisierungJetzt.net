/* eslint-disable max-len */
import React from 'react';
import { useTranslation } from 'react-i18next';
import doc0 from '../pdf/28_1_21_LegalisierungJetzt_PresseKonferenz.pdf';
import doc2 from '../pdf/1_Carta Abierta Legalisierung_Jetzt.pdf';
import doc1 from '../pdf/2_Open Letter Legalisierung_Jetzt.pdf';
import doc3 from '../pdf/3_Offener Brief Legalisierung_Jetzt.pdf';
import doc4 from '../pdf/4_Rechtliche_Moglichkeiten_auf_Landesebene_Kurzversion.pdf';
import doc5 from '../pdf/5_Stellungnahme Medibuero.pdf';
import doc6 from '../pdf/6_Aktionen der Kampagne Legalisierung Jetzt.pdf';
import doc9 from '../pdf/9_Offener_Brief_Legalisierung_Jetzt_Kandidatinnen_AGH.pdf';
import doc10 from '../pdf/10_PM_Vor den Wahlen und nach den Wahlen.pdf';

const Documents = () => {
  const { t } = useTranslation();
  return (
    <main className="materials">
      <section className="dark-box" id="press_info">
        <div className="links">
          <h3 className="press__title">{t('press_conference.documents')}</h3>
          <a href={doc9} rel="noreferrer" target="_blank">
            {'-> Open letter to German Candidates (EN/DE/ES)'}
          </a>
          <br />
          <a href={doc10} rel="noreferrer" target="_blank">
            {'-> Vor den Wahlen und nach den Wahlen. Legalisierung Jetzt! (EN/DE/ES)'}
          </a>
          <br />
          <a href={doc0} rel="noreferrer" target="_blank">
            {'-> Invitation to the press conference'}
          </a>
          <br />
          <a href={doc1} rel="noreferrer" target="_blank">
            {'-> Open Letter English'}
          </a>
          <br />
          <a href={doc2} rel="noreferrer" target="_blank">
            {'-> Carta Abierta Español'}
          </a>
          <br />
          <a href={doc3} rel="noreferrer" target="_blank">
            {'-> Offener Brief Deutsch'}
          </a>
          <br />
          <a href={doc4} rel="noreferrer" target="_blank">
            {'-> Rechtliche Möglichkeiten auf Landesebene'}
          </a>
          <br />
          <a href={doc5} rel="noreferrer" target="_blank">
            {'-> Stellungnahme Medibuero'}
          </a>
          <br />
          <a href={doc6} rel="noreferrer" target="_blank">
            {'-> Aktionen der Kampagne Legalisierung Jetzt'}
          </a>
          <br />
        </div>
      </section>
    </main>
  );
};
export default Documents;
