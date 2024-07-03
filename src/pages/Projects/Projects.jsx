import React, { useRef } from "react";
import { Page } from "../../components/Page";
import { projects } from "../../data";
import { NextButton } from "./carasoulButton";
import { ProjectItem } from "./ProjectItem";
import { Carasoul, ProjectContainer, VideoContainter } from "./Projects.styled";
import { StarsCanvas } from '../StarBackground';

export const Projects = () => {
    const ref = useRef(null);

    const moveLeft = (e) => {
        console.log(ref.current.scrollLeft);
        document.querySelector(".wrapper_project").scrollLeft += 600;
    };
    const moveRight = (e) => {
        document.querySelector(".wrapper_project").scrollLeft -= 650;
    };

    return (
        <Page header="Projects">
            <StarsCanvas />
            <VideoContainter >
                <video
                    id="background-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://1d9acuwmhputhvdf.public.blob.vercel-storage.com/encrypt-a0CgQuW0Nj0FTgNjiajs8a9VLkyP0x.mov"
                >
                    <source
                        src="https://1d9acuwmhputhvdf.public.blob.vercel-storage.com/encrypt-a0CgQuW0Nj0FTgNjiajs8a9VLkyP0x.mov"
                        type="video/mp4"
                    />
                </video>
            </VideoContainter>
            <ProjectContainer ref={ref}>
                <div className="wrapper_project">
                    {projects.map((data, index) => (
                        <ProjectItem data={data} key={index} index={index} />
                    ))}
                </div>
            </ProjectContainer>
            <Carasoul>
                <NextButton flip onClick={moveRight} />
                <NextButton onClick={moveLeft} />
            </Carasoul>
        </Page>
    );
};
