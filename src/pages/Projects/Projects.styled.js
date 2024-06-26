import styled from "styled-components";

export const ProjectContainer = styled.section`
  grid-column: 1/ 13;
  width: 100%;
  transition: transform 1s cubic-bezier(0.46, 0.35, 0, 1.27);
  align-self: center;
  .wrapper_project {
    scroll-behavior: smooth;
    flex-shrink: 0;
    display: flex;
    overflow-x: auto;
    justify-content: start;
    align-items: center;
    overflow-y: hidden;
    padding-inline-end: 2rem;
    background: linear-gradient(180deg);
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
  }
`;

export const VideoContainter = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: -2;
    padding: 0;

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

export const Carasoul = styled.div`
  grid-column: 1/13;
  display: flex;
  justify-content: center;
  gap: 1rem;

  button {
    all: unset;
    cursor: pointer;
    padding: 0.5rem;
  }

  svg {
    width: 60px;
  }
  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
  }
`;
