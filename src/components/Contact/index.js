import React, { useState, useEffect } from 'react';
import * as emailjs from 'emailjs-com';
import './style.css';

// aos dependencies
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    // initialise aos
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    // define states here
    // 1. states for name, email and message
    const [variables, setVariables] = useState({
        name: '',
        email: '',
        message: ''
    });

    // 2. states for sucess message
    const [successMsg, setSuccessMsg] = useState('');

    // define handle event funtions here
    const handleNameChange = e => {
        setVariables({ name: e.target.value })
    }

    const handleEmailChange = e => {
        setVariables({ email: e.target.value })
    }

    const handleMessageChange = e => {
        setVariables({ message: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();

        emailjs.sendForm(
            // define 4 parameters from emailjs here:
            // 1. service ID
            'service_wkoomdq',
            // 2. template ID
            'template_w28xka9',
            // 3. form element OR selector 
            // --> the API can capture all the data contained inside the className included here as the 3rd parameter
            // --> in this case, the data is name, email and message
            '.contact-items',
            // 4. emailjs user ID 
            'user_IfPLcN0kuGQtkG0iT1Jzr'
        ).then(() => {
            setSuccessMsg(
                <div
                    className='modal-background'
                    data-aos='fade-in'
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-delay="100"
                >
                    <div
                        className='modal-box'
                        data-aos='zoom-in'
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-delay="600"
                    >
                        <div className='modal-interior'>
                            <div className='modal-title'>
                                Message sent!
                            </div>
                            <p className='modal-text'>
                                Thank you for your message! Asad will reach back to you soon :)
                            </p>
                            <button
                                className='btn-secondary close-btn'
                                onClick={closeModal}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
        ).catch();

        setVariables({
            name: '',
            email: '',
            message: ''
        })
    }

    // funtion to close modal
    const closeModal = () => {
        setSuccessMsg(
            <div></div>
        );
    }

    return (
        <div className='contact'>
            <div className='contact-container'>
                <h1 style={{ textAlign: 'center' }}>Feel free to get in touch with Asad:</h1>
                <br></br>
                <form className='contact-items card' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        className='user-name'
                        placeholder='Your full name...'
                        value={variables.name}
                        onChange={handleNameChange}
                        required
                    ></input>
                    <br></br>
                    <input
                        type='email'
                        className='user-email'
                        placeholder='Your email...'
                        value={variables.email}
                        onChange={handleEmailChange}
                        required
                    ></input>
                    <br></br>
                    <textarea
                        type='textarea'
                        className='user-message'
                        placeholder='Leave a message...'
                        value={variables.message}
                        onChange={handleMessageChange}
                        required
                    ></textarea>
                    <br></br>
                    <button
                        className='btn-primary send-btn'
                    >
                        Send
                    </button>
                </form>
                {successMsg}
            </div>
        </div>
    )
}

export default Contact;