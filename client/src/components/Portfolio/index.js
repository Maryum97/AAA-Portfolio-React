import React from 'react';
import './style.css';

// import components here
import Navbar from './Navbar';
import Welcome from './PortfolioComponents/Welcome';

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
                <h1>Hi, this is the portfolio section!</h1>
                <h1>Hi, this is the portfolio section!</h1>
                <h1>Hi, this is the portfolio section!</h1>
                <h1>Hi, this is the portfolio section!</h1>
                <h1>Hi, this is the portfolio section!</h1>
                <h1>Hi, this is the portfolio section!</h1>
                <h1>Hi, this is the portfolio section!</h1>
            </div>
        </>
    )
}

export default Portfolio;