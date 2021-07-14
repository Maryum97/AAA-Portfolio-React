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
                <h1>Business here</h1>

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
            </div>
        </motion.div>
    )
}

export default Business