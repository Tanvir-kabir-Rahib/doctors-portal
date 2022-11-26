import React from 'react';
import clockicon from '../../../../assets/icons/clock.svg';
import locationicon from '../../../../assets/icons/marker.svg';
import phoneicon from '../../../../assets/icons/phone.svg';

const ServiceArea = () => {
    return (
        <div className='mt-56 grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-white px-0 md:px-8 pb-8'>
            <div className="card card-side bg-gradient-to-r from-secondary to-primary shadow-xl p-5 justify-center">
                <figure><img src={clockicon} alt="Movie" /></figure>
                <div className="card-body p-5">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Open at 9:00 am to 5:00 pm everyday</p>
                </div>
            </div>
            <div className="card card-side bg-accent shadow-xl p-5 justify-center">
                <figure><img src={locationicon} alt="Movie" /></figure>
                <div className="card-body p-5">
                    <h2 className="card-title">Visit Our Location</h2>
                    <p>Gilata Madrasha Road, Jahanabad Cant, Khulna</p>
                </div>
            </div>
            <div className="card card-side bg-gradient-to-r from-secondary to-primary shadow-xl p-5 justify-center">
                <figure><img src={phoneicon} alt="Movie" /></figure>
                <div className="card-body p-5">
                    <h2 className="card-title">Contact Us Now</h2>
                    <p>+88 017 4829 3786</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceArea;