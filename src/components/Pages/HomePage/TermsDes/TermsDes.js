import React from 'react';
import treatment from '../../../../assets/images/treatment.png'

const TermsDes = () => {
    return (
        <div className='mt-32'>
            <div className="card lg:card-side w-full md:w-4/5 mx-auto">
                <figure className='w-full lg:w-2/5'><img src={treatment} alt="Movie" className='w-full h-full rounded-2xl' /></figure>
                <div className="card-body w-full lg:w-3/5 p-0 lg:p-20 mt-10 lg:mt-0">
                    <h2 className="card-title text-accent text-5xl font-bold mb-6">Exceptional Dental Care, on Your Terms</h2>
                    <div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <div className="card-actions justify-start mt-10">
                            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsDes;