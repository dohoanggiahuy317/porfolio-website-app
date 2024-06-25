import styled from "styled-components";
import { typeScale } from "../../utils";

export const Paragraph = styled.p`
  font-size: ${typeScale.text};
  grid-column: 2/ 7;
  line-height: 2rem;
  padding-block: 2rem;
  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
    font-size: ${typeScale.paragraph};
    line-height: 1.2rem;
    padding-block: 0rem;
    padding-inline: 1.5rem;
  }
`;


export const VideoContainter = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: -2;
    padding: 0;
    filter: blur(3px) brightness(50%);

    #background-video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -2;
        overflow: hidden;
        cursor: default;
    }
`

export const EduTitle = styled.h1`
font-size: ${typeScale.text};
grid-column: 2/ 7;
line-height: 2rem;
@media screen and (max-width: 720px) {
  grid-column: 1 / 7;
  font-size: ${typeScale.paragraph};
  line-height: 1.2rem;
  padding-block: 0rem;
  padding-inline: 1.5rem;
}
`;


export const Educations = styled.section`
    grid-column: 2/7;
    display: flex;
    gap: 0.75rem;
    align-self: start;
    padding-top: 1rem;

    @media screen and (max-width: 720px) {
        flex-direction: column;
        justify-content: space-around;
        height: 400px;
        padding-inline: 1.5rem;
    }
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        height: 400px;    }
`;

export const Text = styled.aside`
    grid-column: 2/7;
    width: 100%;
    text-align: justify;
    @media screen and (max-width: 720px) {
            grid-column: 1 / 7;
    }
    @media screen and (max-width: 720px) {
            grid-column: 1 / 7;
    }
`;

export const SkillsWrapper = styled.aside`
    width: 96%;
    left: 0;
    grid-column: 7/ 13;
  
    @media screen and (max-width: 720px) {
        grid-column: 1 / 7;
        height: 400px;
    }
`;
