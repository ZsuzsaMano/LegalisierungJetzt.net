import { useTranslation} from 'react-i18next';
import React from 'react';

const Letter = () => {
  const { t } = useTranslation();

  return(
    <main className="letter">
      <article className="letter__article">
        <h2 className="letter__title title" id="title">{t('title')}</h2>
        <p className="letter__text dark-box" id='letter__text'>{t('letter')}</p>
      </article>
      <div className="signatories">
        <h3 id="signatories">{t('signatories.title')}</h3>
        <p>{t('signatories.orgs')}</p>
        </div>
    </main>
  );
};

export default Letter;
