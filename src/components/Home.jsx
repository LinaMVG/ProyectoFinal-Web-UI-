import React, { Component } from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <Footer/>
      </div>
    )
  }
}
