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

function Philanthropy() {
    return (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={pageTransitions}
            id='philanthropy'
        >
            <div className='empty'></div>
            <div className='content'>
                <h1 className='header'>Philanthropy</h1>
            </div>
        </motion.div>
    )
}

export default Philanthropy
