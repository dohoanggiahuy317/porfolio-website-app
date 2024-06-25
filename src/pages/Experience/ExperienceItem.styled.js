import styled from "styled-components";
import { blue, typeScale } from "../../utils";

export const StyledExperienceItem = styled.div`
    overflow: hidden;
    background-color: ${(props) =>
        props.color ? props.color["60"] : blue["60"]};

    color: ${(props) => (props.color ? props.color["00"] : blue["00"])};
    border: 4px solid ${(props) => (props.color ? props.color["00"] : blue["00"])};
    box-shadow: 0.8rem 0.8rem 0
        ${(props) => (props.color ? props.color["00"] : blue["00"])};
    border-radius: 1rem;
    height: 500px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1.25rem;
    cursor: pointer;
    .date_al {
        display: none;
    }

    .header {
        height: 200px;
        width: 500px;
        padding: 2.25rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 1.3rem;
        rotate: 90deg;
        left: 30px;
        transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;
        .image {
                display: flex;
                width: 5rem;
                height: auto;
                aspect-ratio: 1 / 1;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 0.5rem;
            .wrapper {
                box-shadow: 0.2rem 0.2rem 0
                ${(props) => (props.color ? props.color["00"] : blue["00"])};
                border: 2px solid
                ${(props) => (props.color ? props.color["00"] : blue["00"])};
                width: 5rem;
                height: 5rem;
                border-radius: 50%;
                overflow: hidden;
                background-color: ${(props) =>
                props.color ? props.color["00"] : blue["00"]};
            }
            img {
                width: 100%;
                object-fit: cover;
            }
        }
        
        .text {
            h2 {
                font-size: ${typeScale.title};
                line-height: 2.4rem;
                width: 100%;
            }
            .position {
                display: none;
            }
        }
    }
    p {
        display: none;
        font-size: ${typeScale.text};
    }

    &.active {
        width: 600px;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 2rem;
        p {
            display: block;
        }

        .header {
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            rotate: 0deg;
            width: 100%;
            padding: 0.4rem;
            .image {
                .wrapper{
                    rotate: 0deg;
                }
            }

            .text {
                h2 {
                    font-size: 1.5rem;
                }
                .position {
                    display: block;
                    font-size: 1rem;
                    line-height: 2.4rem;
                    width: 100%;
                }
                p {
                    font-size: 1rem;
                }
            }
        }
    }






    

    @media screen and (max-width: 720px) {
        width: 100%;
        aspect-ratio: 1 / 1;
        height: auto;
        grid-column: span 1;
        grid-row: auto;
        .text {
            display: none;
        }
        .date_al {
            display: none;
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: center;
        },
        .header {
            transform: translateX(0);
            rotate: 0deg;
            .image {
                .wrapper {
                    width: 50%;
                    height: 50%;
                    rotate: 0deg;
                }
            }
        }

        &.active {
            width: 100%;
            aspect-ratio: 1 / 1;
            height: auto;
            grid-column: 1 / 5; // Adjusted to span across 3 columns
            grid-row: 1; // Adjusted to occupy the first row
            display: flex;
            justify-content: center;
            align-items: center;

            .text {
                display: block;
                h2 {
                    font-size: ${typeScale.title};  
                }
            }
            .header {
                height: auto;
                width: auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .text h2 {
                    text-align: center;
                }
                .text h3 {
                    text-align: center;
                }
                .text p {
                    text-align: center;
                }
                .image {
                    height: 4rem;
                }
                .image .wrapper {
                    height: 100%;
                    width: auto;
                    aspect-ratio: 1 / 1;
                }
            },
            .image {
                display: none;
            },
            .wrapper {
                width: auto;
            }
            .bio {
                display: none;
            }
        }
    }



    @media screen and (max-width: 1024px) {
        width: 100%;
        aspect-ratio: 1 / 1;
        height: auto;
        grid-column: span 1;
        grid-row: auto;
        .text {
            display: none;
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: center;
        },
        .header {
            transform: translateX(0);
            rotate: 0deg;
            .image {
                .wrapper {
                    width: 50%;
                    height: 50%;
                    rotate: 0deg;
                }
            }
        }

        &.active {
            width: 100%;
            aspect-ratio: 1 / 1;
            height: auto;
            grid-column: 1 / 5; // Adjusted to span across 3 columns
            grid-row: 1; // Adjusted to occupy the first row
            display: flex;
            justify-content: center;
            align-items: center;

            .text {
                display: block;
            }
            .header {
                height: auto;
                width: auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .text h2 {
                    text-align: center;
                }
                .text h3 {
                    text-align: center;
                }
                .text p {
                    text-align: center;
                }
                .image {
                    height: 4rem;
                }
                .image .wrapper {
                    height: 100%;
                    width: auto;
                    aspect-ratio: 1 / 1;
                }
            },
            .image,
            .wrapper {
                width: auto;
            }
            .bio {
                display: none;
            }
        }
    }



`;
