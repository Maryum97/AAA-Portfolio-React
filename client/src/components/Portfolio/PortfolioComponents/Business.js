import React from 'react';

// import images here
import Logo1 from '../../../assets/Business/WhiteRiskIntel.png';
import Logo2 from '../../../assets/Business/WhiteMayfair.png';
import Logo3 from '../../../assets/Business/WhiteAccrediNation.png';

const Business = () => {
    return (
        <div id='business'>
            <h1 className='bus-header'>Business</h1>
            <br></br>
            <p>
                Asad is the Founder and Managing Director of the following:
            </p>
            <br></br>
            <img
                className='bus-logo'
                src={Logo1}
            >
            </img>
            <br></br>
            <img
                className='bus-logo'
                src={Logo2}
            >
            </img>
            <br></br>
            <img
                className='bus-logo'
                src={Logo3}
            >
            </img>
            <br></br>
            <p>
                By taking proactive methods to enhance business performance, improving customer service and strengthening credibility, he has specialised in large risk and regulatory projects for clients and companies.
            </p>
            <br></br>
            <p>
                Aside from his Consultancy, Asad manages Transform Learning Academy, a Training company offering courses and consultancy in Business Analysis, Financial Crime and GDPR. Asad believes in the vast importance of diversity and the learning agenda for young professionals. He and his partners are passionate about helping individuals to upskill and build their confidence to progress their careers successfully.
            </p>
            <br></br>
            <h2>Hey, this is business!</h2>
            <h2>Hey, this is business!</h2>
            <h2>Hey, this is business!</h2>
            <h2>Hey, this is business!</h2>
            <h2>Hey, this is business!</h2>
        </div>
    )
}

export default Business;
