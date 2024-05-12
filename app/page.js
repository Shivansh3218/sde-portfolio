"use client"

import React from "react";
import Header from "./header/header";
import MainSection from "./mainSection/mainSction";
import Skill from "./skills/skills";
import CertificationsPage from "./certifications/Certfication";
import About from "./about/About";
import ContactForm from "./contact/ContactForm";

function Home() {
  return (
    <div style={{
      scrollBehavior:"smooth"
    }}>
      <Header />
      <ContactForm />
      <MainSection />
      <Skill/>
      <CertificationsPage/>
    </div>
  );
}

export default Home;
