import React from 'react'
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero'
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
