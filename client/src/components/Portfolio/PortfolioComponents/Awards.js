import React, { useEffect } from 'react';

// aos dependencies
import Aos from 'aos';
import 'aos/dist/aos.css';

// import image(s) here
import AwardImg from '../../../assets/Awards/Top100AsianStarsInUKTech.png'

const Awards = () => {
    // initialise aos
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <div id='awards'>
            <h1 className='awards-header'>Awards</h1>
            <div className='awards-grid'>
                <div>
                    <img
                        className='awards-img img-fluid'
                        src={AwardImg}
                        data-aos='flip-up'
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-delay='-10'
                    ></img>
                </div>
                <div>
                    <h3
                        className='awards-heading'
                        data-aos='zoom-in'
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-delay='-10'
                    >
                        Asians In Tech Award 2020
                    </h3>
                    <p
                        className='awards-para'
                        data-aos='flip-left'
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-delay='-10'
                    >
                        Asad has received the Top 100 Asians Stars In UK Tech Award 2020 for his work in the risk and regulatory sector, which delivers a suite of flexible services that assist clients with assessments, reviews, deep dives, and forecasts. Most notably having delivered projects and developed business across digital technology, change, regulatory, risk, governance and IT projects across a range of FTSE 100 clients within Enterprise Software, AIM stock market, Insurance, Banking, Technology, Pharmaceutical, and Public Sector.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Awards;