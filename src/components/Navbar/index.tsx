import game from "../../assets/icon-logo.svg";
import language from "../../assets/icon-language.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={game} />
        <h2 className="heading--tertiary heading--tertiary--gradient">
          Arus Gaming
        </h2>
      </div>

      <ul className="navbar__options">
        <li className="navbar__options__option">Jogos em Destaque</li>
        <li className="navbar__options__option">Como jogar</li>
        <li className="navbar__options__option">Jogo responsável</li>
        <li className="navbar__options__option">Contate-nos</li>
      </ul>

      <div className="navbar__language">
        <img src={language} />
        <select name="Language" id="language" className="select">
          <option className="text text--blue" value="es">
            Espanhol
          </option>
          <option className="text text--blue" value="en">
            Inglês
          </option>
          <option className="text text--blue" value="pt-br" selected>
            Português
          </option>
        </select>
      </div>
    </header>
  );
};

export default Navbar;
