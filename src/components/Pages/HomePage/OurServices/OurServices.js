import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png';
import cavity from '../../../../assets/images/cavity.png';
import whitening from '../../../../assets/images/whitening.png';


const OurServices = () => {
    return (
        <div className='mt-32'>
            <div className='text-center'>
                <h2 className='text-secondary uppercase text-md font-bold'>Our Services</h2>
                <h4 className='text-3xl'>Services We Provide</h4>
            </div>
            <div className=' mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-0 md:px-8 pb-8'>
                <div className="card shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={fluoride} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fluoride Treatment</h2>
                        <p></p>
                    </div>
                </div>
                <div className="card shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={cavity} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cavity Filling</h2>
                        <p></p>
                    </div>
                </div>
                <div className="card shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={whitening} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Teeth Whitening</h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;