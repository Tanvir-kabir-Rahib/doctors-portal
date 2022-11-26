import React from 'react';
import doctor from '../../../../assets/images/doctor-small.png'

const AppointmentSec = () => {
    return (
        <div className='mt-32'>
            <div className="hero bg-appointmentBg bg-cover bg-no-repeat rounded-xl">
                <div className="hero-content flex-col lg:flex-row pb-0">
                    <figure className='hidden lg:block w-1/2'>
                        <img src={doctor} className="w-4/5" alt='' />
                    </figure>
                    <div className='w-full lg:w-1/2 py-6 lg:py-0'>
                        <h4 className='text-secondary text-lg font-bold'>Appointment</h4>
                        <h1 className="text-4xl text-white font-bold py-4">Make an appointment Today</h1>
                        <p className="pb-10 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page..</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentSec;