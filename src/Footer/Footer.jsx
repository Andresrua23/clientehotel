// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Contacto</h4>
            <p>Dirección: 3570 Las Vegas Blvd S, Las Vegas, NV 89109, USA</p>
            <p>Teléfono: +1 702-731-7110</p>
          </div>
          <div className="col-md-4">
            <h4>Redes Sociales</h4>
            <ul>
              <li>
                <a href="https://www.facebook.com/caesarspalace" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/caesarspalace" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              {/* Agrega más enlaces a otras redes sociales según sea necesario */}
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Newsletter</h4>
            {/* Puedes agregar un formulario para suscribirse al newsletter si es necesario */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
