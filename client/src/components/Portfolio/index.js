import React from 'react';
import './style.css';

// import components here
import Navbar from './Navbar';
import Welcome from './PortfolioComponents/Welcome';
import Business from './PortfolioComponents/Business';
import Philanthropy from './PortfolioComponents/Philanthropy';
import Awards from './PortfolioComponents/Awards';

const Portfolio = () => {
    return (
        <>
            <Navbar />
            <div className='portfolio'>
                <br></br>
                <Welcome />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Business />
                <br></br>
                <Philanthropy />
                <br></br>
                <Awards />
                <br></br>
            </div>
        </>
    )
}

export default Portfolio;