"use client";

// Header.js
import Image from "next/image";
import React from "react";
import Link from "next/link";
import "./Header.css"; // Import the CSS file for styling

const Header = () => {

  // When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get the header element
var header = document.getElementById("myHeader");

// Get the offset position of the header
var sticky = header?.offsetTop;

// Add the "sticky" class to the header when it reaches its scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
      header?.classList.add("sticky");
  } else {
      header?.classList.remove("sticky");
  }
}

  return (
    <header className="header" id="myHeader">
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
          <li>
            <a href=".main-section"
                     onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(".main-section")
                        .scrollIntoView({ behavior: "smooth" });
                    }}>Home</a>
          </li>
          <li>
            <a href="#certification"
             onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#certification")
                .scrollIntoView({ behavior: "smooth" });
            }}
            >Certificates</a>
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
      <button className="resume-button">Resume</button>
    </header>
  );
};

export default Header;
