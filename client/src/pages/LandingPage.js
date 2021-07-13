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
        <div className='landing-page'>
            <Navbar />
            <Intro />
            <Portfolio />
            <div className='page-header' style={{ marginTop: '100px' }}>
                Hello, I'm the landing page!
            </div>
            <div className='page-header'>
                Hello, I'm the landing page!
            </div>
            <div className='page-header'>
                Hello, I'm the landing page!
            </div>
            <div className='page-header'>
                Hello, I'm the landing page!
            </div>
            <div className='page-header'>
                Hello, I'm the landing page!
            </div>
            <div className='page-header'>
                Hello, I'm the landing page!
            </div>
            <div className='page-header'>
                Hello, I'm the landing page!
            </div>
            <div className='page-header'>
                Hello, I'm the landing page!
            </div>
            <div className='page-header'>
                Hello, I'm the landing page!
            </div>
            <div className='page-header'>
                Hello, I'm the landing page!
            </div>
            <div className='page-header'>
                Hello, I'm the landing page!
            </div>
            <div className='page-header'>
                Hello, I'm the landing page!
            </div>
            <div className='page-header'>
                Hello, I'm the landing page!
            </div>
            <div className='page-header'>
                Hello, I'm the landing page!
            </div>
            <div className='page-header'>
                Hello, I'm the landing page!
            </div>
            <div className='page-header'>
                Hello, I'm the landing page!
            </div>
            <div className='page-header'>
                Hello, I'm the landing page!
            </div>
            <div className='page-header'>
                Hello, I'm the landing page!
            </div>
        <Contact />
        <Footer />
        </div>
    )
}

export default LandingPage;