import React, { useState, ReactNode } from "react";

interface GameCardInfoSectionProps {
  title: string;
  children: ReactNode;
}

const GameCardInfoSection: React.FC<GameCardInfoSectionProps> = ({ title, children }) => {
  const [showAll, setShowAll] = useState(false);

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
        {showAll ? "Mostrar menos jogos" : "Explorar mais jogos"}
      </button>
    </section>
  );
};

export default GameCardInfoSection;