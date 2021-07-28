import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './style.css';

// import contact icons here
import Facebook from '../../assets/SocialMediaLinks/facebook.png';
import Twitter from '../../assets/SocialMediaLinks/twitter.png';
import Instagram from '../../assets/SocialMediaLinks/instagram.png';
import LinkedIn from '../../assets/SocialMediaLinks/linkedin.png';

// define styles here
const myStyles = {
    icon: {
        height: '40px'
    }
}

const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='social-medias'>
                    <a href='https://www.facebook.com/asadans4ri' target='_blank'>
                        <motion.img
                            whileHover={{
                                scale: 1.23
                            }}
                            src={Facebook}
                            className='img-fluid'
                            style={myStyles.icon}
                        >
                        </motion.img>
                    </a>
                    <span>  </span>
                    <span>  </span>
                    <a href='https://www.instagram.com/asadans4ri/' target='_blank'>
                        <motion.img
                            whileHover={{
                                scale: 1.23
                            }}
                            src={Instagram}
                            className='img-fluid'
                            style={myStyles.icon}
                        >
                        </motion.img>
                    </a>
                    <span>  </span>
                    <span>  </span>
                    <a href='https://twitter.com/asadans4ri' target='_blank'>
                        <motion.img
                            whileHover={{
                                scale: 1.23
                            }}
                            src={Twitter}
                            className='img-fluid'
                            style={myStyles.icon}
                        >
                        </motion.img>
                    </a>
                    <span>  </span>
                    <span>  </span>
                    <a href='https://www.linkedin.com/in/asadansari1/' target='_blank'>
                        <motion.img
                            whileHover={{
                                scale: 1.23
                            }}
                            src={LinkedIn}
                            className='img-fluid'
                            style={myStyles.icon}
                        >
                        </motion.img>
                    </a>
                </div>
            </div>
            <footer>
                <div className='copyright'>
                    © Copyright Asad Ansari 2021
                </div>
                <div className='back-to-top'>
                    <a className='back-to-top' href='#landing-page'>Back To Top</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;