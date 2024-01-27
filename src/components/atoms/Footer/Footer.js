import React from 'react';
import './Footer.scss';
import logo from '../../../img/Logo.png'
import libro from '../../../img/libroreclamaciones 1.png'

import { FaPhone, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <div className="logo-container">
          <img src={logo} alt="Icono de la web" />
        </div>
        <div className="company-info">
          <p className="company-name">Nosotros</p>
          <p>Somos Mas Uno</p>
        </div>
      </div>

      <div className="column">
        <h2>Te informamos</h2>
        <ul>
          <li>Preguntas Frecuentes</li>
          <li>Términos y condiciones</li>
          <li>Medios de pago</li>
          <li>Políticas de entrega</li>
          <li>Libro de reclamaciones</li>
        </ul>
        <img src={libro} alt="Icono del libro" />
      </div>

      <div className="column">
        <h2>Contáctanos</h2>
        <div className="contact-info">
          <FaPhone />
          <p>789456123</p>
        </div>
        <div className="social-icons">
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
        </div>
        <div className="copyright">
        <p>© 2022 Mas Uno Lima - Perú</p>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
