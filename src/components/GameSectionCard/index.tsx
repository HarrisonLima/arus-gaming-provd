import React from "react";

interface GameCardSectionProps {
  title?: string;
  text?: string;
  id: string;
  children: React.ReactNode;
}

const GameCardSection: React.FC<GameCardSectionProps> = ({
  title,
  text,
  id,
  children,
}) => {
  return (
    <section id={id} className="game-card-section">
      {title && <h2 className="game-card-section__title">{title}</h2>}
      {text && <p className="game-card-section__text">{text}</p>}
      <div className="game-card-section__cards">{children}</div>
    </section>
  );
};

export default GameCardSection;
