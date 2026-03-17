import React from 'react';
import "./assets/scss/App.scss";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </>
  )
}

export default App;