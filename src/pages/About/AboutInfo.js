import React from 'react';
import about from '../../assests/About-Us-PNG-Photo.png'

const AboutInfo = () => {
    return (
        <div className="hero px-5 my-20">
        <div className="hero-content flex-col lg:flex-row ">
          <img src={about} alt="" className=" rounded-lg shadow-2xl" />
          <div className="pl-8">
            <h1 className="text-7xl font-extrabold dancing pt-2">About Us</h1>
            <p className="py-6">
            You can easily do manicure at home. You don’t have to take the time to go to the parlor. You can easily do manicure sitting at home. Let’s not know how to do a manicure at home. reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.
            </p>
            
          </div>
        </div>
      </div>
    );
};

export default AboutInfo;