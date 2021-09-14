import React from "react";
import "./Form.css";


function Form() {

  return (
    <>
      <div className="newsletter">
        <div className="newsletter-title">
          <h3>Participe de nossas news com promoções e novidades!</h3>
        </div>
        <div className="cadastro-container">
          <input
            type="text"
            name="Nome"
            placeholder="Digite seu nome"
            className="nome-cadastro"
          />
          <input
            type="text"
            name="email"
            placeholder="Digite seu email"
            className="email-cadastro"
          />
          <button type="submit" name="cadastro" className="btn-cadastro">
            EU QUERO!
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
