import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Anunce from '../../molecules/Anunce/Anunce';
import FirstBlock from '../../molecules/FirstBlock/FirstBlock';
import Form from '../../molecules/Form/Form';
import './PrincipalView.scss';

const PrincipalView = () => {
  const [animate, setAnimate] = useState(false);

  const leftColumnAnimation = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateX(0%)' : 'translateX(-50%)',
    from: { opacity: 0, transform: 'translateX(-50%)' },
    config: { tension: 100, friction: 20 },
  });

  const rightColumnAnimation = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateX(0%)' : 'translateX(50%)',
    from: { opacity: 0, transform: 'translateX(50%)' },
    config: { tension: 100, friction: 20 },
  });

  useEffect(() => {
    setAnimate(true); 
    return () => setAnimate(false); 
  }, []);

  return (
    <div className="combined-container">
      <animated.div className="left-column" style={leftColumnAnimation}>
        <div className="first-row">
          <FirstBlock />
        </div>
        <div className="second-row">
          <Anunce />
        </div>
      </animated.div>
      <animated.div className="right-column" style={rightColumnAnimation}>
        <Form />
      </animated.div>
    </div>
  );
};

export default PrincipalView;
