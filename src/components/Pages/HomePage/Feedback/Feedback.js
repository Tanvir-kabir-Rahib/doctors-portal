import React from 'react';
import feedbacker from '../../../../assets/images/people1.png';
import qoute from '../../../../assets/icons/quote.svg'

const Feedback = () => {
    return (
        <div className='mt-32'>
            <div className='mb-16 flex justify-between'>
                <div>
                    <h2 className='text-secondary font-bold text-xl'>Testimonial</h2>
                    <p className='text-4xl'>What Our Patients Says</p>
                </div>
                <div>
                    <img src={qoute} alt='' className='w-48'></img>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16'>
                <div className="card shadow-2xl">
                    <div className="card-body">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content </p>
                        <div className="card-actions items-center justify-start mt-3">
                            <div className='border-4 border-secondary rounded-full'>
                                <img className="w-16 m-1" src={feedbacker} alt=''></img>
                            </div>
                            <div>
                                <h1 className='card-title'>Winson Herry</h1>
                                <p>California</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card shadow-2xl">
                    <div className="card-body">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content </p>
                        <div className="card-actions items-center justify-start mt-3">
                            <div className='border-4 border-secondary rounded-full'>
                                <img className="w-16 m-1" src={feedbacker} alt=''></img>
                            </div>
                            <div>
                                <h1 className='card-title'>Winson Herry</h1>
                                <p>California</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card shadow-2xl">
                    <div className="card-body">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content </p>
                        <div className="card-actions items-center justify-start mt-3">
                            <div className='border-4 border-secondary rounded-full'>
                                <img className="w-16 m-1" src={feedbacker} alt=''></img>
                            </div>
                            <div>
                                <h1 className='card-title'>Winson Herry</h1>
                                <p>California</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;