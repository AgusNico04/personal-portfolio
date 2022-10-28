import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactSection.css';

export default function ContactSection() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5agv7p7','template_bydcbqk', form.current, 'SiAxv2ua2Q3kwkKUI')
            .then(result => console.log(result.text))
            .catch(error => console.log(error));
    }

    return (
        <section id='contact'>
            <div id='contact-title'>
                <p>Contact Me</p>
            </div>
            <div id='contact-email'>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type='text' name='user_name' />
                    <label>Email</label>
                    <input type='email' name='user_email' />
                    <label>Message</label>
                    <textarea name='message' />
                    <button type='submit'>Send</button>
                </form>
            </div>
        </section>
    );
}