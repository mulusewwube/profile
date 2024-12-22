import React from "react";
import "./App.css";
import Header from "./components/Header"; // Import the Header Component
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contcat from "./components/Contcat";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProjectDetail from "./components/ProjectDetail"; 


function App() {
  return (
    <>
      <Header />
      <main>
      <AboutMe />
      <Projects />

      <Skills />
      <Contcat />

      <ProjectDetail />
        
      </main>
      <Footer />




      {/* <Router>
      <Switch>
        <Route path="/" exact component={Projects} />
        <Route path="/projects/:projectId" component={ProjectDetail} />
      </Switch>
    </Router> */}

    </>
  );
}

export default App;
