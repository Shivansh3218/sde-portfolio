"use client"
import React, { useState } from 'react';
import './experience.css'
const Experience = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`experience`} id='experience'>
      <header className="experience-header">
        <h1>My Professional Journey</h1>
      </header>
      <main>
        <section>
          <h2>Aircampus Internship</h2>
          <br />
          <p>
            At Aircampus, I was entrusted with maintaining the Learning Management System (LMS),
            ensuring its smooth operation and enhancing the learning experience for users.
          </p>
        </section>
        <br />
        
        <section>
          <h2>Navgurukul Experience</h2>
          <br />
          <p>
            Transitioning to Navgurukul, I embraced the role of a software developer,
            where I was responsible for maintaining websites and developing client projects,
            further expanding my technical expertise.
          </p>
        </section>
      </main>
      <footer>
     
      </footer>
    </div>
  );
};

export default Experience;
