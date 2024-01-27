import React from 'react';
import './FirstBlock.scss';
import subrayado from '../../../img/Subrayado Rojo.png'
import Body from '../../../img/Body.png'

const FirstBlock = () => {
  return (
    <div className="FirstBlock">
      <div className="top-section">
        <img src={Body} alt="Imagen" className="centered-image" />
        <div className="text-container">
          <p className="first-line">ES HORA DE </p>
        </div>
      </div>
      <div className="more-one">
        <p className="second-line">CYBER DAYS</p>
        <p className="third-line"><span className="small-text">EN</span>  Más uno</p>
        <img src={subrayado} alt="subrayado" />
      </div>
      <p className="last-line">Del 28 al 30 de marzo</p>
    </div>
  );
};

export default FirstBlock;
