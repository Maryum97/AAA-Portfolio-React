import React from 'react';
import { motion } from 'framer-motion';

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
                <h1>Philanthropy here</h1>

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

export default Philanthropy
