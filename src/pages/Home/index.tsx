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
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";
import ContactForm from "../../components/ContatcForm";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <DiceBanner />

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

      <GameCardInfoSection id="experienceThrill" title={t("experienceThrill")}>
        <GameCardInfo
          difficultyLevel="Hard"
          imageSrc={poker}
          imageAlt="Poker Clássico"
          title="Poker Clássico"
          text={t("pokerClassicDescription")}
        />
        <GameCardInfo
          difficultyLevel="Easy"
          imageSrc={poker}
          imageAlt="Poker Clássico"
          title="Poker Clássico"
          text={t("pokerClassicDescription")}
        />
        <GameCardInfo
          difficultyLevel="Medium"
          imageSrc={poker}
          imageAlt="Poker Clássico"
          title="Poker Clássico"
          text={t("pokerClassicDescription")}
        />
        <GameCardInfo
          difficultyLevel="Hard"
          imageSrc={poker}
          imageAlt="Poker Clássico"
          title="Poker Clássico"
          text={t("pokerClassicDescription")}
        />
        <GameCardInfo
          difficultyLevel="Hard"
          imageSrc={poker}
          imageAlt="Poker Clássico"
          title="Poker Clássico"
          text={t("pokerClassicDescription")}
        />
        <GameCardInfo
          difficultyLevel="Easy"
          imageSrc={poker}
          imageAlt="Poker Clássico"
          title="Poker Clássico"
          text={t("pokerClassicDescription")}
        />
        <GameCardInfo
          difficultyLevel="Medium"
          imageSrc={poker}
          imageAlt="Poker Clássico"
          title="Poker Clássico"
          text={t("pokerClassicDescription")}
        />
        <GameCardInfo
          difficultyLevel="Hard"
          imageSrc={poker}
          imageAlt="Poker Clássico"
          title="Poker Clássico"
          text={t("pokerClassicDescription")}
        />
      </GameCardInfoSection>

      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
