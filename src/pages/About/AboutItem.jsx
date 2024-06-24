import React from "react";
import { AboutItemWrapper } from "./AboutItem.styled";

export const AboutItem = ({ color, active, data }) => {
  return (
    <AboutItemWrapper color={color} active={active} className="about-item">
      <div className="logo">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="text">
        <h2>{data.title}</h2>
        <p id="major" style={{ fontWeight: 'bold' }}>{data.major}</p>
        <p id="grad">{data.grad}</p>
        <p id="location">Location: {data.location}</p>
      </div>
    </AboutItemWrapper>
  );
};