import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Category.css'



const Category = () => {

    // const Categories = [
    //     {
    //         id: 1,
    //         icons: '',
    //         name: 'Education'
    //     },
    //     {
    //         id: 2,
    //         icons: '',
    //         name: 'Sports'
    //     },
    //     {
    //         id: 3,
    //         icons: '',
    //         name: 'Ecommerce'
    //     },
    //     {
    //         id: 4,
    //         icons: '',
    //         name: 'portfolio'
    //     },
    //     {
    //         id: 5,
    //         icons: '',
    //         name: 'No Profite'
    //     }
    // ]
    const [categories, setCategories] = useState([]);

    useEffect( ()=>{
        fetch('Category.json')
        .then(res => res.json())
        .then(data => {
            console.log('data' , data)
            setCategories(data)
        })
    },[])
    return (
        <div>
            <div className='my-12 text-center'>
                <h1 className='text-4xl'>Our Categories</h1>
            </div>
            <div className='grid md:grid-cols-4 lg:grid-cols-7 grid-cols-2 gap-4 w-11/12 mx-auto my-20'>
           
               {
                    categories.map(category =>
                    <div key={category.id} className="card bg-base-100 cate-card ">
                    <div className="card-body">
                     
                      <i className={`${category.icons}`}></i>
                      <p className='h-p1'>{category.name}</p>
                    </div>
                  </div>)
                }
               </div>
          
        </div>
    );
};

export default Category;