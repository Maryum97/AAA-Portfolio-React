import React from 'react';
import './style.css';

// import components here
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Portfolio from '../components/PortfolioItems';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <div id='landing-page'>
            <Navbar />
            <div id='about'>
                <Intro />
            </div>
            <div id='portfolio'>
                <Portfolio />
            </div>
            <div id='contact'>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage;