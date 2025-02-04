import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import game from "../../assets/icon-logo.svg";
import language from "../../assets/icon-language.svg";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={game} alt="Arus Gaming Logo" />
        <h2 className="heading--tertiary heading--tertiary--gradient">
          Arus Gaming
        </h2>
      </div>

      {/* Menu Hambúrguer */}
      <div className="navbar__hamburger" onClick={toggleMenu}>
        <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
        <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
        <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
      </div>

      {/* Menu de Opções */}
      <ul className={`navbar__options ${isMenuOpen ? 'open' : ''}`}>
        <li className="navbar__options__option">{t('featuredGames')}</li>
        <li className="navbar__options__option">{t('howToPlay')}</li>
        <li className="navbar__options__option">{t('responsibleGaming')}</li>
        <li className="navbar__options__option">{t('contactUs')}</li>
        {/* Seletor de Idioma no Mobile */}
        <li className="navbar__options__option navbar__language-mobile">
          <img src={language} alt="Language Icon" />
          <select
            name="Language"
            id="language"
            className="select"
            onChange={handleLanguageChange}
            value={i18n.language}
          >
            <option className="text text--blue" value="es">
              Español
            </option>
            <option className="text text--blue" value="en">
              English
            </option>
            <option className="text text--blue" value="pt">
              Português
            </option>
          </select>
        </li>
      </ul>

      {/* Seletor de Idioma no Desktop */}
      <div className="navbar__language">
        <img src={language} alt="Language Icon" />
        <select
          name="Language"
          id="language"
          className="select"
          onChange={handleLanguageChange}
          value={i18n.language}
        >
          <option className="text text--blue" value="es">
            Español
          </option>
          <option className="text text--blue" value="en">
            English
          </option>
          <option className="text text--blue" value="pt">
            Português
          </option>
        </select>
      </div>
    </header>
  );
};

export default Navbar;