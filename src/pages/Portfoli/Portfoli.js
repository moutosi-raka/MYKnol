import React from 'react';
import { Link } from 'react-router-dom';
import portfoli1 from '../../assests/portfoli/portfoli1.jpg'
import portfoli2 from '../../assests/portfoli/portfoli2.jpeg'
import portfoli3 from '../../assests/portfoli/portfoli3.jpg'

const Portfoli = () => {
    const portfoliInfo = [
        
        {
            id: 1,
            name: 'Portfoli',
            img: portfoli1
        },
        {
            id: 2,
            name: 'Portfoli',
            img: portfoli2
        },
        {
            id: 3,
            name: 'Portfoli',
            img: portfoli3
        },
    
]
    return (
        <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto p-4 my-6 space-y-2 text-center">
		<h2 className="text-5xl font-bold">Portfoli</h2>
		<p className="dark:text-gray-400">Built Your Portfoli</p>
	</div>
	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{
            portfoliInfo.map(port => <div className="flex flex-col items-center p-4">
            <img className='' src={port.img} alt='' />
			<h3 className="my-3 text-3xl font-semibold">{port.name}</h3>
			<div className="flex justify-between mt-12">
            <button className="btn btn-outline btn-secondary mr-10">Live Preview</button>
            <button className="btn btn-outline btn-secondary">Buy 999</button>
			</div>
		</div>)
        }
	</div>
</section>
    );
};

export default Portfoli;