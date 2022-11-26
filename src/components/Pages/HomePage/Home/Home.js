import React from 'react';
import AppointmentSec from '../AppointmentSec/AppointmentSec';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import Feedback from '../Feedback/Feedback';
import OurServices from '../OurServices/OurServices';
import ServiceArea from '../ServiceArea/ServiceArea';
import TermsDes from '../TermsDes/TermsDes';

const Home = () => {
    return (
        <div className='mx-5'>
            <div className='bg-bannerBg bg-cover bg-no-repeat rounded-3xl'>
                <Banner></Banner>
                <ServiceArea></ServiceArea>
            </div>
            <div>
                <OurServices></OurServices>
                <TermsDes></TermsDes>
                <AppointmentSec></AppointmentSec>
                <Feedback></Feedback>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default Home;