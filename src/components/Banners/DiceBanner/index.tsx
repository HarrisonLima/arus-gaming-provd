import dice from "../../../assets/image-dados-banner-principal.png";
import security from "../../../assets/icon-security.svg";
import thumbUp from "../../../assets/icon-thumb_up.svg";

const DiceBanner = () => {
  return (
    <section className="dice-banner">
      <div className="dice-banner__info">
        <div className="dice-banner__typography">
          <div className="dice-banner__typography__title">
            <h1 className="heading--primary">Experimente a emoção!</h1>
            <h2 className="heading--secondary heading--secondary--gradient">
              Jogos incríveis
            </h2>
          </div>
          <p className="text text--gray">
            Junte-se à nossa comunidade de jogadores em um ambiente seguro e
            divertido. Jogue com responsabilidade e aproveite nossa seleção de
            jogos premium.
          </p>
        </div>
        <div className="dice-banner__buttons">
          <button className="button button--primary">Jogar Agora</button>
          <button className="button button--secondary">Saiba mais</button>
        </div>
        <div className="dice-banner__tags">
          <div className="dice-banner__tags__tag">
            <img src={security} />
            <p className="text text--gray">Jogo seguro</p>
          </div>
          <div className="dice-banner__tags__tag">
            <img src={thumbUp} />
            <p className="text text--gray">Jogo justo</p>
          </div>
        </div>
      </div>
      <div className="dice-banner__image">
        <img src={dice} />
      </div>
    </section>
  );
};

export default DiceBanner;
