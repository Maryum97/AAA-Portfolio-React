import React, { Component } from 'react';
import './style.css';

// axios
import axios from 'axios';

export default class Contact extends Component {

    // define states here for name, email and message
    state = {
        name: '',
        email: '',
        message: '',
        sent: false
    };

    // 2. states for sucess message
    // const [successMsg, setSuccessMsg] = useState('');

    // define handle event funtions here
    handleNameChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        })
    }

    handleMessageChange = e => {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();


        //     setSuccessMsg(
        //         <div
        //             className='modal-background'
        //             data-aos='fade-in'
        //             data-aos-easing="ease-in-out"
        //             data-aos-mirror="true"
        //             data-aos-once="true"
        //             data-aos-delay="100"
        //         >
        //             <div
        //                 className='modal-box'
        //                 data-aos='zoom-in'
        //                 data-aos-easing="ease-in-out"
        //                 data-aos-mirror="true"
        //                 data-aos-once="true"
        //                 data-aos-delay="600"
        //             >
        //                 <div className='modal-interior'>
        //                     <div className='modal-title'>
        //                         Message sent!
        //                     </div>
        //                     <p className='modal-text'>
        //                         Thank you for your message! Asad will reach back to you soon :)
        //                     </p>
        //                     <button
        //                         className='btn-secondary close-btn'
        //                         onClick={closeModal}
        //                     >
        //                         OK
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     );
        // }

        // render success message here
        this.setState({
            sent: true
        },

            // reset form here
            this.resetForm()
        )

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('/api/forma', data).then().catch(() => {
            console.log('Message not sent.')
        });

    }

    // set initial data (reset form back to empty inputs)
    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            message: ''
        })

        // status of message sent should be false again after previous submission
        setTimeout(() => {
            this.setState({
                sent: false
            })
        }, 3000)
    }

    // funtion to close modal
    // closeModal = () => {
    //     setSuccessMsg(
    //         <div></div>
    //     );
    // }

    render() {

        return (
            <div className='contact'>
                <div className='contact-container'>
                    <h1 style={{ textAlign: 'center' }}>Feel free to get in touch with Asad:</h1>
                    <br></br>
                    <form className='contact-items card' onSubmit={this.handleSubmit}>
                        <h3>Full Name</h3>
                        <input
                            type='text'
                            className='user-name'
                            placeholder='Type your full name...'
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            required
                        ></input>
                        <br></br>
                        <h3>Email</h3>
                        <input
                            type='email'
                            className='user-email'
                            placeholder='Type your email...'
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            required
                        ></input>
                        <br></br>
                        <h3>Message</h3>
                        <textarea
                            type='textarea'
                            className='user-message'
                            placeholder='Leave a message...'
                            value={this.state.message}
                            onChange={this.handleMessageChange}
                            required
                        ></textarea>
                        <br></br>
                        {/* render success message here */}
                        <div className={this.state.sent ? 'msg msgAppear' : 'msg'}>
                            <h1>Message has been sent!</h1>
                        </div>
                        <button
                            className='btn-primary send-btn'
                            type='submit'
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}