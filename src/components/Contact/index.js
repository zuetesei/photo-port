import React from 'react';

function ContactForm() {

    // JSX
    <section>
        <h1> Contact Me </h1>
        <form id='contact-form'>
            <div>
                <label htmlFor='name'> Name: </label>
                <input type='text' name='name' />
            </div>
            <div>
                <label htmlFor='email'> Email Address: </label>
                <input type='text' name='email' />
            </div>
            <div>
                <label htmlFor='message'> Leave a Message: </label>
                <input type='text' name='message' rows='5' />
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>
}


export default ContactForm;