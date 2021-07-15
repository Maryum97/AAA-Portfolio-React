import React from 'react';
import { motion } from 'framer-motion';
import './styleComponents.css';

// create object for page transition here, and define variants within
const pageTransitions = {
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
}

function Business() {
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
            </div>
        </motion.div>
    )
}

export default Business