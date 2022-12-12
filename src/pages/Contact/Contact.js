import React from 'react';
import Footer from '../Footer/Footer';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import ContactBanner from './ContactBanner';
import ContactInfo from './ContactInfo';


const Contact = () => {
    return (
        <div>
        <div className='bg-slate-800 '>
        <HomeNavbar></HomeNavbar> 
        </div>
        <ContactBanner></ContactBanner>
        <ContactInfo></ContactInfo>
        <Footer></Footer>
    </div>
    );
};

export default Contact;