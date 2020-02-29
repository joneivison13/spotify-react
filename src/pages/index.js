import React, { Component } from 'react';
import Fundo from '../img/fundo.jpg';
import './styles.css';

export default class Main extends Component {
  render() {
    return <div className="corpo">
        <img src={Fundo} className="fundo"/>
        <div className="texto">
            <p>
            Música para todos.
            </p>
            <p className="texto2">
                Milhões de músicas à sua escolha. E nem precisa de cartão de crédito.
            </p>
            <a href="" id="botao">OBTENHA O SPOTIFY FREE</a>
        </div>
    </div>;
  }
}
