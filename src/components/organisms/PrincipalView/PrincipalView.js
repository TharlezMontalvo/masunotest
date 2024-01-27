import React from 'react';
import { useSpring, animated } from 'react-spring';
import Anunce from '../../molecules/Anunce/Anunce';
import FirstBlock from '../../molecules/FirstBlock/FirstBlock';
import Form from '../../molecules/Form/Form';
import './PrincipalView.scss';

const PrincipalView = () => {
  const leftColumnAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0%)',
    from: { opacity: 0, transform: 'translateX(-50%)' },
    config: { tension: 100, friction: 20 },
  });

  const rightColumnAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0%)',
    from: { opacity: 0, transform: 'translateX(50%)' },
    config: { tension: 100, friction: 20 },
  });

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
