import crown from "../../assets/crown.svg";


interface Footer {

}

const Footer: React.FC<Footer> = () => {
    return (
        <footer className="footer">
            <div className="footer__content">


                <div className="footer__container">
                    <h3 className="footer__title">Navegação</h3>
                    <ul>
                        <li><a href="#">Apresentação</a></li>
                        <li><a href="#">Como Jogar</a></li>
                        <li><a href="#">Jogo Responsável</a></li>
                        <li><a href="#">Jogar Demonstração</a></li>
                        <li><a href="#">Contate-nos</a></li>
                    </ul>
                </div>
                <div className="footer__container">
                    <h3 className="footer__title">Entre em contato</h3>
                    <ul>
                        <li><a href="#">Arus Soft</a></li>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">WhatsApp</a></li>
                    </ul>
                </div>
                <div className="footer__container">
                    <h3 className="footer__title">Arus Gaming</h3>
                    <ul>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Termos de Uso</a></li>
                        <li><a href="#">Políticas de Privacidade</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__rodape">
                <img src={crown} alt="" />
                <span>Copyright @ 2025. Todos os direitos reservados a este site da web.</span>
            </div>
        </footer>

    );
}

export default Footer;