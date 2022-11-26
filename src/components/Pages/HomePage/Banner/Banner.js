import React from 'react';
import bannerImg from "../../../../assets/images/chair.png"

const Banner = () => {
    return (
            <div className="hero pt-20 md:pt-32 px-8">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between p-0">
                    <img src={bannerImg} className="rounded-lg shadow-2xl w-full md:w-11/12 lg:w-1/2 lg:ml-10" alt=''/>
                    <div className='w-full md:w-11/12 lg:w-1/2 lg:mr-10 mt-16 lg:mt-0'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
    );
};

export default Banner;