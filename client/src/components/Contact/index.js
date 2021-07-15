import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-container'>
                <h1>Feel free to get in touch with Asad:</h1>
                <br></br>
                <div className='contact-items card'>
                    <input type='email' className='user-email' placeholder='Your email...'></input>
                    <br></br>
                    <textarea className='user-message' placeholder='Leave a message...'></textarea>
                    <br></br>
                    <button
                        className='send-btn'
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact;