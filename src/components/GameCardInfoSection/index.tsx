import React, { useState, ReactNode } from "react";
import { useTranslation } from 'react-i18next';

interface GameCardInfoSectionProps {
  title: string;
  children: ReactNode;
}

const GameCardInfoSection: React.FC<GameCardInfoSectionProps> = ({ title, children }) => {
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();

  const childrenArray = React.Children.toArray(children);
  const displayedChildren = showAll ? childrenArray : childrenArray.slice(0, 3);

  return (
    <section className="game-card-info-section">
      <h2 className="game-card-info-section__title">{title}</h2>
      <div className="game-card-info-section__cards">
        {displayedChildren}
      </div>
      <button
        className="game-card-info-section__button"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? t('gameCardInfoSection.showLess') : t('gameCardInfoSection.exploreMore')}
      </button>
    </section>
  );
};

export default GameCardInfoSection;