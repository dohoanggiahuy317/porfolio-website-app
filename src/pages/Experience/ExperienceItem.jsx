import React from "react";
import { StyledExperienceItem } from "./ExperienceItem.styled";

export const ExperienceItem = (props) => {
    const { data } = props;
    return (
        <StyledExperienceItem className="experience-item" color={data.color}>
            <div className="header">
                <div className="image">
                    <div className="wrapper">
                        <img src={data.logo} alt="logo" />
                    </div>
                </div>
                <div className="text">
                    <h2>{data.name}</h2>
                    <h3 className="position">{data.title}</h3>
                    <p>{data.location}</p>
                    <p className="date_al">
                        {data.joined} - {data.end}
                    </p>
                </div>
            </div>
    
            <p className="bio" dangerouslySetInnerHTML={{ __html: data.bio }}></p>
        </StyledExperienceItem>
    );
};
