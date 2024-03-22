// pages/about.js

import Head from 'next/head';
import './style.css'

export default function About() {
  return (
    <div className="container">
      {/* <Head>
        <title >About Me</title>
        <meta name="description" content="Software Developer Portfolio" />
      </Head> */}

      <main className="main">
        <h1 className="title">
          Hi, I'm Shivansh
        </h1>

        <p className="description">
          I'm a passionate software developer with a love for building scalable web applications.
        </p>

        <div className="grid">
          <a href="#experience" className="card">
            <h2>Experience →</h2>
            <p>Find out more about my work history.</p>
          </a>

          <a href="#projects"  className="card">
            <h2>Projects →</h2>
            <p>Take a look at some of the projects I've worked on.</p>
          </a>

          <a href="#skill"  className="card">
            <h2>Skills →</h2>
            <p>Discover the technologies I use.</p>
          </a>

          <a href="#contact"  className="card">
            <h2>Contact →</h2>
            <p>Let's get in touch!</p>
          </a>
        </div>
      </main>
    </div>
  );
}
