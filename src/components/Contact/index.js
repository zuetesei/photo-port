import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }
    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    // JSX 
    return (
        <section>
            <h1> Contact Me </h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'> Name: </label>
                    <input type='text' name='name' defaultValue={name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='email'> Email Address: </label>
                    <input type='text' name='email' defaultValue={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='message'> Leave a Message: </label>
                    <textarea name='message' rows='5' defaultValue={message} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}


export default ContactForm;