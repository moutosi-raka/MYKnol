import React from 'react';
import Footer from '../Footer/Footer';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import AboutBanner from './AboutBanner';
import AboutInfo from './AboutInfo';

const About = () => {
    return (
        <div>
            <div className='bg-slate-800 '>
            <HomeNavbar></HomeNavbar> 
            </div>
            <AboutBanner></AboutBanner>
            <AboutInfo></AboutInfo>
            <Footer></Footer>
        </div>
    );
};

export default About;