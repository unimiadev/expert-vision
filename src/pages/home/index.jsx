import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Sections/Services/Services';
import Reviews from '../../components/Sections/Reviews/Reviews';
import Projects from '../../components/Sections/Projects/Projects';
import Contact from '../../components/Sections/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <Services />
      <Reviews />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
