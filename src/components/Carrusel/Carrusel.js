import React, { useState } from 'react';
import './Carrusel.scss';
import slide1 from '../../img/Slide1.png';
import slide2 from '../../img/Slide2.png';
import slide3 from '../../img/Slide3.png';
import star from '../../img/star.png';

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const prevSlide = () => {
    console.log('Prev Slide Clicked');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  return (
    <div className="carousel">
      <button className={`arrow-button prev ${currentIndex === 0 ? 'hidden' : ''}`} onClick={prevSlide}>&#8249;</button>

      <div className="carousel-container" style={{ transform: `translateX(${-currentIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
        <div className={`carousel-item ${currentIndex === 0 ? 'active' : ''}`}>
          <div className="column left">
            
            <div className="text-content">
              <img src={star} alt="Imagen 1" className="star-image" />
              <h2 className="title">PHP</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="ver-button">Ver Tecnología</button>
            </div>
          </div>
          <div className="column right">
            <img src={slide1} alt="Imagen predefinida" className="slide-image"/>
          </div>
        </div>

        <div className={`carousel-item ${currentIndex === 1 ? 'active' : ''}`}>
          <div className="column left">
            <div className="text-content">
              <img src={star} alt="Imagen 2" className="star-image" />
              <h2 className="title">Flutter</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="ver-button">Ver Tecnología</button>
            </div>
          </div>
          <div className="column right">
            <img src={slide2} alt="Imagen predefinida" className="slide-image"/>
          </div>
        </div>

        <div className={`carousel-item ${currentIndex === 2 ? 'active' : ''}`}>
          <div className="column left">
            <div className="text-content">
              <img src={star} alt="Imagen 3" className="star-image" />
              <h2 className="title">Diseño UX/UI</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="ver-button">Ver Tecnología</button>
            </div>
          </div>
          <div className="column right">
            <img src={slide3} alt="Imagen predefinida" className="slide-image"/>
          </div>
        </div>
      </div>

      <button className={`arrow-button next ${currentIndex === 2 ? 'hidden' : ''}`} onClick={nextSlide}>&#8250;</button>
    </div>
  );
};

export default Carrusel;
