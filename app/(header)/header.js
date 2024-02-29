"use client"

// Header.js
import Image from 'next/image';
import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Your logo image or text goes here */}
        <Image
        //   className={styles.logo}
          src="/profile.jpg"
          alt="Next.js Logo"
          width={50}
          height={37}
          priority
        />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#certification">Certificates</a></li>
          <li><a href="#skill">Skill</a></li>
        </ul>
      </nav>
      <button className="resume-button">Resume</button>
    </header>
  );
};

export default Header;
