import DiceBanner from "../../components/Banners/DiceBanner";
import GameCard from "../../components/GameCard";
import Navbar from "../../components/Navbar";
import GameCardSection from "../../components/GameSectionCard";

//Our games
import bullseye_arrow from "../../assets/bullseye-arrow.svg";
import menu_book from "../../assets/menu_book.svg";
import medal from "../../assets/medal.svg";

//Responsible Gaming
import clock_time_four_outline from "../../assets/clock-time-four-outline.svg";
import exclusion from "../../assets/exclusion.svg";
import credit_card from "../../assets/credit_card.svg";
import heart_flash from "../../assets/heart-flash.svg";

const Home = () => {
  return (
    <>
      <Navbar />
      <DiceBanner />

      
      <GameCardSection title="Nossos Jogos" >
        <GameCard imageSrc={bullseye_arrow} imageAlt={"Experimente os Jogos"} title={"Experimente nossos Jogos"} text={"Experimente nosso modo de demonstração para se sentir confortável com os jogos antes de jogar com apostas reais."} />
        <GameCard imageSrc={menu_book} imageAlt={"Leia as regras"} title={"Leia as regras"} text={"Cada jogo vem com regras abrangentes e guias de estratégia. Comece com nossos tutoriais para iniciantes para dominar o básico."} />
        <GameCard imageSrc={medal} imageAlt={"Participe de torneios"} title={"Participe de torneios"} text={"Quando estiver confiante, participe de torneios para competir com outros jogadores e ganhar prêmios incríveis."} />
      </GameCardSection>
      
      <GameCardSection title="Jogo responsável" text="Estamos comprometidos em fornecer um ambiente de jogo seguro e responsável. Use essas ferramentas para manter o controle sobre sua experiência de jogo.">
        <GameCard imageSrc={clock_time_four_outline} imageAlt={"Limites de tempo"} title={"Limites de tempo"} text={"Defina limites de tempo diários, semanais ou mensais para suas sessões de jogo."} />
        <GameCard imageSrc={exclusion} imageAlt={"Auto exclusão"} title={"Auto exclusão"} text={"Faça uma pausa nos jogos com nossas opções de autoexclusão."} />
        <GameCard imageSrc={credit_card} imageAlt={"Limites de Depósito"} title={"Limites de Depósito"} text={"Controle seus gastos definindo limites de depósito."} />
        <GameCard imageSrc={heart_flash} imageAlt={"Suporte"} title={"Suporte"} text={"Suporte e recursos 24 horas por dia, 7 dias por semana, para jogo responsável."} />
      </GameCardSection>
    </>
  );
};

export default Home;
