// CarruselFotografias.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarruselFotografias = () => {
  const fotos = [
    './src/assets/img/cesar1.jpg',
    './src/assets/img/cesar2.avif',
    './src/assets/img/cesar3.avif',
    './src/assets/img/cesar4.avif',
    './src/assets/img/cesar5.avif',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carrusel-fotografias mt-4">
      <h3>HABITACIÓNES</h3>
      <Slider {...settings}>
        {fotos.map((foto, index) => (
          <div key={index}>
            <img src={foto} alt={`Cesar ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarruselFotografias;
