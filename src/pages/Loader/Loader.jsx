import React from 'react';
import './loader.css';

export const Loader = () => {
  return (
    <div className="aesthetic-loader">
        <div className='text'>Loading...</div>
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