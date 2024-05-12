"use client";
import "./style.css";
import Image from "next/image";

const ExperienceCard = ({ title, image, description }) => {
  return (
    <a className="card" href="https://c4ca.in" target="_blank">
      <Image
        src={image}
        alt={title}
        className="card-img-top"
        width={500} // replace with your desired width
        height={300} // replace with your desired height
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </a>
  );
};

const ExperiencesPage = () => {
  const experiences = [
    {
      title: "Meraki Website",
      image: "/meraki.png",
      description:
        "Company website where my role was to introduce newpathway and handle the authentication.",
    },
    {
      title: "C4CA Website",
      image: "/c4ca.png",
      description:
        "A web app created for Amazon which could handle the bootcamp training for learning coding.",
    },
    {
      title: "Event Scheduler Website",
      image: "/bhool.png",
      description:
        "It was a website to schedule events and manage them. It was a project created to have a jist of redux and react.",
    },
    {
      title: "Samyarth Website",
      image: "/samyarth.png",
      description:
        "The company website in which I was responsible for handling the majority of UI component and routing.",
    },
    {
      title: "Cryptocurrency Dashboard",
      image: "/portfolio.png",
      description: "Brief description of your first experience.",
    },

    {
      title: "Boat Clone Website",
      image: "/boat.png",
      description:
        "An HTML CSS and JS boat website clone using vanilla javascript.",
    },
  ];

  return (
    <div className="experience-grid">
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </div>
  );
};

export default ExperiencesPage;
