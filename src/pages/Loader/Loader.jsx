// // src/components/Loader.js
// import React from 'react';
// import styled, { keyframes } from 'styled-components';

// const spin = keyframes`
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// `;

// const LoaderContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(255, 255, 255, 0.8); /* semi-transparent background */
//   z-index: 9999; /* Make sure it covers the entire screen */
// `;

// const Spinner = styled.div`
//   border: 16px solid #f3f3f3; /* Light grey */
//   border-top: 16px solid #3498db; /* Blue */
//   border-radius: 50%;
//   width: 120px;
//   height: 120px;
//   animation: ${spin} 2s linear infinite;
// `;

// const LoadingText = styled.p`
//   margin-top: 20px;
//   font-size: 1.5rem;
//   color: #333;
// `;

// const Loader = () => (
//   <LoaderContainer>
//     <Spinner />
//     <LoadingText>Loading...</LoadingText>
//   </LoaderContainer>
// );

// export default Loader;


import React from 'react';
import './loader.css'; // We'll create this file next

const Loader = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;