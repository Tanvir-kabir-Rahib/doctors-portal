import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className='h-[800px] flex justify-center items-center' >
            <form onSubmit={handleSubmit(onSubmit)} className='w-11/12 md:w-3/4 lg:w-4/12 shadow-xl p-10 rounded-xl'>
                <h1 className='text-2xl text-center mb-5'>Register</h1>
                <div className='form-contorl'>
                    <label className='label label-text'>Name</label>
                    <input type='Name' className='input input-bordered w-full' {...register("Name", { required: true, maxLength: 20 })} />
                </div>
                <div className='form-contorl'>
                    <label className='label label-text'>Email</label>
                    <input type='email' className='input input-bordered w-full' {...register("Email", { required: true })} />
                </div>
                <div className='form-control'>
                    <label className='label label-text'>Password</label>
                    <input type='password' {...register("Password")} className='input input-bordered w-full' required />
                </div>
                <div className='form-control mb-3'>
                    <input type="submit" value='Register' className='btn btn-accent mt-5' />
                </div>
                <p className='text-center'>Already Have an Account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn w-full bg-white text-accent text-lg font-normal hover:bg-accent hover:text-white'>Continue With Google</button>
            </form>
        </div>
    );
};

export default Register;