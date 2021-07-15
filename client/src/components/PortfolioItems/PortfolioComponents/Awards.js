import React from 'react';
import { motion } from 'framer-motion';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
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

function Awards() {
    const { width, height } = useWindowSize();

    return (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={pageTransitions}
            id='awards'
        >
            <div className='empty'></div>
            <div className='content'>
                <h1 className='header'>Awards</h1>
                <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={350}
                    gravity={0.2}
                ></Confetti>
            </div>
        </motion.div>
    )
}

export default Awards
