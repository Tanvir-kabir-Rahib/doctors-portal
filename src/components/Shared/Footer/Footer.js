import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='py-32 bg-footerBg bg-cover bg-no-repeat'>
            <div className="footer p-10">
                <div className='md:mx-auto'>
                    <span className="footer-title text-xl">Services</span>
                    <Link to='/' className="link link-hover text-lg">Emergency Checkup</Link>
                    <Link to='/' className="link link-hover text-lg">Monthly Checkup</Link>
                    <Link to='/' className="link link-hover text-lg">Weekly Checkup</Link>
                    <Link to='/' className="link link-hover text-lg">Deep Checkup</Link>
                </div>
                <div className='md:mx-auto'>
                    <span className="footer-title text-xl">Oral Health</span>
                    <Link to='/' className="link link-hover text-lg">Fluoride Treatment</Link>
                    <Link to='/' className="link link-hover text-lg">Cavity Filling</Link>
                    <Link to='/' className="link link-hover text-lg">Teeth Whitening</Link>
                </div>
                <div className='md:mx-auto'>
                    <span className="footer-title text-xl">Our Address</span>
                    <Link className="link link-hover text-lg">Gilatala - Jahanabad Cant</Link>
                </div>
            </div>
            <div className='text-center text-lg mt-14'>
                <p>Copyright © 2022 - All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;