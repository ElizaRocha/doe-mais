import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import firebase from "../../FirebaseConection";
import "./home.css"

function Home() {
  return (
    <div className="app">
      <div className="corpo">
        <h1 className="pergunta">Você conhece o Doe+?</h1>
        <img src={require( '../../images/cachorro.jpeg')} className="cachorro"/>
      </div>
        <span className="text">Doe+ incentiva a doação de sangue de animais. 
          Além disso, esperamos proporcionar maior confiabilidade, 
          tanto para os donos de animais que já doam assiduamente, 
          quanto para aqueles que nunca doaram, sanando as dúvidas e efetuando o agendamento em uma plataforma mais eficiente, 
          alcançando um maior público alvo, para dessa forma, estimular o ato de colaborar com o abastecimento dos bancos de sangue 
          veterinários que estejam cadastrados no aplicativo. 
        </span>
        <div className="areaButton">
          <Link className="botao" to={'/login'}>Fazer login</Link>
          <Link className="botao" to={'/create'}>Criar uma conta</Link>
        </div>
    </div>

  );
}

export default Home;
