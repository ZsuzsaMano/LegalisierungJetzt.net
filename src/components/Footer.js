import React from 'react';
// import Twitter from '../img/twitter.svg';
// import Facebook from '../img/facebook.svg';

const Footer = () => (
  <footer>
    <div className="footer__social">
      <a href="legalisierung_jetzt@riseup.net" target="_blank">Email</a>
      <a href="https://www.facebook.com/legalisierungjetzt/" rel="noreferrer" target="_blank">Facebook</a>

      <a href="https://twitter.com/legaljetzt" rel="noreferrer" target="_blank">Twitter</a>
      <a href="https://www.instagram.com/legalisierung_jetzt/" rel="noreferrer" target="_blank">Instagram</a>
    </div>
    <div className="footer__spende">
      <p>
        Spendenkonto
        {' '}
        <br />
        Respect Berlin
        {' '}
        <br />
        DE34 8306 5408 0004 9035 60
        {' '}
        <br />
        BIC GENO DEF1 SLR
        {' '}
        <br />
        Deutsche Skatbank
        {' '}
        <br />
        Verwendungszweck: Legalisierungjetzt
        {' '}
        <br />
        <br />

        Spenden sind leider nicht steuerlich absetzbar. Sie fließen in die Umsetzung der Kampagne für Legalisierung 2020/21.
      </p>
    </div>
  </footer>

);

export default Footer;
