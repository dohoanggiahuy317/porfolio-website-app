import { useFrame, extend } from "@react-three/fiber";
import SpriteText from "three-spritetext";
import { OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { useIsMobile } from "../../hooks";
extend({ SpriteText });

const Skills = () => {
  const { isMobile } = useIsMobile();
  const [scale, setScale] = useState(0.05);
  
  const getPos = (k) => {
    let a = Math.random();
    let b = Math.random();
    return b > 0.5 ? a * k : a * -1 * k;
  };
  
  const skills = [
    "C/C++", "Java", "JavaScript", "Python", "React", "Assembly", "Spring Boot", "Firebase", "Git", "Postman", 
    "CI/CD", "CRUD", "RPC", "AngularJS", "Swift",
    "Docker", "Kubernetes", "MySQL", "PostgreSQL", "Redis", "Monasca", "OpenStack", "AWS", "Azure", 
    "Kafka", "RabbitMQ"
  ];
  
  const g = useRef();
  
  useFrame(() => {
    g.current.rotation.x += 0.00073;
    g.current.rotation.y += 0.00063;
    g.current.rotation.z += 0.001;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 720 || window.innerWidth > 1024 ) {
        setScale(0.1);  // Adjust this value based on your requirement for small screens
      } else {
        setScale(0.07);  // Adjust this value based on your requirement for larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    
    // Set initial scale based on current window width
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <>
      {isMobile ? null : <OrbitControls enablePan={false} enableZoom={false} />}
      <pointLight position={[-2, 2, 2]} args={["#fff", 0.3]} />
      <group ref={g} position={[0, 2, 0]} scale={scale}>
        {skills.map((a, i) => {
          return (
            <spriteText
              text={a}
              key={i}
              fontSize={90}
              position={[getPos(80), getPos(80), getPos(80)]}
              fontFace={"'Fira Code','Roboto Mono', monospace"}
              color={i % 2 === 0 ? "#FAFF81" : "#E06D06"}
            />
          );
        })}
      </group>
    </>
  );
};

export default Skills;
