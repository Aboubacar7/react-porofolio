import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route exact path="/react-portfolio/" element={<Home />} />
          <Route exact path="/react-portfolio/projects" element={<Projects />} />
          <Route exact path="/react-portfolio/contact" element={<Contact />} />
          <Route exact path="/react-portfolio/resume" element={<Resume />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
