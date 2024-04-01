import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Customer from './components/Customer';
import Career from  "./components/Career";
import Partner from "./components/Partner";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from './components/Login';
import Signin from "./components/Signin";

const App = () => {
  return (
    <div>
      <Router>
        <div className="m-4">
          <Navbar /> {/* Navbar will be rendered for all routes */}
        </div>
        <div className="ml-2 mr-2">
          <Routes>
            <Route path="/customer" element={<Customer />} /> {/* Render Customer component at /customer path */}
            <Route path="/career" element={<Career />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/partner" element={<Partner />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/login" element={<Login />} /> 
            <Route path="/signin" element={<Signin />} /> 
            <Route path="/" element={<>
              <Carousel />
              <HeroSection />
              <Footer />
            </>} /> {/* Render Carousel and HeroSection at the root path */}
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
