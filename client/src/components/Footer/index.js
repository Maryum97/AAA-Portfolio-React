import React from 'react';
import './style.css';

// import contact icons here
import Facebook from '../../assets/SocialMediaLinks/facebook.png';
import Twitter from '../../assets/SocialMediaLinks/twitter.png';
import Instagram from '../../assets/SocialMediaLinks/instagram.png';
import LinkedIn from '../../assets/SocialMediaLinks/linkedin.png';

// define styles here
const myStyles = {
    icon: {
        height: '36px'
    }
}

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='social-medias'>
                    <a href='https://www.facebook.com/asadans4ri' target='_blank'>
                        <img
                            src={Facebook}
                            className='img-fluid'
                            style={myStyles.icon}
                        >
                        </img>
                    </a>
                    <span>  </span>
                    <span>  </span>
                    <a href='https://www.instagram.com/asadans4ri/' target='_blank'>
                        <img
                            src={Instagram}
                            className='img-fluid'
                            style={myStyles.icon}
                        >
                        </img>
                    </a>
                    <span>  </span>
                    <span>  </span>
                    <a href='https://twitter.com/asadans4ri' target='_blank'>
                        <img
                            src={Twitter}
                            className='img-fluid'
                            style={myStyles.icon}
                        >
                        </img>
                    </a>
                    <span>  </span>
                    <span>  </span>
                    <a href='https://www.linkedin.com/in/asadansari1/' target='_blank'>
                        <img
                            src={LinkedIn}
                            className='img-fluid'
                            style={myStyles.icon}
                        >
                        </img>
                    </a>
                </div>
            </div>
            <footer>
                <div className='copyright'>
                    © Copyright Asad Ansari 2021
                </div>
                <div className='back-to-top'>
                    <a>Back To Top</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;