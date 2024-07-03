import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineDownload,
    AiOutlineMail,
} from "react-icons/ai";
import { Button, Input, Textarea } from "../../components/form";
import { Page } from "../../components/Page";
import { cyberBlue, electricGreen, neonPurple, stellarCyan } from "../../utils";
import Dog from "../Home/Dog";
import lego from "../../assets/3d/lego.glb";

import {
    ContactForm,
    ContactWrapper,
    DownloadButton,
    IconButton,
    DogContainer
} from "./Contact.styled";
import { StarsCanvas } from '../StarBackground';

export const Contact = () => {
    const [form, setFormState] = useState({ name: "", email: "", message: "" });
    return (
        <Page header="Contact">
            <StarsCanvas />
            <ContactWrapper>
                <ContactForm
                    action="https://formspree.io/f/mbjbvlpv"
                    method="POST"
                    name="contact"
                    id="contactform"
                >
                    <Input
                        placeholder="Name"
                        type="text"
                        name="name"
                        onChange={(e) => {
                            setFormState((prev) => ({ ...prev, name: e.target.value }));
                        }}
                        value={form.name}
                    />
                    <Input
                        placeholder="Email"
                        type="email"
                        name="email"
                        onChange={(e) => {
                            setFormState((prev) => ({ ...prev, email: e.target.value }));
                        }}
                        value={form.email}
                    />
                    <Textarea
                        lines={15}
                        placeholder="Hi! How are you?"
                        name="message"
                        onChange={(e) => {
                            setFormState((prev) => ({ ...prev, message: e.target.value }));
                        }}
                        value={form.message}
                    />
                </ContactForm>
                <div className="buttons">
                    <div className="socials">
                        <a
                            href="https://www.linkedin.com/in/do-hoang-gia-huy-bbb05921b"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconButton bg={cyberBlue}>
                                <AiFillLinkedin size={40} />
                            </IconButton>
                        </a>

                        <a href="mailto:dohoanggiahuy310703@gmail.com">
                            <IconButton bg={electricGreen}>
                                <AiOutlineMail size={40} />
                            </IconButton>
                        </a>

                        <a
                            href="https://github.com/dohoanggiahuy317"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconButton bg={neonPurple}>
                                <AiFillGithub size={40} />
                            </IconButton>
                        </a>

                        <a
                            href="src/assets/images/edu/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <DownloadButton bg={stellarCyan} tooltip="Download">
                                <AiOutlineDownload size={40} />
                                <span>Resume</span>
                            </DownloadButton>
                        </a>
                    </div>
                    <Button
                        disabled={
                            form.email.length <= 0 ||
                            form.name.length <= 0 ||
                            form.message.length <= 0
                        }
                        onClick={() => {
                            document.forms["contact"].submit();
                        }}
                    >
                        Submit
                    </Button>
                </div>
                <DogContainer>
                    <Canvas camera={{ position: [0, 2, 5] }}>
                        <Dog source={lego}/>
                    </Canvas>
                </DogContainer>
            </ContactWrapper>

            
        </Page>
    );
};
