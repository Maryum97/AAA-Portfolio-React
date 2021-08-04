import React, { useEffect } from 'react';
import './style.css';

// aos dependencies
import Aos from 'aos';
import 'aos/dist/aos.css';

// import Phil-card data here as a separate component
import { PhilCardData } from './PhilCardData';

function PhilanthropyCard() {
    // initialise aos
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, []);

    return (
        <div className='phil-card-grid'>
            {PhilCardData.map((data, index) => {
                return (
                    <div
                        className='phil-card'
                        key={index}
                        data-aos='flip-right'
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-delay='-10'
                    >
                        <div>
                            <img
                                className='phil-card-logo img-fluid'
                                src={data.src}
                                data-aos='zoom-in'
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-delay='200'
                            >
                            </img>
                        </div>
                        <h3
                            className='phil-card-title'
                            data-aos='flip-down'
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-delay='400'
                        >
                            {data.title}
                        </h3>
                        <p
                            className='phil-card-description'
                            data-aos='flip-up'
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-delay='400'
                        >
                            {data.description}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default PhilanthropyCard;