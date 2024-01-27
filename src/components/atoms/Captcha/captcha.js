import React, { useState } from 'react';
import { Refresh as RefreshIcon } from '@mui/icons-material';
import Button from '@mui/material/Button';
import captcha from '../../../img/captcha.jpg'


const generateCaptchaText = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const captchaText = Array.from({ length: 6 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
  return captchaText;
};

const Captcha = () => {
  const [captchaText, setCaptchaText] = useState(generateCaptchaText());
  const [userInput, setUserInput] = useState('');
  const [isCaptchaValid, setIsCaptchaValid] = useState(true);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleRefreshCaptcha = () => {
    setCaptchaText(generateCaptchaText());
    setUserInput('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = userInput.toLowerCase() === captchaText.toLowerCase();
    setIsCaptchaValid(isValid);
  };

  return (
    <div className="captcha-container">
    <img src={captcha} alt="Captcha" className="captcha-image" />
    <Button
      variant="contained"
      color="primary"
      onClick={handleRefreshCaptcha}
      startIcon={<RefreshIcon />}
      style={{ backgroundColor: '#1A36A8' }}
    ></Button>
    <form className="captcha-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Ingrese captcha"
        className="input-field"
      />
    </form>
    {!isCaptchaValid && <p className="error-message">Texto incorrecto del Captcha</p>}
  </div>
  );
};

export default Captcha;
