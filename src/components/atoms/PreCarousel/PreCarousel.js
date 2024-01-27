import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './PreCarousel.scss';
import logo2 from '../../../img/Logo2.png';
import subrayado from '../../../img/Subrayado Rojo.png';

const PreCarousel = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInAnimation = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
    config: { tension: 100, friction: 20 },
  });

  return (
    <animated.div className="body3" style={fadeInAnimation} ref={ref}>
      <header className="header">
        <div className="logo">
          <img src={logo2} alt="Logo" />
        </div>
      </header>

      <div className="section">
        <h1 className="section-title">Las mejores tecnologías de Más Uno</h1>
        <div className="section-image">
          <img src={subrayado} alt="Imagen del subrayado" />
        </div>
      </div>
    </animated.div>
  );
}

export default PreCarousel;
