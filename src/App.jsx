import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import About from "./components/About";
import Collaborate from "./components/Collaborate";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Video from "./components/Video";
import ProjectsPage from "./components/ProjectsPage";

import LocomotiveScroll from 'locomotive-scroll';
import { useRef, useEffect } from "react";
import FeaturedProjects from "./components/Projects";


function HomePage() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <Navbar  scroll={scroll}/>
      <Landing />
      <Marquee />
      <section id="about" data-scroll-section><About /></section>
      <Video />
      <section id="project" data-scroll-section><Projects /></section>
      <section id="skills" data-scroll-section><Skills /></section>
       <section id="contact" data-scroll-section><Collaborate /></section>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="w-full h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
