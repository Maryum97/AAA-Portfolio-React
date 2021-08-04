import React, { useEffect } from 'react';

// aos dependencies
import Aos from 'aos';
import 'aos/dist/aos.css';

// import images here
import Logo1 from '../../../assets/Business/WhiteRiskIntel.png';
import Logo2 from '../../../assets/Business/WhiteMayfair.png';
import Logo3 from '../../../assets/Business/WhiteAccrediNation.png';

const Business = () => {
    // initialise aos
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <div id='business'>
            <h1 className='bus-header'>Business</h1>
            <br></br>
            <p
                className='bus-para'
                data-aos='zoom-in'
                data-aos-once="false"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-delay="10"
            >
                Asad is the Founder and Managing Director of the following:
            </p>
            <br></br>
            <img
                className='bus-logo img-fluid'
                src={Logo1}
                data-aos='flip-left'
                data-aos-once="false"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-delay="-10"
            >
            </img>
            <br></br>
            <img
                className='bus-logo img-fluid'
                src={Logo2}
                data-aos='flip-right'
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-delay="-10"
            >
            </img>
            <br></br>
            <img
                className='bus-logo img-fluid'
                src={Logo3}
                data-aos='flip-left'
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-delay="-10"
            >
            </img>
            <br></br>
            <p
                className='bus-para'
                data-aos='flip-right'
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-delay="-10"
            >
                By taking proactive methods to enhance business performance, improving customer service and strengthening credibility, he has specialised in large risk and regulatory projects for clients and companies.
            </p>
            <br></br>
            <p
                className='bus-para'
                data-aos='flip-left'
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-delay="-10"
            >
                Aside from his Consultancy, Asad manages Transform Learning Academy, a Training company offering courses and consultancy in Business Analysis, Financial Crime and GDPR. Asad believes in the vast importance of diversity and the learning agenda for young professionals. He and his partners are passionate about helping individuals to upskill and build their confidence to progress their careers successfully.
            </p>
            <br></br>
        </div>
    )
}

export default Business;
