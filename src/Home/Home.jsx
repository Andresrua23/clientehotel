// Home.js
import React from 'react';
import './Home.css';
import { Formulario } from '../Formulario/Formulario';
import { InformacionHotel } from '../InformacionHotel/InfoHotel';
import CarruselFotografias from '../Carrusel/Carrusel';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export function Home() {
  return (
    <>
    <Navbar/>
      <div className="banner">
        <div className="row">
          <div className="col-12 col-md-4 text-white fw-bold">
            <h3>Reserva con nosotros</h3>
            <hr />
            <Formulario />
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <InformacionHotel />
        <CarruselFotografias />
      </div>
    <Footer/> 
    </>
  );
}
