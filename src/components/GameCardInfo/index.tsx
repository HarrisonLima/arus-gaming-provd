import React from "react";
import exclamation from "../../assets/exclamation.svg";
import { useTranslation } from 'react-i18next';

interface GameCardInfo {
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
  difficultyLevel: string;
}

const GameCardInfo: React.FC<GameCardInfo> = ({
  imageSrc,
  imageAlt,
  title,
  text,
  difficultyLevel,
}) => {
  const { t } = useTranslation();

  return (
    <div className="game-card-info">
      <header className="game-card__header">
        <div className="game-card__image-container">
          <img className="game-card__image" src={imageSrc} alt={imageAlt} />
          <h3 className="game-card__title">{title}</h3> {/* Título ao lado da imagem */}
        </div>
        <span className={`game-card-info__difficultyLevel --${difficultyLevel.toLowerCase()}`}>
          {difficultyLevel}
        </span>
      </header>
      <main className="game-card-info__content">
        <p className="game-card__text">{text}</p>
        <div className="game-card-info__how-to-play">
          <img src={exclamation} alt={exclamation} />
          <span>{t('howToPlay')}</span>
        </div>
      </main>
    </div>
  );
};

export default GameCardInfo;