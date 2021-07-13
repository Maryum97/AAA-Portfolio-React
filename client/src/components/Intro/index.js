import React, { useEffect } from 'react';
import './style.css';

// framer motion dependencies
import { motion } from 'framer-motion';
import styled from 'styled-components';

// aos dependencies
import Aos from 'aos';
import 'aos/dist/aos.css';

// import images here
import AsadPic from '../../assets/Intro/Asad-Ansari.jpg';

const ImageContainer = styled(motion.div)``;

const Intro = () => {
    // initialise aos
    useEffect(() => {
        Aos.init({ duration: 1300 })
    }, []);

    return (
        <div
            className='page-intro'
            data-aos='slide-down'
        >
            <div className='intro-content card'>
                <div className='inner-intro-content card'>
                    <h1>Hello, meet Asad Aamir Ansari...</h1>
                    <br></br>
                    <ImageContainer
                        animate={{
                            scale: [0, 1, 1.3, 1],
                            rotate: [0, 90, -360]
                        }}
                        transition={{
                            duration: 2,
                            delay: 1
                        }}
                    >
                        <img
                            src={AsadPic}
                            className='AsadPic img-fluid'
                            style={{ marginLeft: 'auto', marginRight: 'auto' }}
                        >

                        </img>
                    </ImageContainer>
                </div>
            </div>
        </div>
    )
}

export default Intro;
