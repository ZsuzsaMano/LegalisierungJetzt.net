import React from 'react';
import { useTranslation} from 'react-i18next';

const Press = () => {
	const { t } = useTranslation();
	return(


	<section className="dark-box event__box">
    <h2 className="event__title title">{t('press_conference')}</h2>
      </section>

	);
};
export default Press;
