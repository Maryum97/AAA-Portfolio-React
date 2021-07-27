import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-container'>
                <h1 style={{ textAlign: 'center' }}>Feel free to get in touch with Asad:</h1>
                <br></br>
                <form className='contact-items card'>
                    <input
                        type='text'
                        className='user-name'
                        placeholder='Your full name...'
                        required
                    ></input>
                    <br></br>
                    <input
                        type='email'
                        className='user-email'
                        placeholder='Your email...'
                        required
                    ></input>
                    <br></br>
                    <textarea
                        type='textarea'
                        className='user-message'
                        placeholder='Leave a message...'
                        required
                    ></textarea>
                    <br></br>
                    <button
                        className='send-btn'
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;