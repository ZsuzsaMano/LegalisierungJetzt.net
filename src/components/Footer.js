import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Instagram, Facebook, Twitter, Email,
} from '@material-ui/icons';
import {
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  icon: theme.icon,
}));

const Footer = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <footer>
      <div className="footer__social">
        <a href="mailto:legalisierung_jetzt@riseup.net" target="_blank" rel="noreferrer" aria-label="Email">
          <Email className={classes.icon} />
        </a>
        <a href="https://www.facebook.com/legalisierungjetzt/" rel="noreferrer" aria-label="Facebook" target="_blank">
          <Facebook className={classes.icon} />
        </a>
        <a href="https://twitter.com/legaljetzt" rel="noreferrer" target="_blank" aria-label="Twitter">
          <Twitter className={classes.icon} />
        </a>
        <a href="https://www.instagram.com/legalisierung_jetzt/" rel="noreferrer" target="_blank" aria-label="Instagram">
          <Instagram className={classes.icon} />
        </a>
      </div>
      <p> legalisierung_jetzt@riseup.net</p>
      <p className="footer__spende title ">{t('bank_acount.title')}</p>
      <p className="footer__spende ">{t('bank_acount.details')}</p>
      <p className="footer__spende ">{t('bank_acount.note')}</p>
    </footer>
  );
};

export default Footer;
