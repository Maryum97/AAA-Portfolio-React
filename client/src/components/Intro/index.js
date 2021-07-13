import React from 'react';
import './style.css';

// import images here
import AsadPic from '../../assets/Intro/Asad-Ansari.jpg';

const Intro = () => {
    return (
        <div className='page-intro'>
            <div className='intro-content'>
                <h1>Hello, meet Asad Aamir Ansari...</h1>
                <img
                    src={AsadPic}
                    className='img-fluid'
                >

                </img>
            </div>
        </div>
    )
}

export default Intro;
