import { useEffect, useState } from 'react';
import DiceBanner from "../../components/Banners/DiceBanner";
import GameCard from "../../components/GameCard";
import Navbar from "../../components/Navbar";
import GameCardSection from "../../components/GameSectionCard";




// Our games
import bullseye_arrow from "../../assets/bullseye-arrow.svg";
import menu_book from "../../assets/menu_book.svg";
import medal from "../../assets/medal.svg";

// Responsible Gaming
import clock_time_four_outline from "../../assets/clock-time-four-outline.svg";
import exclusion from "../../assets/exclusion.svg";
import credit_card from "../../assets/credit_card.svg";
import heart_flash from "../../assets/heart-flash.svg";
import GameCardInfo from "../../components/GameCardInfo";
import GameCardInfoSection from "../../components/GameCardInfoSection";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";
import ContactForm from "../../components/ContatcForm";
import { fetchGameData } from '../../services/fetchGameData';

interface Categoria {
  id: number;
  categoria: string;
  categoria_id: number;
  ordem: number;
  desativado: boolean;
  block_bonus: boolean;
  sub_categorias: null;
  modalidades: number[];
}

interface GameData {
  categorias: Categoria[];
}

const Home = () => {
  const { t } = useTranslation();
  const [gameData, setGameData] = useState<GameData | null>(null);
  const [images, setImages] = useState<{ [key: number]: string }>({}); // Estado para armazenar as imagens

  // Dados de placeholder para caso a requisição falhe
  const placeholderData: GameData = {
    categorias: [
      {
        id: 2,
        categoria: "EXCLUSIVOS",
        categoria_id: 0,
        ordem: 2,
        desativado: false,
        block_bonus: false,
        sub_categorias: null,
        modalidades: [602, 603, 604, 606, 607, 608, 611, 609, 615, 610, 612, 613, 614, 601],
      },
    ],
  };

  // Função para carregar as imagens
  const loadImages = async (modalidades: number[]) => {
    const loadedImages: { [key: number]: string } = {};

    for (const modalidade of modalidades) {
      try {
        const image = await import(`../../assets/games/${modalidade}.jpg`);
        loadedImages[modalidade] = image.default;
      } catch (error) {
        console.error(`Imagem não encontrada para a modalidade ${modalidade}:`, error);
        const defaultImage = await import("../../assets/poker.png");
        loadedImages[modalidade] = defaultImage.default;
      }
    }

    setImages(loadedImages);
  };

  useEffect(() => {
    const getGameData = async () => {
      try {
        const data = await fetchGameData();
        setGameData(data);

        // Carrega as imagens para todas as modalidades
        const allModalidades = data.categorias.flatMap((categoria) => categoria.modalidades);
        await loadImages(allModalidades);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        // Usar dados de placeholder em caso de erro
        setGameData(placeholderData);

        // Carrega as imagens para as modalidades de placeholder
        const allModalidades = placeholderData.categorias.flatMap((categoria) => categoria.modalidades);
        await loadImages(allModalidades);
      }
    };

    getGameData();
  }, []);

  return (
    <>
      <Navbar />
      <DiceBanner />

      {/* Seção "How to Play" */}
      <GameCardSection id="howToPlay" title={t("howToPlay")}>
        <GameCard
          imageSrc={bullseye_arrow}
          imageAlt={t("tryGames")}
          title={t("tryGames")}
          text={t("tryGamesDescription")}
        />
        <GameCard
          imageSrc={menu_book}
          imageAlt={t("readRules")}
          title={t("readRules")}
          text={t("readRulesDescription")}
        />
        <GameCard
          imageSrc={medal}
          imageAlt={t("joinTournaments")}
          title={t("joinTournaments")}
          text={t("joinTournamentsDescription")}
        />
      </GameCardSection>

      {/* Seção "Responsible Gaming" */}
      <GameCardSection
        id="responsibleGaming"
        title={t("responsibleGaming")}
        text={t("responsibleGamingDescription")}
      >
        <GameCard
          imageSrc={clock_time_four_outline}
          imageAlt={t("timeLimits")}
          title={t("timeLimits")}
          text={t("timeLimitsDescription")}
        />
        <GameCard
          imageSrc={exclusion}
          imageAlt={t("selfExclusion")}
          title={t("selfExclusion")}
          text={t("selfExclusionDescription")}
        />
        <GameCard
          imageSrc={credit_card}
          imageAlt={t("depositLimits")}
          title={t("depositLimits")}
          text={t("depositLimitsDescription")}
        />
        <GameCard
          imageSrc={heart_flash}
          imageAlt={t("support")}
          title={t("support")}
          text={t("supportDescription")}
        />
      </GameCardSection>

      {/* Seção "Experience Thrill" com dados da API ou placeholder */}
      <GameCardInfoSection id="experienceThrill" title={t("experienceThrill")}>
        {gameData ? (
          gameData.categorias.map((categoria) =>
            categoria.modalidades.map((modalidade, index) => {
              const imageSrc = images[modalidade]; // Obtém a imagem carregada
              return (
                <GameCardInfo
                  key={index}
                  difficultyLevel="Medium" // Ajuste conforme necessário
                  imageSrc={imageSrc} // Usa a imagem correspondente
                  imageAlt={`Modalidade ${modalidade}`}
                  title={`Modalidade ${modalidade}`}
                  text={t("pokerClassicDescription")} // Use a descrição correta
                />
              );
            })
          )
        ) : (
          <div>Carregando...</div>
        )}
      </GameCardInfoSection>

      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;