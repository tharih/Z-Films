import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Price from "./pages/Price";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import $ from "jquery";
// import "jquery-ui-dist/jquery-ui";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    $(window).on("resize", function () {
      if ($(window).width() <= 1199) {
        $(".collapse.navbar-collapse").removeClass("collapse");
      } else {
        $(".navbar-collapse").addClass("collapse");
      }
    });
    $(".mobile-menu .navOpen").on("click", function () {
      $(".main-menu-wrap").addClass("open");
      $(".collapse.navbar-collapse").removeClass("collapse");
    });

    $(".mobile_menu .navOpen").on("click", function () {
      $(this).parent().toggleClass("open");
      $(".main-menu-wrap").toggleClass("open");
    });

    $(".menu-close").on("click", function () {
      $(".main-menu-wrap").removeClass("open");
    });
    $(".mobile-top-bar").on("click", function () {
      $(".header-top").addClass("open");
    });
    $(".close-header-top button").on("click", function () {
      $(".header-top").removeClass("open");
    });
  }, []);

  return (
    <>
      <Router>
        <Header />
        {/* <Player /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Services" exact element={<Services />} />
          <Route path="/Projects" exact element={<Projects />} />
          <Route path="/Team" exact element={<Team />} />
          <Route path="/Price" exact element={<Price />} />
          <Route path="/Testimonials" exact element={<Testimonials />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ProjectDetails" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
