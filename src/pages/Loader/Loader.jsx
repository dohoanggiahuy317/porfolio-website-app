// import React from 'react';
// import './loader.css'; // We'll create this file next

// const Loader = () => {
//   return (
//     <div className="spinner-container">
//       <div className="spinner"></div>
//     </div>
//   );
// };

// export default Loader;


import React from 'react';
import './loader.css';

export const Loader = () => {
  return (
    <div className="aesthetic-loader">
        <div className='text'>Loading...</div>
        <div className="dot-wrapper">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    </div>
  );
};

// export default Loader;