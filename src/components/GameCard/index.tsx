import React from "react";

interface GameCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
}

const GameCard: React.FC<GameCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  text,
}) => {
  return (
    <div className="game-card">
      <header className="game-card__header">
        <div className="game-card__image-container">
          <img className="game-card__image" src={imageSrc} alt={imageAlt} />
        </div>
      </header>
      <main className="game-card__content">
        <h3 className="game-card__title">{title}</h3>
        <p className="game-card__text">{text}</p>
      </main>
    </div>
  );
};

export default GameCard;