import React from 'react';
import { motion } from 'framer-motion';
import './styleComponents.css';

// import other components here
import BusinessCarousel from '../../BusinessCarousel';

// create object for page transition here, and define variants within
const pageTransitions = {
    in: {
        opacity: [0, 1]
    },
    out: {
        opacity: 0
    }
}

const Business = () => {
    return (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={pageTransitions}
            id='business'
        >
            <div className='empty'></div>

            {/* Content here */}
            <div className='content'>

                {/* Animations applied here, to animate elements on scroll */}
                <h1 className='header'>Business</h1>
                <p
                    style={{ fontSize: '17pt', marginTop: '700px', marginBottom: ' 700px' }}
                >
                    Asad is the Founder and Managing Director of the following organisations:
                </p>
                <BusinessCarousel />
                <p
                    style={{ fontSize: '17pt', marginTop: '700px' }}
                >
                    By taking proactive methods to enhance business performance, improving customer service and strengthening credibility, he has specialised in large risk and regulatory projects for clients and companies.
                </p>
                <p
                    style={{ fontSize: '17pt', marginTop: '700px' }}
                >
                    Aside from his Consultancy, Asad manages Transform Learning Academy, a Training company offering courses and consultancy in Business Analysis, Financial Crime and GDPR. Asad believes in the vast importance of diversity and the learning agenda for young professionals. He and his partners are passionate about helping individuals to upskill and build their confidence to progress their careers successfully.
                </p>
            </div>
        </motion.div>
    )
}

export default Business