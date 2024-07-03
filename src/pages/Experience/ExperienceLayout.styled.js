import styled from "styled-components";

export const StyledExperienceLayout = styled.div`
    grid-column: 2/ 12;
    align-self: start;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    height: 100%;

    @media screen and (max-width: 1024px) {
        grid-column: 2 / 12;
        padding-inline: 1rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr); // Adjusted to 3 columns
        grid-template-rows: auto; // Adjusted to auto rows
        align-items: start;
        height: auto;
    }

    @media screen and (max-width: 720px) {
        grid-column: 1 / 7;
        padding-inline: 1rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr); // Adjusted to 3 columns
        grid-template-rows: auto; // Adjusted to auto rows
        align-items: start;
        height: auto;
    }

`;
