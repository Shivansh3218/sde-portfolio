import React from "react";
import Header from "./(header)/header";
import MainSection from "./(mainSection)/mainSction";
import Skill from "./(skills)/skills";
import CertificationsPage from "./(certifications)/Certfication";

function Home() {
  return (
    <div>
      <Header />
      <MainSection />
      <Skill/>
      <CertificationsPage/>
    </div>
  );
}

export default Home;
