// pages/about.js
"use client"
import Head from 'next/head';
import './style.css'
import useStore from '../store';

export default function About() {

const openContactForm =  useStore((state) => { return state?.openContactForm});


  return (
    <div className="container">

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

          <button onClick={openContactForm} style={{cursor:"pointer"}}  className="card">
            <h2>Contact →</h2>
            <p>Let's get in touch!</p>
          </button>
        </div>
      </main>
    </div>
  );
}
