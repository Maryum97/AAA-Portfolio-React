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
            <h1>Philanthropy here</h1>
        </motion.div>
    )
}

export default Philanthropy
