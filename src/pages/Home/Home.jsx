import { Canvas } from "@react-three/fiber";
import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { NavbarContext } from "../../context";
import Dog from "./Dog";
import {
    AnimatedSpan,
    DogContainer,
    Hello,
    HomeWrapper,
    Name,
    Position,
    TextContainer,
    VideoContainter,
} from "./Home.styled";
import { DownloadButton } from "../Contact/Contact.styled";
import { red } from "../../utils";
import { AiOutlineDownload } from "react-icons/ai";

export const Home = () => {
    const { ref, inView } = useInView({
        threshold: 1,
    });

    const setPage = useContext(NavbarContext);

    useEffect(() => {
        if (inView) {
            setPage("home");
        }
    }, [inView]);

    const produceSpans = (name) => {
        return name.split("").map((letter, index) => (
            <AnimatedSpan
                index={index}
                letter={letter}
                aria-hidden="true"
                key={index}
            >
                {letter}
            </AnimatedSpan>
        ));
    };
    return (
        <HomeWrapper ref={ref} id="home-page">
            <VideoContainter >
                <video
                    id="background-video"
                    autoPlay
                    loop
                    muted
                    poster="../../src/assets/images/bg/black_hole.mov"
                > 
                    <source
                        src="../../src/assets/images/bg/black_hole.mov"
                        type="video/mp4"
                    />
                </video>
            </VideoContainter>
            <TextContainer>
                <Hello>Hello 👋, my name is</Hello>
                <Name>JEREMY DO</Name>
                <Position>
                    <div className="text first" aria-label="Software Developer">
                        {produceSpans("Software Developer")}
                    </div>
                    <div className="text second" aria-label="Full-stack Engineer">
                        {produceSpans("Full-stack Engineer")}
                    </div>
                    <div className="text third" aria-label="MLOps & DevOps Developer">
                        {produceSpans("MLOps & DevOps Developer")}
                    </div>
                    <div className="text forth" aria-label="Math National Olympiad">
                        {produceSpans("Math National Olympiad")}
                    </div>
                </Position>

                <a
                    href="../../../src/assets/images/edu/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <DownloadButton bg={red} tooltip="Download">
                        <AiOutlineDownload size={40} />
                        <span>My resume</span>
                    </DownloadButton>
                </a>
            </TextContainer>
            <DogContainer>
                <Canvas camera={{ position: [0, 2, 5] }}>
                    <Dog />
                </Canvas>
            </DogContainer>
        </HomeWrapper>
    );
};
