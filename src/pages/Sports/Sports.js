import React from 'react';
import { Link } from 'react-router-dom';
import sport1 from '../../assests/sport/sport-1.png'
import sport2 from '../../assests/sport/sports-2.png'
import sport3 from '../../assests/sport/sports-3.jpg'

const Sports = () => {

    const sportsInfo = [
        
            {
                id: 1,
                name: 'Run',
                img: sport1
            },
            {
                id: 2,
                name: 'Play',
                img: sport2
            },
            {
                id: 3,
                name: 'Ball Bat',
                img: sport3
            },
        
    ]

    return (

       <div className='bg-slate-900 text-white'>
         <h1 className='text-5xl p-20 font-bold'>Sports</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-14'>
             {
                sportsInfo.map(sport => <div
                    key={sport.id} >
                    <figure><img  src={sport.img} alt="Shoes" /></figure>
                    <div className="pt-8 flex items-center justify-between">
                        <div className=''>
                            <h1 className='card-p1 '>{sport.name}</h1>
                            <div className='star'>
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
        </div>
       </div>
    );
};

export default Sports;