import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TextTransition, { presets } from "react-text-transition";
import './styleComponents.css';

// define text items here
const TEXTS = [
    "Welcome to Asad's portfolio!",
    "Expand and explore more about Asad :)",
];

const Welcome = () => {
    // define states here
    const [index, setIndex] = useState(0);

    // define funtionality to flip text items
    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            2000
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div>
            <motion.div
                animate={{
                    opacity: [1, 0, 0]
                }}
                transition={{
                    repeat: Infinity
                }}
            >
                <i className="far fa-chevron-double-up"></i>
            </motion.div>
            <div id='welcome'>
                <div></div>
                <h1>
                    <TextTransition
                        className='welcome-msg'
                        text={TEXTS[index % TEXTS.length]}
                        springConfig={presets.molasses}
                    />
                </h1>
            </div>
        </div>
    )
}

export default Welcome;