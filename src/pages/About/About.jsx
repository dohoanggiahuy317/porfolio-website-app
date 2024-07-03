import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { red, yellow, blue } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text, EduTitle, VideoContainter } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import denison from "../../assets/images/edu/denison.png"
import vinuni from "../../assets/images/edu/vinuni.png";
import ams from "../../assets/images/edu/ams.png";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { StarsCanvas } from '../StarBackground';


export const About = () => {
    const { ref, inView } = useInView({});
    const [show, setShow] = useState(inView);
    useEffect(() => {
        setShow(inView);
    }, [inView]);

    useEffect(() => {
        gsap.registerPlugin(Flip);
        let cards = document.querySelectorAll(".about-item");
        cards.forEach((card, i) => {
            if (i === 0) {
                card.classList.add("active");
            }
            card.addEventListener("mouseenter", (e) => {
                if (card.classList.contains("active")) {
                    return;
                }
                const state = Flip.getState(cards);
                cards.forEach((c) => {
                    c.classList.remove("active");
                });
                card.classList.add("active");
                Flip.from(state, {
                    duration: 0.5,
                    ease: "elastic.out(1,0.9)",
                    absolute: true,
                });
            });
        });
    }, []);
    return (
        <div ref={ref}>
            <Page header="About">
                <StarsCanvas />
                <VideoContainter >
                    <video
                        id="background-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster=".https://1d9acuwmhputhvdf.public.blob.vercel-storage.com/ball-QzzLRI0pNiHz1OCqsLTlSBGGp1IwXp.mov"
                    >
                        <source
                            src="https://1d9acuwmhputhvdf.public.blob.vercel-storage.com/ball-QzzLRI0pNiHz1OCqsLTlSBGGp1IwXp.mov"
                            type="video/mp4"
                        />
                    </video>
                </VideoContainter>
                <Text>
                    <Paragraph>
                        I'm a driven computer science and applied mathematics student at Denison University,
                        deeply passionate about harnessing technology to revolutionize healthcare and finance.
                        I'm eager to use my ability to develop impactful applications that enhance people's lives.
                        <br /><br />
                        My passion for technology stems from its
                        transformative power to empower individuals and communities.
                        I've witnessed firsthand how accessible education can change lives,
                        which has fueled my commitment to creating
                        inclusive, user-friendly solutions that break down barriers.
                        I strive to empower people from all backgrounds through my work.
                    </Paragraph>

                    <EduTitle>
                        <h1>My Education</h1>
                    </EduTitle>
                    <Educations>
                        <AboutItem
                            color={red}
                            active
                            data={{
                                title: "Denison University",
                                major: "BSc in Computer Science & Math",
                                grad: "Graduation: May 2026",
                                location: "Granville, OH, USA",
                                image: denison,
                            }}
                        />
                        <AboutItem
                            color={blue}
                            data={{
                                title: "VinUniversity",
                                major1: "BSc in Computer Science",
                                grad: "Full tuition Scholarship 2021",
                                location: "Hanoi, Vietnam",
                                image: vinuni,
                            }}
                        />
                        <AboutItem
                            color={yellow}
                            data={{
                                title: "Hanoi-Amsterdam Highschool",
                                major: "Mathematics major",
                                grad: "Graduation: May 2021",
                                location: "Hanoi, Vietnam",
                                image: ams,
                            }}
                        />
                    </Educations>
                </Text>
                <SkillsWrapper>
                    {show ? (
                        <Canvas camera={{ position: [0, 0, 18] }}>
                            <Skills />
                        </Canvas>
                    ) : (
                        `${inView}`
                    )}
                </SkillsWrapper>
            </Page>
        </div>
    );
};
