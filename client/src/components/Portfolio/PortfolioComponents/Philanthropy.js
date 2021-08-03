import React, { useEffect } from 'react';

// aos dependencies
import Aos from 'aos';
import 'aos/dist/aos.css';

// import images here
import PhilQuotImage from '../../../assets/Philanthropy/Screenshot_20210524-180312_Instagram.jpg';

// import other components here 
import PhilanthropyCard from '../../PhilanthropyCard';

const Philanthropy = () => {
    // initialise aos
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, []);

    return (
        <div id='philanthropy'>
            <h1 className='phil-header'>Philanthropy</h1>
            <br></br>
            <div
                className='quotation'
                data-aos='flip-right'
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-delay='10'
            >
                <div>
                    <img
                        className='phil-quot-image img-fluid'
                        src={PhilQuotImage}
                        data-aos='fade-up'
                        data-aos-easing="flip-up"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-delay='600'
                    >
                    </img>
                </div>
                <div>
                    <p
                        className='phil-quot-text'
                        data-aos='flip-down'
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-delay='1000'
                    >
                        “Philanthropy is a huge part of my life. It fills a gap for me. The more I help others, the more it pays off personally. In a small way, I’m trying to help make a lasting impact in others’ lives. All the initiatives I’m working on with trustable charities in different sectors, help me do that."
                    </p>
                    <p
                        className='phil-quot-text'
                        data-aos='flip-left'
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-delay='1400'
                    >
                        ~ Asad Ansari
                    </p>
                </div>
            </div>
            <br></br>
            <PhilanthropyCard />
            <br></br>
        </div>
    )
}

export default Philanthropy;
