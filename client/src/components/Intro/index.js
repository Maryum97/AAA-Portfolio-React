import React, { useEffect } from 'react';
import './style.css';
import Text from './Text';

// framer motion dependencies
import { motion } from 'framer-motion';
import styled from 'styled-components';

// aos dependencies
import Aos from 'aos';
import 'aos/dist/aos.css';

// import images here
import AsadPic from '../../assets/Intro/Asad-Ansari.jpg';

// define constants for framer motion effects here

// parents of image
const ImageContainer = styled(motion.div)`
`;

const Intro = () => {
    // initialise aos
    useEffect(() => {
        Aos.init({ duration: 1300 })
    }, []);

    return (
        <div
            className='page-intro'
            data-aos='fade-in'
        >
            <div className='intro-content card'>
                <div className='inner-intro-content card'>
                    <h1 className='intro-header'>
                        <Text />
                    </h1>
                    <br></br>
                    <div className='intro-grid card'>
                        <ImageContainer
                            animate={{
                                scale: [0, 1.4, 0.8],
                                rotate: [0, 60, -360],
                                x: -10,
                                y: -40,
                                scaleX: [-5, 0, 1],
                                scaleY: [0, 1.05]
                            }}
                            transition={{
                                duration: 3,
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
                        <div className='aboutAsad'>
                            <p>With vast knowledge of the rapidly changing business world, Asad Ansari is the founder and managing director of multiple risk advisory consultancies, with a wide-ranging experience of a number of sectors including Financial, Legal and Technology.</p>
                            <br></br>
                            <p>Being well versed in public relations, Asad has been involved in charity organisations within UK and Asia including the British Asian Trust Mental Health Association in Pakistan to raise awareness of mental health. He has also volunteered for Graham Layton Trust, providing free eye care for people of all backgrounds throughout Pakistan.</p>
                            <br></br>
                            <p>Among other volunteering roles, Asad is on the Armed Forces Muslim Forum communication group committee dealing with interfaith and diversity related issues. Asad is currently involved in the City of London Campaign to become the Commons Councillor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;
