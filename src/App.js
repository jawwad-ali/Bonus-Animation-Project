import React from 'react';
import Header from './Components/Header/Header';
import AboutIntro from './Components/About/AboutIntro';
import AboutDetails from './Components/AboutDetails/AboutDetails';
import BigPicture from './Components/BigProfilePicture/BigPicture';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <AboutIntro />
      <AboutDetails />
      <BigPicture />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
