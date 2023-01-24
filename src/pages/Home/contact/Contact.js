import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <form className='form flex justify-center pb-10  mt-36'>
           <div className='p-6'>
                    <div className='text-center mt-10'>
                        <h2 className='text-2xl font-bold text-primary'>Contact Us</h2>
                        <h1 className='text-4xl text-white mb-6'>Stay connected with us</h1>
                    </div>
                <input type="email" placeholder="email adress" className="input w-full max-w-xs" />
                <br/><br/>
                <input type="text" placeholder="subject" className="input w-full max-w-xs" />
                <br/><br/>
                <textarea className="textarea" placeholder="Bio"></textarea>
           </div>
        </form>
    );
};

export default Contact;