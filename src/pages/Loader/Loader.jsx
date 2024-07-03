import React from 'react';
import './Loader.css';

export const Loader = () => {
  return (
    <div className="aesthetic-loader">
        <div className='textl'>Loading...</div>
        <div className="dot-wrapper">
            <div className="dotl"></div>
            <div className="dotl"></div>
            <div className="dotl"></div>
            <div className="dotl"></div>
            <div className="dotl"></div>
        </div>
    </div>
  );
};