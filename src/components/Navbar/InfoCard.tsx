import React from "react";

interface InfoCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  text,
}) => {
  return (
    <div className="infocard">
      <header className="infocard__header">
        <div className="infocard__image-container">
          <img className="infocard__image" src={imageSrc} alt={imageAlt} />
        </div>
      </header>
      <main className="infocard__content">
        <h3 className="infocard__title">{title}</h3>
        <p className="infocard__text">{text}</p>
      </main>
    </div>
  );
};

export default InfoCard;
