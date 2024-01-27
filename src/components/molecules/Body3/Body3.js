import React from 'react';
import './Body3.scss'; 
import logo2 from '../../../img/Logo2.png'
import subrayado from '../../../img/Subrayado Rojo.png'

const Body3 = () => {
  return (
    <div className="body3">
    <header className="header">
      <div className="logo">
        <img src={logo2} alt="Logo" />
      </div>
    </header>

      <div className="section">
        <h1 className="section-title">Las mejores tecnologias de Más uno</h1>
        <div className="section-image">
          <img src={subrayado} alt="Imagen del subrayado" />
        </div>
      </div>

      
    </div>
  );
}

export default Body3;