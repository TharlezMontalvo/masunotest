import React, { useState } from 'react';
import './Form.scss';
import Captcha from './captcha';
import subrayado from '../../img/Subrayado Azul.png'
import sello from '../../img/Sello.png'


const Form = () => {
  const [placeholders, setPlaceholders] = useState({
    nombres: 'Ingresa tus nombres',
    apellidos: 'Ingresa tus apellidos',
    telefono: 'Ingresa tu número de teléfono',
    correo: 'Ingresa tu correo electrónico',
    captcha: 'Ingresa el código captcha',
  });

  const handleInputClick = (fieldName) => {
    setPlaceholders((prevPlaceholders) => ({
      ...prevPlaceholders,
      [fieldName]: '',
    }));
  };

  const handleInputBlur = (fieldName) => {
    if (!placeholders[fieldName]) {
      setPlaceholders((prevPlaceholders) => ({
        ...prevPlaceholders,
        [fieldName]: `Ingresa tu ${fieldName.toLowerCase()}`,
      }));
    }
  };

  return (
    <div className="form-container">
      <div className="form-title">
      <strong>Completa tus datos</strong>
      <div className="section-image">
          <img src={subrayado} alt="Imagen del subrayado" />
        </div>
      <div className="corner-image">
          <img src={sello}alt="Other Image" className="centered-image" />
      </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="nombres">Nombres *</label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            placeholder={placeholders.nombres}
            onClick={() => handleInputClick('Nombres')}
            onBlur={() => handleInputBlur('Nombres')}
          />
        </div>
        <div className="form-field">
          <label htmlFor="apellidos">Apellidos *</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            placeholder={placeholders.apellidos}
            onClick={() => handleInputClick('Apellidos')}
            onBlur={() => handleInputBlur('Apellidos')}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="telefono">Teléfono Celular *</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder={placeholders.telefono}
            onClick={() => handleInputClick('Teléfono Celular')}
            onBlur={() => handleInputBlur('Teléfono Celular')}
          />
        </div>
        <div className="form-field">
          <label htmlFor="correo">Correo Electrónico *</label>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder={placeholders.correo}
            onClick={() => handleInputClick('Correo Electrónico')}
            onBlur={() => handleInputBlur('Correo Electrónico')}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="favoritos">Tus Favoritos</label>
          <select id="favoritos" name="favoritos">
            <option value="opcion1">Pollo</option>
            <option value="opcion2">Cerdo</option>
            <option value="opcion3">Embutidos</option>
          </select>
        </div>
        <Captcha />
      </div>

      
      <div className="form-row ">
        <div className="form-field checkbox-field">
          <input type="checkbox" id="terminos" name="terminos" />
          <label htmlFor="terminos">Acepto los Términos y políticas de privacidad</label>
        </div>
      </div>

      <div className="form-row">
        <div className="form-field checkbox-field">
          <input type="checkbox" id="usoDatos" name="usoDatos" />
          <label htmlFor="usoDatos">Acepto el Uso de datos personales</label>
        </div>
      </div>

      <div className="form-row center-button">
        <button className="register-button">Registrarme</button>
      </div>
      <div className="form-row">
        <p className="offers-paragraph">
          Aprovecha las mejores ofertas y descuentos en cerdo, congelados, embutidos 
          <span className="red-text"> y mucho más.</span> No te pierdas de nada estos Cyberdays registrándote y obteniendo grandes descuentos exclusivos.
        </p>
      </div>
    </div>
  );
}

export default Form;
