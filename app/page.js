import React from "react";
import Header from "./(header)/header";
import MainSection from "./(mainSection)/mainSction";
import Skill from "./(skills)/skills";

function Home() {
  return (
    <div>
      <Header />
      <MainSection />
      <Skill/>
    </div>
  );
}

export default Home;
