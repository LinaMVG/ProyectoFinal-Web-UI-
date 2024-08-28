import React, { Component } from 'react';
import "./footer.css"

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">   

            <div className="col">   

              <h3 className='footer__title'>Acerca de Nosotros</h3>
              <p>Breve descripción de tu clínica dental.</p>
              <ul className='lista'>
                <li><a href="#">Nuestra Historia</a></li>
                <li><a href="#">Equipo</a></li>
                <li><a href="#">Servicios</a></li>
              </ul>
            </div>
            <div className="col">
              <h3 className='footer__title'>Contáctanos</h3>
              <p>Dirección : Pasaje Digital House 555</p>
              <p>Teléfono : 444-4444</p>
              <p>Email : DigitalHouse@Backend.com</p>
              
            </div>
            <div className="col">
              <h3 className='footer__title'>Enlaces de interés</h3>
              <ul className='lista'>
                <li><a href="#">Preguntas Frecuentes</a></li>
                <li><a href="#">Política de Privacidad</a></li>
                <li><a href="#">Términos y Condiciones</a></li>
              </ul>   

            </div>
          </div>   

        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Tu Clínica Dental. Todos los derechos reservados.
        </div>
      </footer>
    );
  }
}