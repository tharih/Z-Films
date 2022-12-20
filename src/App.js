import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './pages/Header';
import Home from './pages/Home';
import Footer from './pages/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Price from './pages/Price';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';


function App() {
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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
