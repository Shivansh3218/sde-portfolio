"use client"  
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "./Header.css";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const sticky = header?.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header?.classList.add("sticky");
      } else {
        header?.classList.remove("sticky");
      }
    }

    window.onscroll = myFunction;

    // Cleanup function to remove the event listener
    return () => {
      window.onscroll = null;
    };
  }, []);

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
              href=".main-section"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(".main-section")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#certification"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#certification")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Certificates
            </a>
          </li>
          <li>
            <a
              href="#skill"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#skill")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Skill
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