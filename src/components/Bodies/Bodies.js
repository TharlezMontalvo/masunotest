import React from 'react';
import Anuncio from '../Anuncio/Anuncio';
import Body1 from '../Body1/Body1';
import Form from '../Form/Form';
import './Bodies.scss';

const Bodies = () => {
    return (
        <div className="combined-container">
          <div className="left-column">
            <div className="first-row">
              <Body1 />
            </div>
            <div className="second-row">
              <Anuncio />
            </div>
          </div>
          <div className="right-column">
            <Form />
          </div>
        </div>
      );
};

export default Bodies;
