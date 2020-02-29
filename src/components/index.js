import React, { Component } from 'react';
import Logo from '../img/spotify.svg';
import './style.css';

export default class Header extends Component {
  render() {
    return <div className="header-body">
        <a href="" ><img src={Logo} width='200' id="logo" /></a>
    <nav>
        <ul>
            <li><a href="">Premiun</a></li>
            <li><a href="">Ajuda</a></li>
            <li><a href="">Baixar</a></li>
        </ul>
        <ul className="border">
            <li><a href="">Inscreva-se</a></li>
            <li><a href="">Entrar</a></li>
        </ul>
    </nav>
    </div>;
  }
}


