import React, { useState, useEffect } from "react";
import "./App.css";
import Mode from "./components/mode/Mode";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Profile from "./components/profile/Profile";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import { DataContext } from "./context/DataContext";
import { languages } from "./data/languages";

function App() {
  const storedLang = localStorage.getItem("lang");
  const defaultLang = storedLang ? storedLang : "en";
  const [langPre, setLangPre] = useState(defaultLang);
  const langHandler = () => {
    const newLang = langPre === "en" ? "tr" : "en";
    setLangPre(newLang);
    localStorage.setItem("lang", newLang);
  };
  const content = langPre === "tr" ? languages.tr : languages.en;
  const contentProjects = langPre === "tr" ? "tr" : "en";

  useEffect(() => {
    if (!storedLang) {
      localStorage.setItem("lang", defaultLang);
    }
  }, [storedLang, defaultLang]);

  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const data = {
    content,
    contentProjects,
    langHandler,
    langPre,
    theme,
    toggleTheme,
  };

  return (
    <DataContext.Provider value={data}>
      <Mode />
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </DataContext.Provider>
  );
}

export default App;
