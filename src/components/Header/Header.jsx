import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__left">   

          <h2 className='header__title'>Clínica Dental</h2>
          <p className='header__subtitle'>Bienvenido</p>
          <p className='header__parrafo'>¡Cuida tus Dientes!</p>
        </div>
        <div className="header__right">
          <img className="header__right--imagen" src="/src/components/img/clinicaDental.webp" alt="Imagen de la clínica" />
        </div>
      </header>
    );
  }
}