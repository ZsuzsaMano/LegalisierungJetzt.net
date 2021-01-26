import React from 'react';
import { useTranslation} from 'react-i18next';
//import Twitter from '../img/twitter.svg';
//import Facebook from '../img/facebook.svg';

const Footer = () => {
  const { t } = useTranslation();
  return (
<footer>
<div className="footer__social">
    <a href="legalisierung_jetzt@riseup.net" target="_blank">Email</a>
    <a href="https://www.facebook.com/legalisierungjetzt/" rel="noreferrer" target="_blank">Facebook</a>

    <a href="https://twitter.com/legaljetzt" rel="noreferrer" target="_blank">Twitter</a>
    <a href="https://www.instagram.com/legalisierung_jetzt/" rel="noreferrer" target="_blank">Instagram</a>
</div>

<p className="footer__spende title">{t('bank_acount.title')}</p>
<p className="footer__spende body ">{t('bank_acount.details')}</p>
<p className="footer__spende body ">{t('bank_acount.note')}</p>

</footer>

  );
}

export default Footer;
