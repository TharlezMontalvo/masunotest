import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './Step.scss';
import subrayado from '../../../img/Subrayado Rojo.png';
import circle1 from '../../../img/Paso1.png';
import circle2 from '../../../img/Paso2.png';
import circle3 from '../../../img/Paso3.png';

const Step = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stepContainerAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0%)' : 'translateY(50px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div className="step-container" style={stepContainerAnimation} ref={ref}>
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
          <div className="p-container">
          <p className="p-text">Completa el formulario con tus datos personales y acepta los términos.</p>
          </div>
        </div>

        <div className="step">
          <h3 className="step-title">Paso 2</h3>
          <div className="step-circle">
            <img src={circle2} alt="Imagen del paso 2" />
          </div>
          <p className="step-text">Recibe un cupón</p>
          <div className="p-container">
          <p className="p-text">Recibirás un correo electrónico donde podrás ver el cupón de descuento.</p>
          </div>
        </div>

        <div className="step">
          <h3 className="step-title">Paso 3</h3>
          <div className="step-circle">
            <img src={circle3} alt="Imagen del paso 3" />
          </div>
          <p className="step-text">Empieza a ahorrar</p>
          <div className="p-container">
          <p className="p-text">¡Y listo! Podrás usarlo del 28 al 30 de Marzo por compras en nuestra tienda online.</p>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Step;
