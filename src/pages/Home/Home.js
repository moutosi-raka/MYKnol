import React from 'react';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import '../Banner/Banner.css'
import Category from '../Category/Category';

const Home = () => {
    return (
       <div>
         <div className='banner'>
            <HomeNavbar></HomeNavbar>
           <div className='w-2/3 mx-auto text-white mt-16 text-center'>
           <h1 className='text-7xl font-extrabold'>Your Dream Websites and instant apps awaits!</h1>
           <p className='text-2xl font-semibold mt-12'>Welcome to our fresh collection of themes. Hope you find your dream website and instant apps here. Start your journey with our themes.</p>
           </div>
        </div>
        <Category></Category>
       </div>
    );
};

export default Home;