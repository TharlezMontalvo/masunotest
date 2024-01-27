// Section.js
import React from 'react';
import './Body1.scss';
import subrayado from '../../img/Subrayado Rojo.png'
import Body from '../../img/Body.png'

const Body1 = () => {
  return (
    <div className="Body1">
      <div className="top-section">
        <img src={Body} alt="Imagen" className="centered-image" />
        <p className="white-text">Es hora de</p>
      </div>
      <p className="white-bold-text">CYBER DAYS</p>
      <div className="more-one">
        <p>EN Más uno</p>
        <img src={subrayado} alt="Otra imagen" />
      </div>
      <p>Del 28 al 30 de marzo</p>
    </div>
  );
};

export default Body1;
