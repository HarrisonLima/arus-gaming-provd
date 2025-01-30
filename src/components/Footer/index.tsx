import React from 'react';
import { useTranslation } from 'react-i18next';
import crown from "../../assets/crown.svg";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__container">
          <h3 className="footer__title">{t('footer.navigation')}</h3>
          <ul>
            <li><a href="#">{t('footer.presentation')}</a></li>
            <li><a href="#">{t('footer.howToPlay')}</a></li>
            <li><a href="#">{t('footer.responsibleGaming')}</a></li>
            <li><a href="#">{t('footer.demoPlay')}</a></li>
            <li><a href="#">{t('footer.contactUs')}</a></li>
          </ul>
        </div>
        <div className="footer__container">
          <h3 className="footer__title">{t('footer.contact')}</h3>
          <ul>
            <li><a href="#">{t('footer.arusSoft')}</a></li>
            <li><a href="#">{t('footer.linkedin')}</a></li>
            <li><a href="#">{t('footer.whatsapp')}</a></li>
          </ul>
        </div>
        <div className="footer__container">
          <h3 className="footer__title">{t('footer.arusGaming')}</h3>
          <ul>
            <li><a href="#">{t('footer.aboutUs')}</a></li>
            <li><a href="#">{t('footer.termsOfUse')}</a></li>
            <li><a href="#">{t('footer.privacyPolicy')}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__rodape">
        <img src={crown} alt="Crown Icon" />
        <span>{t('footer.copyright')}</span>
      </div>
    </footer>
  );
};

export default Footer;