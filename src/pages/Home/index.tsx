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
import poker from "../../assets/poker.png";
import GameCardInfo from "../../components/GameCardInfo";
import GameCardInfoSection from "../../components/GameCardInfoSection";

const cards = [
  {
    imageSrc: "image1.jpg",
    imageAlt: "Image 1",
    title: "Game 1",
    text: "Description for Game 1",
    difficultyLevel: "Easy",
  },
  {
    imageSrc: "image2.jpg",
    imageAlt: "Image 2",
    title: "Game 2",
    text: "Description for Game 2",
    difficultyLevel: "Medium",
  },
  {
    imageSrc: "image3.jpg",
    imageAlt: "Image 3",
    title: "Game 3",
    text: "Description for Game 3",
    difficultyLevel: "Hard",
  },
  {
    imageSrc: "image4.jpg",
    imageAlt: "Image 4",
    title: "Game 4",
    text: "Description for Game 4",
    difficultyLevel: "Easy",
  },
  // Adicione mais cards conforme necessário
];
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
        <GameCard imageSrc={clock_time_four_outline} imageAlt={"Limites de tempo"} title={"Limites de tempo"} text={"Faça pausas regulares para manter o controle e a diversão."} />
        <GameCard imageSrc={exclusion} imageAlt={"Auto exclusão"} title={"Auto exclusão"} text={"Se sentir que precisa de uma pausa, lembre-se de que é importante jogar com moderação e buscar equilíbrio."} />
        <GameCard imageSrc={credit_card} imageAlt={"Limites de Depósito"} title={"Limites de Depósito"} text={"Jogue com responsabilidade: defina seus limites e respeite-os."} />
        <GameCard imageSrc={heart_flash} imageAlt={"Suporte"} title={"Suporte"} text={"Se sentir que está perdendo o controle, procure ajuda imediatamente."} />
      </GameCardSection>

      <GameCardInfoSection title="Experimente a emoção">
        <GameCardInfo difficultyLevel="Hard" imageSrc={poker} imageAlt="Poker Clássico" title="Poker Clássico" text="Teste suas habilidades no Texas Hold'em contra jogadores de todo o mundo." />
        <GameCardInfo difficultyLevel="Easy" imageSrc={poker} imageAlt="Poker Clássico" title="Poker Clássico" text="Teste suas habilidades no Texas Hold'em contra jogadores de todo o mundo." />
        <GameCardInfo difficultyLevel="Medium" imageSrc={poker} imageAlt="Poker Clássico" title="Poker Clássico" text="Teste suas habilidades no Texas Hold'em contra jogadores de todo o mundo." />
        <GameCardInfo difficultyLevel="Hard" imageSrc={poker} imageAlt="Poker Clássico" title="Poker Clássico" text="Teste suas habilidades no Texas Hold'em contra jogadores de todo o mundo." />
        <GameCardInfo difficultyLevel="Hard" imageSrc={poker} imageAlt="Poker Clássico" title="Poker Clássico" text="Teste suas habilidades no Texas Hold'em contra jogadores de todo o mundo." />
        <GameCardInfo difficultyLevel="Easy" imageSrc={poker} imageAlt="Poker Clássico" title="Poker Clássico" text="Teste suas habilidades no Texas Hold'em contra jogadores de todo o mundo." />
        <GameCardInfo difficultyLevel="Medium" imageSrc={poker} imageAlt="Poker Clássico" title="Poker Clássico" text="Teste suas habilidades no Texas Hold'em contra jogadores de todo o mundo." />
        <GameCardInfo difficultyLevel="Hard" imageSrc={poker} imageAlt="Poker Clássico" title="Poker Clássico" text="Teste suas habilidades no Texas Hold'em contra jogadores de todo o mundo." />
        <GameCardInfo difficultyLevel="Hard" imageSrc={poker} imageAlt="Poker Clássico" title="Poker Clássico" text="Teste suas habilidades no Texas Hold'em contra jogadores de todo o mundo." />
        <GameCardInfo difficultyLevel="Easy" imageSrc={poker} imageAlt="Poker Clássico" title="Poker Clássico" text="Teste suas habilidades no Texas Hold'em contra jogadores de todo o mundo." />
        <GameCardInfo difficultyLevel="Medium" imageSrc={poker} imageAlt="Poker Clássico" title="Poker Clássico" text="Teste suas habilidades no Texas Hold'em contra jogadores de todo o mundo." />
        <GameCardInfo difficultyLevel="Hard" imageSrc={poker} imageAlt="Poker Clássico" title="Poker Clássico" text="Teste suas habilidades no Texas Hold'em contra jogadores de todo o mundo." />
      </GameCardInfoSection>
    </>
  );
};

export default Home;
