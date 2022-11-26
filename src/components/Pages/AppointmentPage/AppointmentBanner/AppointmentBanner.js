import React from 'react';
import bannerImg from '../../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header className="hero py-32 md:pt-32 px-8 bg-bannerBg bg-cover bg-no-repeat">
            <div className="hero-content flex-col lg:flex-row-reverse p-0">
                <img src={bannerImg} className="rounded-lg shadow-2xl w-full md:w-11/12 lg:w-1/2 lg:ml-10" alt='' />
                <div className='w-full md:w-11/12 lg:w-1/2 lg:mr-10 mt-16 lg:mt-0'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;