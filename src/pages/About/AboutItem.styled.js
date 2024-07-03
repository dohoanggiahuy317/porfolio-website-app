import styled from "styled-components";
import { blue, red, typeScale } from "../../utils";

export const AboutItemWrapper = styled.div`
    overflow: hidden;
    background-color: ${(props) => (props.color ? props.color["80"] : blue["60"])};

    color: ${(props) => (props.color ? props.color["00"] : red["00"])};
    border: 4px solid ${(props) => (props.color ? props.color["00"] : blue["00"])};
    box-shadow: 6px 6px 0
        ${(props) => (props.color ? props.color["00"] : blue["00"])};
    border-radius: 1rem;
    width: 120px;
    height: 120px;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;

    .logo {
        min-width: 70px;
        width: 70px;
        height: 70px;
        border-radius: 10px;
        overflow: hidden;
        margin: 0.75rem;
    }
    .logo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .text {
        display: none;
    }

    &.active {
        width: 420px;
        justify-content: start;
        .logo {
            min-width: 10px;
            width: 10px;
            height: 10px;

        }
        .logo img {
            width: 0%;
            height: 0%;
            object-fit: cover;
        }
        
        .text {
        min-width: max-content;
        display: block;
        overflow-wrap: break-word;
        min-width: unset;
        line-height: 1;
            h2 {
                font-size: ${typeScale.subtitle};
            }
            h3 {
                font-size: ${typeScale.paragraph};
            }
            p {
                margin-top: 4px;
                font-size: ${typeScale.helperText};
            }
        }
    }


    @media screen and (max-width: 720px) {
        width: 100px;
        height: 100px;
        
        .logo {
            min-width: 50px;
            width: 50px;
            height: 50px;
        }
        .logo img {
            min-width: 50px;
            width: 50px;
            height: 50px;
        }

        &.active {
            width: 85vw;
            .logo {
                min-width: 0px;
                width: 0px;
                height: 0px;
            }
            .logo img {
                min-width: 0px;
                width: 0px;
                height: 0px;
            }
            .text {
                overflow-wrap: break-word;
                min-width: unset;
                    line-height: 0.8rem;
                h2 {
                    font-size: ${typeScale.paragraph};
                }
                p {
                    font-size: ${typeScale.copyrightText};
                }
            }
        }
    }
    @media screen and (max-width: 1024px) {
        width: 100px;
        height: 100px;
        
        .logo {
            min-width: 50px;
            width: 50px;
            height: 50px;
        }
        .logo img {
            min-width: 50px;
            width: 50px;
            height: 50px;
        }

        &.active {
        .logo {
            min-width: 0px;
            width: 0px;
            height: 0px;
        }
        .logo img {
            min-width: 0px;
            width: 0px;
            height: 0px;
        }
        .text {
            overflow-wrap: break-word;
            min-width: unset;
            line-height: 0.8rem;
            h2 {
            font-size: ${typeScale.paragraph};
            }
            p {
            font-size: ${typeScale.copyrightText};
            }
        }
    }
`;
