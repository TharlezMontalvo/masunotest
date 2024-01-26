// Form.js

import React, { useState } from 'react';
import './Form.scss';
import Captcha from './captcha';

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
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="nombres">Nombres:</label>
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
          <label htmlFor="apellidos">Apellidos:</label>
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
          <label htmlFor="telefono">Teléfono Celular:</label>
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
          <label htmlFor="correo">Correo Electrónico:</label>
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
        <label htmlFor="favoritos">Tus Favoritos:</label>
        <br></br>
        <select id="favoritos" name="favoritos">
          <option value="opcion1">Pollo</option>
          <option value="opcion2">Cerdo</option>
          <option value="opcion3">Embutidos</option>
        </select>
      </div>

      <Captcha />

       {/* Nueva fila con caja de verificación */}
       <div className="form-row">
        <div className="form-field">
          <input type="checkbox" id="terminos" name="terminos" />
          <label htmlFor="terminos">Acepto los Términos y políticas de privacidad</label>
        </div>
      </div>

      {/* Nueva fila con otra caja de verificación */}
      <div className="form-row">
        <div className="form-field">
          <input type="checkbox" id="usoDatos" name="usoDatos" />
          <label htmlFor="usoDatos">Acepto el Uso de datos personales</label>
        </div>
      </div>

      {/* Nueva fila con botón de registro y párrafo */}
      <div className="form-row">
        <button className="register-button">Registrarme</button>
      </div>
      <div className="form-row">
        <p className="offers-paragraph">
          Aprovecha las mejores ofertas y descuentos en cerdo, congelados, embutidos
          y mucho más. No te pierdas de nada estos Cyberdays registrándote y obteniendo grandes descuentos exclusivos.
        </p>
      </div>
    </div>
  );
}

export default Form;
