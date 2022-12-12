import React from 'react';
import './Contact.css'

const ContactInfo = () => {

    const ContactInfo = [
        {
            id:1,
            type: 'Email',
            name: "raka29077997@gmail.com",
            icons: 'fa-solid fa-envelope ct-icon1'
            
        },
        {
            id:2,
            type: 'Phone',
            name: "0000000",
            icons: 'fa-solid fa-headphones ct-icon1'
        },
        {
            id:1,
            type: 'Address',
            name: "Dhaka, Bangladesh",
            icons: 'fa-solid fa-people-line ct-icon1'
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 my-20 mx-5'>
            {
               ContactInfo.map(contact => <div className="card w-96 bg-slate-800 text-primary-content">
               <div className="card-body text-center">
                <i className={`${contact.icons}`}></i>
                 <h2 className="text-2xl mt-3 font-semibold text-center">{contact.type}</h2>
                 <p>{contact.name}</p>
               </div>
             </div>) 
            }
        </div>
    );
};

export default ContactInfo;