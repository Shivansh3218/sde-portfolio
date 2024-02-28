// MainSection.js

import React from "react";
import "./MainSection.css"; // Import the CSS file for styling
import Image from "next/image";

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="description">
        <h1 className="name">Shivansh Rawat</h1>
        <p className="role">Software Developer</p>
        <p className="short-description">
          Hey there! I'm Shivansh Rawat, a Full Stack Developer . I'm a
          passionate learner who's always willing to learn and work across
          technologies and domains. I love to explore new technologies and
          leverage them to solve real-life problems.
        </p>
      </div>
      <div className="image-container">
        {/* Replace the placeholder image with your actual image */}
        <Image
          //   className={styles.logo}
          src="/bg-imh.png"
          alt="Next.js Logo"
          width={500}
          height={37}
          priority
          style={{
            opacity: 0.8,
          }}
        />
      </div>
    </section>
  );
};

export default MainSection;
