import React from 'react';
import './Body2.scss';
import subrayado from '../../img/Subrayado Rojo.png'
import circle1 from '../../img/Paso1.png'
import circle2 from '../../img/Paso2.png'
import circle3 from '../../img/Paso3.png'


const Body2 = () => {
  return (
    <div className="body2">

      <div className="section">
        <h1 className="section-title">¿Cómo obtengo el descuento por Cyber Days?</h1>
        <div className="section-image">
          <img src={subrayado} alt="Imagen del subrayado" />
        </div>
      </div>

      <div className="section">
        <h2 className="section-title2">
          Para adquirir nuestro descuento especial por <span className="red-text">Cyber Days</span>, sigue los siguientes pasos
        </h2>
      </div>

      <div className="steps">
        <div className="step">
          <h3 className="step-title">Paso 1</h3>
          <div className="step-circle">
            <img src={circle1} alt="Imagen del paso 1" />
          </div>
          <p className="step-text">Regístrate</p>
          <p>Completa el formulario con tus datos personales y acepta los términos.</p>
        </div>

        <div className="step">
          <h3 className="step-title">Paso 2</h3>
          <div className="step-circle">
            <img src={circle2} alt="Imagen del paso 2" />
          </div>
          <p className="step-text">Recibe un cupón</p>
          <p>Recibirás un correo electrónico donde podrás ver el cupón de descuento.</p>
        </div>

        <div className="step">
          <h3 className="step-title">Paso 3</h3>
          <div className="step-circle">
            <img src={circle3} alt="Imagen del paso 3" />
          </div>
          <p className="step-text">Empieza a ahorrar</p>
          <p>¡Y listo! Podrás usarlo del 28 al 30 de Marzo por compras en nuestra tienda online.</p>
        </div>
      </div>
    </div>
  );
};

export default Body2;
