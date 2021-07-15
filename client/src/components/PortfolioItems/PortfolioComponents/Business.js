import React from 'react';
import { motion } from 'framer-motion';
import './styleComponents.css';

// import images here
import Logo1 from '../../../assets/Business/WhiteRiskIntel.png';
import Logo2 from '../../../assets/Business/WhiteMayfair.png';
import Logo3 from '../../../assets/Business/WhiteAccrediNation.png';

// define css here
const myStyle = {
    style1: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '200px',
        height: '43px',
        marginTop: '700px'
    },

    style2: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '290px',
        height: '110px',
        marginTop: '740px'
    },
    style3: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '300px',
        height: '75px',
        marginTop: '700px'
    }
}

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
            <div className='content'>
                <h1 className='header'>Business</h1>
                <p
                    style={{ fontSize: '17pt', marginTop: '700px' }}
                >
                    Asad is the Founder and Managing Director of the following organisations:
                </p>
                <img
                    src={Logo1}
                    style={myStyle.style1}
                    className="img-fluid"
                >

                </img>

                <img
                    src={Logo2}
                    style={myStyle.style2}
                    className="img-fluid"
                >

                </img>

                <img
                    src={Logo3}
                    style={myStyle.style3}
                    className="img-fluid"
                >

                </img>
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