import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import edu1 from '../../assests/education/edu1.png'
import edu2 from '../../assests/education/edu2.png'
import edu3 from '../../assests/education/edu3.png'
import edu4 from '../../assests/education/edu4.png'
import edu5 from '../../assests/education/edu5.png'
import '../../App.css'
import { Link } from 'react-router-dom';

const Education = () => {
    const cartInfo = [
        {
            id: 1,
            name: 'EduHub',
            img: edu1
        },
        {
            id: 2,
            name: 'Perfect Learn',
            img: edu2
        },
        {
            id: 3,
            name: 'EduWell',
            img: edu3
        },
        {
            id: 4,
            name: 'Known Education',
            img: edu4
        },
        {
            id: 5,
            name: 'WebUni',
            img: edu5
        },
    ]
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
    };
    return (
        <div>
            <h1 className='section-header'>Education</h1>
            <div className="pt-8 mb-20">
                <Slider {...settings}>
                  {
                    cartInfo.map(info => 
                    <div
                    key={info.id}
                     className="card shadow-md ">
                    <figure><img  src={info.img} alt="Shoes" /></figure>
                    <div className="p-8 flex items-center justify-between">
                        <div className=''>
                            <h1 className='card-p1 '>{info.name}</h1>
                            <div>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div>
                            <i className='fa-solid fa-cart-shopping cart-icon'></i>
                        </div>
                        <div>
                            <p className='live-btn'>
                                <Link className='card-anchor' >Live Preview</Link>
                            </p>
                            <p className='buy-btn'>
                                <Link className='card-anchor' >Buy at ₹ 999</Link>
                            </p>
                        </div>
                    </div>
                </div>)
                  }
                    {/* <div className="px-2 drop-shadow-2xl">
                        <img src={edu2} alt=""></img>
                        <h1>hell</h1>
                    </div>
                    <div className="px-2 drop-shadow-2xl">
                        <img src={edu3} alt=""></img>
                    </div>
                    <div className="px-2">
                        <img src={edu4} alt=""></img>
                    </div> */}
                </Slider>
            </div>
        </div>
    );
};

export default Education;