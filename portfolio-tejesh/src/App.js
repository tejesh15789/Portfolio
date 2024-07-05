import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Headingmain from './components/Navbar';
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contactform from "./components/Form";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Headingmain/>
      <Banner />
      <Skills />
      <Projects />
      <Contactform/>
      <Footer/>
   


      
    </>
  );
}

export default App;
