"use client";
import React from "react";
import Image from "next/image"; // Import Image from nextjs
import "./style.css"; // Importing the CSS file

function Skill() {
  const skills = [
    { src: "/logos/css.png", alt: "Batman" },
    { src: "/logos/docker.webp", alt: "Spiderman" },
    { src: "/logos/express.png", alt: "Black Adam" },
    { src: "/logos/figma.png", alt: "Iron Man" },
    { src: "/logos/Firebase.png", alt: "SuperMan" },
    { src: "/logos/gitwhite.png", alt: "Captain America" },
    { src: "/logos/html.png", alt: "Black Panther" },
    { src: "/logos/js.png", alt: "Aquaman" },
    { src: "/logos/mui.png", alt: "Hulk" },
    { src: "/logos/mysql.png", alt: "Flash" },
    { src: "/logos/next.png", alt: "Thor" },
    { src: "/logos/node-js.png", alt: "Ant-Man" },
    { src: "/logos/postger.png", alt: "Wonder Woman" },
    { src: "/logos/react.png", alt: "Green Lantern" },
    { src: "/logos/Reactquery.png", alt: "Green Lantern" },
    { src: "/logos/redux.png", alt: "Green Lantern" },
    { src: "/logos/tailwind.png", alt: "Green Lantern" },
    { src: "/logos/ts.png", alt: "Green Lantern" },
  ];
  return (
    <div className="wrapper" id="skill">
      <h1 id="skills-heading">My Skills</h1>
      <div className="slider">
        <div className="slide-track">
          {skills.reverse().map((skill, index) => (
            <div key={index} className="slide">
              <Image src={skill.src} alt={skill.alt} width={500} height={300} />
            </div>
          ))}
        </div>
      </div>
      <div className="slider-reverse">
        <div className="slide-track-reverse">
          {skills.map((skill, index) => (
            <div key={index} className="slide-reverse">
              <Image src={skill.src} alt={skill.alt} width={500} height={300} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
