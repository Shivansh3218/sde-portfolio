"use client";

import React from "react";
import CertificationCard from "./CertificationCard";
import './style.css'
const certificationsData = [
  {
    title: "Advance JavaScript",
    description:
      "Received this certification after completing the course on Advance JavaScript concepts.",
    image: "/advancejs.jpg",
  },
  {
    title: "AWS Security Plan",
    description:
      "Completed the AWS Security Plan course through AWS training and certification",
    image: "/aws-security.png",
  },
  {
    title: "CCC by Govt. Of India",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/ccc.png",
  },
  {
    title: "Advanced Programming",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/comp.jpg",
  },
  {
    title: "Aircampus internship",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/AirCampus Internship Certificate.png",
  },
  {
    title: "TypeScript Certification",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/ts.png",
  },
  {
    title: " Node.js and Express ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/node.png",
  },
  {
    title: "Next JS project ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
    </div>
  );
};

export default CertificationsPage;
