"use client";
import React from "react";
import Header from "./header";
import ExperiencesPage from "./ExperiencePage";
import Experience from "./Experience";

function page() {
  return (
    <>
      <Header />
      <Experience/>
      <ExperiencesPage />
    </>
  );
}

export default page;
