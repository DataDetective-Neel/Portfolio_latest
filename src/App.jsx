import React from "react";

/* Sections */
import Hero from "./components/Hero";
import Workflow from "./components/Workflow";
import CaseFiles from "./components/CaseFiles";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

/* Navbar */
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#020617] text-white overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* INVESTIGATION PROCESS */}
      <Workflow />

      {/* CASE FILES */}
      <CaseFiles />

      {/* EXPERIENCE */}
      <Experience />

      {/* TOOLKIT */}
      <Skills />

      {/* EDUCATION */}
      <Education />

      {/* CERTIFICATIONS */}
      <Certifications />

      {/* CONTACT */}
      <Contact />

    </div>
  );
}

export default App;