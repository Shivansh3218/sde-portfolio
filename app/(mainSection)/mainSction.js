// MainSection.js

import React from "react";
import "./MainSection.css"; // Import the CSS file for styling
import Image from "next/image";
import About from "../(about)/about";

const MainSection = () => {
  return (
    <section className="main-section">
      <About />
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
