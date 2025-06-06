import styled, { keyframes } from "styled-components";
import { neonPurple, typeScale } from "../../utils";

const fadeIn = keyframes`
  0%{ 
    translate: 0 200px 0;
  }
  100%{
    translate: 0 0 0;
  }
`;

export const Cube = styled.div`
  translate: 0 200px 0;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(35deg) rotateY(45deg);
  width: 500px;
  height: 540px;
  display: flex;
  align-items: flex-end;
  flex-shrink: 0;
  &:hover {
    transform: rotateY(0) scale(1.5) translateX(20%) translateY(-20%);
  }
  transition: all 0.2s cubic-bezier(0.4, 0.55, 0.2, 1.03);
  @media screen and (max-width: 720px) {
    width: 400px;
    height: 440px;
  }

  &.fadeIn {
    animation: ${fadeIn} 500ms ease forwards;
    animation-delay: ${(props) => props.index * 0.05}s;
  }
`;





export const Face = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  overflow: hidden;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  &.face-2 {
    background-color: ${neonPurple["20"]};
    transform: rotateY(90deg);
    transform-origin: right;
    box-shadow: -0.6rem 0.6rem 0 ${neonPurple["00"]};
    .text {
      height: 100%;
      transform: rotateY(180deg);
      display: flex;
      padding: 0.5rem;
      align-items: flex-end;
      font-size: ${typeScale.text};
    }
  }
  &.face-3 {
    background-color: ${neonPurple["50"]};
    transform: rotateX(90deg);
    transform-origin: top;
    .text {
      transform: rotateX(180deg);
      padding: 0.5rem;
      font-size: ${typeScale.subtitle};
      line-height: 2.2rem;
    }
  }
  &.face-1 {
    box-shadow: 0.6rem 0.2rem 0 ${neonPurple["00"]};

    .img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        transition: all 0.2s ease;
        background-image: url(${(props) => props.image});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

    }

    .content {
      transition: all 0.2s ease;
      opacity: 0;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 100%;
      .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    &:hover {
      box-shadow: 0.6rem 0.6rem 0 ${neonPurple["00"]};
      .content {
        opacity: 1;
        transform: scale(0.8);
        height: 100%;
      }
      .img {
        filter: brightness(15%) grayscale(100%) blur(5px);
      }
    }
  }

  @media screen and (max-width: 720px) {
    width: 240px;
    height: 240px;
    &.face-1 {
      .img {
        background-size: auto 100%;
      }
      .content {
        .text-h {
          font-size: ${typeScale.paragraph};
        }
        .text-p {
          font-size: ${typeScale.helperText};
          line-height: 1.2rem;
        }
        .buttons {
          justify-content: space-around;
          button {
            transform: scale(0.8);
          }
        }
      }
    }
    &.face-2 {
      .text {
        font-size: ${typeScale.paragraph};
        line-height: 1.2rem;
      }
    }
    &.face-3 {
      .text {
        font-size: ${typeScale.text};
        line-height: 1.2rem;
      }
    }
  }
`;
