"use client";
import React from "react";
import Image from "next/image"; // Import Image from nextjs
import "./style.css"; // Importing the CSS file

function Skill() {
  return (
    <>
      <div className="wrapper">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <Image src="/logos/css.png" alt="Batman" width={500} height={300} />
            </div>

            <div className="slide">
              <Image src="/logos/docker.webp" alt="Spiderman" width={500} height={300} />
            </div>

            <div className="slide">
              <Image src="/logos/express.png" alt="Black Adam" width={500} height={300} />
            </div>

             <div className="slide">
              <Image src="/logos/figma.png" alt="Iron Man" width={500} height={300} />
            </div>

            <div className="slide">
              <Image src="/logos/Firebase.png" alt="SuperMan" width={500} height={300} />
            </div>

            <div className="slide">
              <Image src="/logos/gitwhite.png" alt="Captain America" width={500} height={300} />
            </div>

            <div className="slide">
              <Image src="/logos/html.png" alt="Black Panther" width={500} height={300} />
            </div>

            <div className="slide">
              <Image src="/logos/js.png" alt="Aquaman" width={500} height={300} />
            </div>

            <div className="slide">
              <Image src="/logos/mui.png" alt="Hulk" width={500} height={300} />
            </div>

            <div className="slide">
              <Image src="/logos/mysql.png" alt="Flash" width={500} height={300} />
            </div>

            <div className="slide">
              <Image src="/logos/next.png" alt="Thor" width={500} height={300} />
            </div>

            <div className="slide">
              <Image src="/logos/node-js.png" alt="Ant-Man" width={500} height={300} />
            </div>

            <div className="slide">
              <Image src="/logos/postger.png" alt="Wonder Woman" width={500} height={300} />
            </div>

            <div className="slide">
              <Image src="/logos/react.png" alt="Green Lantern" width={500} height={300} />
            </div> 
            <div className="slide">
              <Image src="/logos/ReactNative.png" alt="Green Lantern" width={500} height={300} />
            </div> 
            <div className="slide">
              <Image src="/logos/Reactquery.png" alt="Green Lantern" width={500} height={300} />
            </div> 
            <div className="slide">
              <Image src="/logos/redux.png" alt="Green Lantern" width={500} height={300} />
            </div> 
            <div className="slide">
              <Image src="/logos/tailwind.png" alt="Green Lantern" width={500} height={300} />
            </div> 
            <div className="slide">
              <Image src="/logos/ts.png" alt="Green Lantern" width={500} height={300} />
            </div> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;