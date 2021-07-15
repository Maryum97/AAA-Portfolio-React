import React from 'react';
import { motion } from 'framer-motion';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import './styleComponents.css';

// create object for page transition here, and define variants within
const pageTransitions = {
    in: {
        opacity: [0, 1]
    },
    out: {
        opacity: 0
    }
}

const Awards = () => {
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
            <Confetti
                width={width}
                height={height*3}
                numberOfPieces={400}
                gravity={0.2}
            >
                
            </Confetti>
            <div className='content'>
                <h1 className='header'>Awards</h1>
                <h2
                    style={{ marginTop: '700px' }}
                >
                    Asians In Tech Award 2020
                </h2>
            </div>
        </motion.div>
    )
}

export default Awards
