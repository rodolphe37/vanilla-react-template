import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import OurStory from './components/OurStory';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      <Portfolio />
      <OurStory />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
