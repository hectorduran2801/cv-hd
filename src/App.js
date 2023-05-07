import React from "react";
import "./App.css";
import Nav from "./components/NavBar";
import Header from "./components/Hero";
import About from "./components/About";
import Studies from "./components/Studies";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");
  const color = "blue";

  function handleLanguageChange(selectedLanguage) {
    setLanguage(selectedLanguage);
  }

  return (
    <>
      <Nav
        color={color}
        language={language}
        onLanguageChange={handleLanguageChange}
      />
      <Header color={color} />
      <About color={color} />
      <Studies color={color} />
      <Skills color={color} />
      <Experience color={color} />
      <Projects color={color} />
      <Contact
        color={color}
        language={language}
        onLanguageChange={handleLanguageChange}
      />
      <Footer language={language} onLanguageChange={handleLanguageChange} />
    </>
  );
}

export default App;
