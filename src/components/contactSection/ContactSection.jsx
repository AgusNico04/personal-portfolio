import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactSection.css';

export default function ContactSection() {
    const form = useRef();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5agv7p7','template_bydcbqk', form.current, 'SiAxv2ua2Q3kwkKUI')
            .then(result => {})
            .catch(error => console.log(error));

        setUsername('');
        setEmail('');
        setMessage('');
    }

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.message);

    return (
        <section id='contact'>
            <div id='contact-title'>
                <p>Contact Me</p>
            </div>
            <div id='contact-email'>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type='text' name='user_name' value={username} onChange={handleUsernameChange} />
                    <label>Email</label>
                    <input type='email' name='user_email' value={email} onChange={handleEmailChange} />
                    <label>Message</label>
                    <textarea name='message' value={message} onChange={handleMessageChange} />
                    <button type='submit'>Send</button>
                </form>
            </div>
        </section>
    );
}