import mail from "../../assets/mail.svg";
import call from "../../assets/call.svg";
import business from "../../assets/business.svg";

const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="contact-form__content">
        <header className="contact-form__header">
          <h1 className="heading--primary">Ainda com dúvidas?</h1>
          <p className="text text--gray">
            Entre em contato conosco em algum de nossos canais.
          </p>
        </header>
        <form className="contact-form__form">
          <div className="contact-form__form__input-box">
            <label htmlFor="name">Nome completo</label>
            <input type="text" id="name" name="nome" placeholder="ex.João da Silva" />
          </div>
          <div className="contact-form__form__input-box">
            <label htmlFor="subject" >Assunto</label>
            <input
              type="text"
              id="subject"
              placeholder="ex.Solicitação de Orçamento"
              name="assunto"
            />
          </div>
          <div className="contact-form__form__input-box">
            <label htmlFor="mail">E-mail</label>
            <input
              type="text"
              id="mail"
              placeholder="ex.joao.silva@gmail.com"
              name="mail"
            />
          </div>
          <div className="contact-form__form__input-box">
            <label htmlFor="contact">Contato</label>
            <input
              type="text"
              id="contact"
              name="telefone"
              placeholder="+55 (44) 9.9988-7766"
            />
          </div>
          <div className="contact-form__form__textarea-box">
            <label htmlFor="message">Mensagem</label>
            <textarea
              name="mensagem"
              id="message"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque."
            ></textarea>
          </div>
        </form>
        <div className="contact-form__details">
          <div className="contact-form__details__item">
            <img src={mail} />
            <p className="text text--gray">contato@arusti.com.br</p>
          </div>
          <div className="contact-form__details__item">
            <img src={call} />
            <p className="text text--gray">+55 (44) 9.9126-3892</p>
          </div>
          <div className="contact-form__details__item">
            <img src={business} />
            <p className="text text--gray">Av. Bahia, 500 - Cianorte–PR</p>
          </div>
        </div>
        <div className="contact-form__button">
          <button className="button button--primary">Enviar mensagem</button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
