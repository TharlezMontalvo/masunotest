import React from 'react';
import './Divider.scss';
import divider from '../../img/Divider.png'

const Divider = () => {
  return (
    <div className="Divider">
       <div className="top-row">
        <div className="blue-line"></div>
        <div className="image-container">
            <img src={divider} alt="Imagen principal" />
        </div>
        <div className="blue-line"></div>
      </div>

    </div>
  );
};

export default Divider;
