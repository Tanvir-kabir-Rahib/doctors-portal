import React from 'react';

const ContactForm = () => {
    return (
        <div className='bg-appointmentBg mt-32 rounded-2xl py-20'>
            <div className='text-center mb-10'>
                <h4 className='text-secondary text-xl font-semibold'>Contact Us</h4>
                <p className='text-white text-4xl mt-2'>Stay connected with us</p>
            </div>
            <div>
                <form className='mx-auto w-11/12 md:w-3/5 lg:w-2/5'>
                    <input type="email" placeholder="Email Address" className="input w-full" /><br />
                    <input type="text" placeholder="Subject" className="input w-full mt-6" /><br />
                    <textarea className="textarea textarea-bordered w-full mt-6 h-32" placeholder="Your message"></textarea>
                    <div className='flex justify-center mt-5'>
                        <input type='submit' className='btn btn-primary bg-gradient-to-r from-secondary to-primary text-white px-8'></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;