import deloitte from "../assets/images/exp/deloitte.jpg";
import fpt from "../assets/images/exp/fpt.png";
import microsoft from "../assets/images/exp/microsoft.png";
import data from "../assets/images/exp/data.png";
import denison from "../assets/images/edu/denison.png";

import { plasmaOrange, green, cyberBlue, stellarCyan, cosmicCoral} from "../utils";

export const experiences = [
  {
    logo: deloitte,
    name: "Deloitte",
    joined: "05/2024",
    end: "08/2024",
    location: "Hanoi, Vietnam",
    title: "Software Engineer Intern",
    bio: `Utilized Jmix and Spring Boot to develop features for 
    monitoring and securing 4,000+ bank transactions and contracts per day.`,
    color: green,
  },
  {
    logo: fpt,
    name: "FPT Software",
    joined: "07/2023 ",
    end: "09/2023",
    location: "Hanoi, Vietnam",
    title: "Software Engineer Intern",
    bio: `Designed a soft deletion feature to facilitate data center procedure 
    correction using C#, Amazon RDS, and DynamoDB, reducing computing costs by 65% for 
    85 cloud-based virtual machines.`,
    color: plasmaOrange,
  },
  {
    logo: microsoft,
    name: "VinBrain x Microsoft Lab",
    joined: "05/2022",
    end: "09/2022",
    location: "Hanoi, Vietnam",
    title: "Software Engineer Intern",
    bio: `Developed a Spring Boot microservice booking app to support 100+ 
    patients and doctors during the COVID-19 pandemic.`,
    color: cyberBlue,
  },
  {
    logo: data,
    name: "Above Data",
    joined: "01/2024",
    end: "04/2024",
    location: "Granville, OH, USA",
    title: "Data Engineer Intern",
    bio: `Designed a RAG pipeline with LLMs to generate natural responses to customer 
    queries about information on 500+ retail brands.`,
    color: stellarCyan,
  },
  {
    logo: denison,
    name: "Denison University Research Lab",
    joined: "05/2023",
    end: "07/2023",
    location: "Hanoi, Vietnam",
    title: "Data Engineer Intern",
    bio: `Proposed a multi-threaded pipeline to generate a high-quality 
    dataset of 77,000 data entries for LLMs model training.
    Link to paper <a href="https://arxiv.org/abs/2309.05103v1" style="color: white;">here.<a>`,
    color: cosmicCoral,
  },
];
