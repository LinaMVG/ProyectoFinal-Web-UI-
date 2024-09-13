import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logoImagen from '../img/logoImagen.png';
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="nav">
        <div className="logoContainer">
          <NavLink to="/" className="logoLink" onClick={this.toggleMenu}>
            <img className="logoImagen" src={logoImagen} alt="Diente" />
          </NavLink>
            <p className="logo">Clinica</p>
        </div>
        

        <button className="menu-toggle" onClick={this.toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </button>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink exact to="odontologo/registrar" activeClassName="active" onClick={this.toggleMenu}>
              Registrar
            </NavLink>
          </li>
          <li>
            <NavLink to="odontologo/mod" activeClassName="active" onClick={this.toggleMenu}>
              Modificar/Listar
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="odontologo/listar" activeClassName="active" onClick={this.toggleMenu}>
              Listar Todos
            </NavLink>
          </li> */}
          <li>
            <NavLink to= "odontologo/buscar" className={({ isActive }) => isActive ? "active" : ""} onClick={this.toggleMenu}>
              Buscar/Eliminar
            </NavLink>
          </li>
        </div>
      </div>
    );
  }
}
