import latex from "../assets/images/project/latex.webp";
import sql from "../assets/images/project/sql.jpeg";
import cornell from "../assets/images/project/cornell.jpeg";
import sentiment from "../assets/images/project/sentiment.jpeg";
import hand from "../assets/images/project/hand.jpeg";
import key from "../assets/images/project/key.jpeg";
import chatbot from "../assets/images/project/chatbot.jpeg";
import pacman from "../assets/images/project/pacman.jpeg";
import art from "../assets/images/project/art.jpeg";



export const projects = [
  {
    title: "TikTok TechJam Hackathon 2024 - Image 2 LaTex converter",
    image: latex,
    github: "https://github.com/dohoanggiahuy317/image2latex-App",
    description:
      "Built a full-stack app to convert images to LaTeX on AWS S3 to reduce learning stress for 500 students in my department.",
  },
  {
    title: "Student Teamwork Management SQL System",
    image: sql,
    github: "https://github.com/dohoanggiahuy317/SQL_Management_System_Proj",
    description:"Created a light SQL engine with distributed Parallel Buffer Pool for managing 3,000 teamwork assignments at my college.",
  },
  {
    title: "Cornell University Hackathon 2020",
    image: cornell,
    github: "https://github.com/dohoanggiahuy317/Self_driving-Car-Obstacle-n-Sign-Detect-Proj",
    description:
      "Built an autonomous software system utilizing OpenCV and created 3D printed prototype of self-driving car using AutoCAD.",
  },
  {
    title: "Sentiment Analysis with LSTM and Attention ",
    image: sentiment,
    github: "https://github.com/dohoanggiahuy317/Sentiment-Analysis-LSTM-vs-Attention-App",
    description:"Developed 2 Bi-LSTM and Attention NLP models to analyze users’ feedback on online shopping site, achieving 89% accuracy.",
  },
  {
    title: "Hand gesture Computer Control app",
    description: "Designed a motion detection system using OpenCV that issues commands to a computer via Autopy, enabling handicapped individuals to operate a computer.",
    image: hand,
    github: "https://github.com/dohoanggiahuy317/Hand-Gesture-Computer-Control-App",
  },
  {
    title: "Distributed Key-Value storage",
    description: "Developed a distributed key-value storage system in Rust with the CURB consensus protocol. Utilized RocksDB batch processing to reduce execution time by 30% for transactions and basic key-value operations.",
    image: key,
    github: "https://github.com/dohoanggiahuy317/Distributed-Key-Value-storage-Proj",
  },
  {
    title: "Machine Learing Chatbot App",
    description: "Developed 4 bots using chatBot and NLTK framework and trained on the Cornell Movie-Dialogs Corpus database.",
    image: chatbot,
    github: "https://github.com/dohoanggiahuy317/Premoji-ML_Chatbot-App",
  },
  {
    title: "Pacman game App",
    description: "Recreated Pac-man game as a Full stack Java app. Designed 20+ different maps and levels for playes",
    image: pacman,
    github: "https://github.com/dohoanggiahuy317/Pakman-game-App",
  },
  {
    title: "Hanoi Digital Art Gallery",
    description: "Built a website to store all Hanoi images using HTML5/CSS and Javascript",
    image: art,
    github: "https://github.com/dohoanggiahuy317/JaWeee-Art-portfolio-Web",
    link: "https://jaweee-art-gallery.netlify.app/",
  }
];
