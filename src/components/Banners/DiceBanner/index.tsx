import dice from "../../../assets/image-dados-banner-principal.png";
import security from "../../../assets/icon-security.svg";
import thumbUp from "../../../assets/icon-thumb_up.svg";
import { useTranslation } from 'react-i18next';

const DiceBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="dice-banner">
      <div className="dice-banner__info">
        <div className="dice-banner__typography">
          <div className="dice-banner__typography__title">
            <h1 className="heading--primary">{t('diceBanner.title')}</h1>
            <h2 className="heading--secondary heading--secondary--gradient">
              {t('diceBanner.subtitle')}
            </h2>
          </div>
          <p className="text text--gray">
            {t('diceBanner.description')}
          </p>
        </div>
        <div className="dice-banner__buttons">
          <button className="button button--primary">{t('diceBanner.playNow')}</button>
          <button className="button button--secondary">{t('diceBanner.learnMore')}</button>
        </div>
        <div className="dice-banner__tags">
          <div className="dice-banner__tags__tag">
            <img src={security} alt="Security Icon" />
            <p className="text text--gray">{t('diceBanner.safeGaming')}</p>
          </div>
          <div className="dice-banner__tags__tag">
            <img src={thumbUp} alt="Thumb Up Icon" />
            <p className="text text--gray">{t('diceBanner.safeGaming')}</p>
          </div>
        </div>
      </div>
      <div className="dice-banner__image">
        <img src={dice} alt="Dice Banner" />
      </div>
    </section>
  );
};

export default DiceBanner;