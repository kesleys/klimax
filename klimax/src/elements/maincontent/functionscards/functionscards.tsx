import React from "react";
import './functionscards.css';
import { Link } from "react-router-dom";

function Functionscards() {
  return (
    <div className="functionscards">
       <div className="cards">
    <img src="https://i.ibb.co/LQkx8Q4/imagem-fundo.png"
    alt="Fundo"
    className="imagemdefundo" />
      <img
        src="https://i.ibb.co/k0C2H34/Basedfilms-icon.png"
        alt="Filmes Similares"
        className="iconst"
      />
      <div className="titulo">
        <i >
          <p>Recomendação por Filmes Similares</p>
        </i>
      </div>
      <div className="descricao">
        <i >
          Use filmes que você ama para achar filmes que você vai Adorar.
        </i>
      </div>
    </div>
      <div className="cards">
      <img src="https://i.ibb.co/LQkx8Q4/imagem-fundo.png"
      alt="Fundo"
       className="imagemdefundo" />
      <img
        src="https://i.ibb.co/L8gDt55/Filtros-icon.png"
        alt="Semelhante aos filmes selecionados"
        className="icon"
      />
      <div className="titulo">
        <i >
          <p>Filtre Seus Gostos</p>
        </i>
      </div>
      <div className="descricao">
        <i >
          Adicione filtros para encontrar filmes do jeito que você gosta!
        </i>
      </div>
    </div>
    <nav>
    <Link to="/aleatorios" className="link">
    <div className="cards">
      <img 
      src="https://i.ibb.co/LQkx8Q4/imagem-fundo.png" 
      alt="Fundo"
      className="imagemdefundo" />
      <img
        src="https://i.ibb.co/7GtKkQs/aleatorio-icon.png"
        alt="Semelhante aos filmes selecionados"
        className="icon"
      />
      <div className="titulo">
        <i >
          <p>
            Recomendação <br /> Aleatória
          </p>
        </i>
      </div>
      <div className="descricao">
        <i >
          Sua oportunidade de descobrir novos filmes surpreedentes.
        </i>
      </div>
    </div>
    </Link>
    </nav>
    </div>
  );
}

export default Functionscards;
