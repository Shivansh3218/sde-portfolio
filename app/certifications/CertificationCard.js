"use client"
import React from 'react';
import Image from 'next/image';
import "./style.css"

const CertificationCard = ({ certifications }) => {
  return (
    <div className="certification-container" >
      {certifications.map((cert, index) => (
        <div key={index} className="certification-card">
           <Image
          src={cert.image }
          alt="Next.js Logo"
          width={300}
          height={180}
          priority
        />
          <h3>{cert.title}</h3>
          <p>{cert.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CertificationCard;
