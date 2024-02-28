"use client";

import React, { useEffect } from "react";
import Image from "next/image"; // Import Image from nextjs
import "./style.css"; // Importing the CSS file

function Skill() {
  useEffect(() => {
    // const copy = document.querySelector(".logos-slide").cloneNode(true);
    // document.querySelector(".logos").appendChild(copy);

    // Cleanup function
    return () => {
      // Remove the appended copy when component unmounts
    //   document.querySelector(".logos").removeChild(copy);
    };
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <>
        <div className="logos">
      <div className="logos-slide">
        <Image width={150} height={137} src="/3m.svg" alt="3M" />
        <Image width={150} height={137} src="/barstool-store.svg" alt="Barstool Store" />
        <Image width={150} height={137} src="/budweiser.svg" alt="Budweiser" />
        <Image width={150} height={137} src="/buzzfeed.svg" alt="BuzzFeed" />
        <Image width={150} height={137} src="/forbes.svg" alt="Forbes" />
        <Image width={150} height={137} src="/macys.svg" alt="Macys" />
        <Image width={150} height={137} src="/menshealth.svg" alt="Mens Health" />
        <Image width={150} height={137} src="/mrbeast.svg" alt="Mr. Beast" />
        <Image width={150} height={137} src="/forbes.svg" alt="Forbes" />
        <Image width={150} height={137} src="/macys.svg" alt="Macys" />
        <Image width={150} height={137} src="/menshealth.svg" alt="Mens Health" />
        <Image width={150} height={137} src="/mrbeast.svg" alt="Mr. Beast" />
      </div>
    </div>
    
    {/* <div className="logos2">
      <div className="logos-slide2">
        <Image width={150} height={137} src="/3m.svg" alt="3M" />
        <Image width={150} height={137} src="/barstool-store.svg" alt="Barstool Store" />
        <Image width={150} height={137} src="/budweiser.svg" alt="Budweiser" />
        <Image width={150} height={137} src="/buzzfeed.svg" alt="BuzzFeed" />
        <Image width={150} height={137} src="/forbes.svg" alt="Forbes" />
        <Image width={150} height={137} src="/macys.svg" alt="Macys" />
        <Image width={150} height={137} src="/menshealth.svg" alt="Mens Health" />
        <Image width={150} height={137} src="/mrbeast.svg" alt="Mr. Beast" />
        <Image width={150} height={137} src="/forbes.svg" alt="Forbes" />
        <Image width={150} height={137} src="/macys.svg" alt="Macys" />
        <Image width={150} height={137} src="/menshealth.svg" alt="Mens Health" />
        <Image width={150} height={137} src="/mrbeast.svg" alt="Mr. Beast" />
      </div>
    </div> */}
    </>
  );
}

export default Skill;
