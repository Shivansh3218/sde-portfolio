"use client";

import React from "react";
import CertificationCard from "./CertificationCard";
import './style.css'
import Footer from "../footer/Footer";
const certificationsData = [
  {
    title: "Advance JavaScript",
    description:
      "Mastered advanced JavaScript concepts through comprehensive training.",
    image: "/advancejs.jpg",
  },
  {
    title: "AWS Security Plan",
    description:
      "Successfully completed the AWS Security Plan course offered by AWS training and certification.",
    image: "/aws-security.png",
  },
  {
    title: "CCC by Govt. Of India",
    description: "Certified by the Government of India in Computer Concepts.",
    image: "/ccc.png",
  },
  {
    title: "Advanced Programming",
    description: "Excelled in advanced programming techniques and methodologies.",
    image: "/comp.jpg",
  },
  {
    title: "Aircampus internship",
    description: "Completed an internship program at Aircampus.",
    image: "/AirCampus Internship Certificate.png",
  },
  {
    title: "TypeScript Certification",
    description: "Achieved certification in TypeScript programming language.",
    image: "/ts.png",
  },
  {
    title: "Node.js and Express",
    description: "Proficient in building web applications using Node.js and Express.",
    image: "/node.png",
  },
  {
    title: "Next JS project",
    description: "Developed a project using Next.js for enhanced web application performance.",
    image: "/nextjs.png",
  },
];

const CertificationsPage = () => {
  return (
    <div id="certification">
      <h1>
        Certifications
      </h1>
      <CertificationCard certifications={certificationsData} />
      <Footer/>
    </div>
  );
};

export default CertificationsPage;
