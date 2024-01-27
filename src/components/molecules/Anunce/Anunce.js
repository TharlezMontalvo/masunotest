import React from 'react';
import './Anunce.scss';
import subrayado from '../../../img/Subrayado Rojo.png'


const Anunce = () => {
  return (
    <div className="anuncio-container">
      <div className="second-container">
        <div className="section">
          <h1 className="section-title">Regístrate y obtén</h1>
          <div className="section-image">
            <img src={subrayado} alt="Imagen del subrayado" />
          </div>
        </div>
        <div className="fila fila-3">
          <div className="columna izquierda">
            <p className="porcentaje">10%</p>
          </div>
          <div className="columna derecha">
            <p className="mensaje-derecha">En tu primera compra de <span className="cyber-days">CYBER DAYS</span></p>
          </div>
        </div>
        <div className="fila fila-4">
          <p className="mensaje-centralizado">Aplicamos el descuento mediante un código que se te enviará a tu correo registrado</p>
        </div>
        <div className="fila fila-5">
          <p className="cupon-valido">Cupón válido del 28 al 30 de marzo</p>
        </div>
        <div className="fila fila-6">
          <p className="terminos-condiciones">*Aplican términos y condiciones</p>
        </div>
        </div>
    </div>
  );
};

export default Anunce;
