"use client"  
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "../(header)/Header.css";

const Header = () => {
  const headerRef = useRef(null);


  return (
    <header className="header" id="myHeader" ref={headerRef}>
      <div className="logo">
        <Image
          src="/profile.jpg"
          alt="Next.js Logo"
          width={50}
          height={37}
          priority
        />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a
              href="/"
            
            >
              Home
            </a>
          </li>
         
        </ul>
      </nav>
      <a href="/resume.pdf" download>
        <button className="resume-button">Resume</button>
      </a>
    </header>
  );
};

export default Header;