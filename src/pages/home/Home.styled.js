import styled, { keyframes } from "styled-components";
import { PageHeader, PageHeaderStyled } from "../../components/ui";
import { electricGreen, novaViolet, typeScale } from "../../utils";

export const HomeWrapper = styled.main`
    display: grid;
    height: 100vh;
    width: 100%;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;
    // overflow: hidden;
    curser: context-menu;
    z-index: 100;

    @media screen and (max-width: 920px) {
        margin-top: 12rem;
        grid-template-rows: 1fr 1fr;
    }
`;

export const VideoContainter = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: -2;
    top: -50%;
    margin-top: 7.3rem;
    padding: 0;

    #background-video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        position: absolute;
        left: 0;
        right: 0;
        rotate: 180deg;
        bottom: 0;
        z-index: -2;
        overflow: hidden;
        cursor: default;
    }

    @media screen and (max-width: 920px) {
        margin-top: 2rem;
        grid-template-rows: 1fr 1fr;
    }
`

export const DogContainer = styled.aside`
    grid-column: 8/13;
    overflow: hidden;

    @media screen and (max-width: 920px) {
        grid-column: 1/ 13;
        align-self: start;
        height: 100%;
        width: auto;
    }
`;

export const TextContainer = styled.section`
    grid-column: 2/ 8;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;


    @media screen and (max-width: 1204px) {
        gap: 2.5rem;
    }
    @media screen and (max-width: 920px) {
        grid-column: 1/ 13;
        align-items: center;
        justify-content: center;
        width: 100%;
        align-self: end;
        padding-inline: 1rem;
        justify-self: center;
        align-self: center;

        #download_wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    @media screen and (max-width: 480px) {
        gap: 1.5rem;
    }
`;

export const Hello = styled.p`
  font-size: ${typeScale.text};
  font-weight: bolder;
  margin: 0;
  background: white;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, #ddd 100%);
  line-height: 1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media screen and (max-width: 1204px) {
    font-size: ${typeScale.text};
  }

  @media screen and (max-width: 480px) {
    font-size: ${typeScale.text};
    text-align: center;
  }
`

export const Name = styled.h1`
  font-size: ${typeScale.bigDisplay};
  font-weight: bolder;
  margin: 0;
  background: white;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, #ddd 100%);
  line-height: 1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 1204px) {
    font-size: ${typeScale.display};
  }

  @media screen and (max-width: 480px) {
    font-size: ${typeScale.headline};
    text-align: center;
  }
`;

const textRotate1 = keyframes`
0%{
  transform: translate3d(0, 0%, 0) rotateX(0deg)
}
20%{
  transform: translate3d(0, 0%, 0) rotateX(0deg)
}
25%{
  transform: translate3d(0, -100%, 0) rotateX(-90deg);
}
95%{
  transform: translate3d(0, -100%, 0) rotateX(-90deg);
}
100%{
  transform: translate3d(0, 0%, 0) rotateX(0deg)
}
`;

const textRotate2 = keyframes`
0%{
  transform: translate3d(0, 100%, 0) rotateX(-90deg);
}
20%{
  transform: translate3d(0, 100%, 0) rotateX(-90deg);
}
25%{
  transform: translate3d(0, 0%, 0) rotateX(0deg);
}
45%{
  transform: translate3d(0, 0%, 0) rotateX(0deg);
}
50%{
  transform: translate3d(0, 100%, 0) rotateX(-90deg);
}
100%{
  transform: translate3d(0, 100%, 0) rotateX(-90deg);
}
`;

const textRotate3 = keyframes`
0%{
  transform: translate3d(0, -100%, 0) rotateX(-90deg);
}
45%{
  transform: translate3d(0, -100%, 0) rotateX(-90deg);
}
50%{
  transform: translate3d(0, 0%, 0) rotateX(0deg);
}
70%{
  transform: translate3d(0, 0%, 0) rotateX(0deg);
}
75%{
  transform: translate3d(0, -100%, 0) rotateX(-90deg);
}
100%{
  transform: translate3d(0, -100%, 0) rotateX(-90deg);
}
`;

const textRotate4 = keyframes`
0%{
  transform: translate3d(0, 100%, 0) rotateX(-90deg);
}
70%{
  transform: translate3d(0, 100%, 0) rotateX(-90deg);
}
75%{
  transform: translate3d(0, 0%, 0) rotateX(0deg);
}
95%{
  transform: translate3d(0, 0%, 0) rotateX(0deg);
}
100%{
  transform: translate3d(0, 100%, 0) rotateX(-90deg);
}
`;

export const Position = styled(PageHeaderStyled)`
    background: unset;
    line-height: unset;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset;
    margin-block: 0;
    margin-inline: 0;
    margin: 0;
    padding: 0;
    position: relative;
    color: ${electricGreen["40"]};
    cursor: default;
    width: auto;
    .text {
        left: 0;
        span {
            display: inline-block;
            will-change: transform;
            transform-style: preserve-3d;
            transform-origin: bottom;
            animation: ${textRotate1} 8s infinite;
        }
        &.second {
            color: ${novaViolet["50"]};
            position: absolute;
            top: 2%;
            // left: 0;
            span {
                transform-origin: bottom;
                transform: translate3d(0, 100%, 0) rotateX(-90deg);
                animation: ${textRotate2} 8s infinite;
            }
        }
        &.third {
            color: ${electricGreen["40"]};
            position: absolute;
            top: 2%;
            // left: 0;
            span {
                transform-origin: bottom;
                transform: translate3d(0, 100%, 0) rotateX(-90deg);
                animation: ${textRotate3} 8s infinite;
            }
        }
        &.forth {
            color: ${novaViolet["50"]};
            position: absolute;
            top: 2%;
            // left: 0;
            span {
                transform-origin: bottom;
                transform: translate3d(0, 100%, 0) rotateX(-90deg);
                animation: ${textRotate4} 8s infinite;
            }
        }
    }

    @media screen and (max-width: 720px) {
        font-size: ${typeScale.subtitle};
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .text {
            font-size: ${typeScale.subtitle};
        }
        .text.first {
            left: auto;
        }
        .text.second {
            left: auto;
        }
        .text.third {
            left: auto;
        }
        .text.forth {
            left: auto;
        }
    }
    @media screen and (max-width: 920px) {
        font-size: ${typeScale.helperText};
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .text {
            left: auto;
        }
    }
    @media screen and (max-width: 1204px) {
        font-size: ${typeScale.title};
        width: 100%;
    }



`;

export const AnimatedSpan = styled.span`
  transition: 0.5s;
  animation-delay: ${(props) => props.index * 0.05}s !important;
  padding: ${(props) => (props.letter === " " ? "0.325rem" : null)};
`;
