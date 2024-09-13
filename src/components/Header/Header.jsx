import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__left">   

          <h2 className='header__title'>Clínica Dental</h2>
          <p className='header__subtitle'>Bienvenid@</p>
          <p className='header__parrafo'>¡Cuida tus Dientes!</p>

          <div className='header__presentation'>
            <h3 className='header__presentation-title'>Presentación: </h3>
            <p className='header__presentation-names'>
              Desarrollado por: <strong>[Lina M Velásquez]</strong> y <strong>[Luigi Suarez]</strong>
            </p>
          </div>
        </div>

        
        <div className="header__right">
          <img className="header__right--imagen" src="/src/components/img/clinicaDental.webp" alt="Imagen de la clínica" />
        </div>
      </header>
    );
  }
}