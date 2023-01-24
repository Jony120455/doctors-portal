import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const servisedatas = [
        {
            id:1,
            name:'Fluoride Treatment',
            des:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon:fluoride
        },
        {
            id:2,
            name:'Cavity Filling',
            des:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon:cavity
        },
        {
            id:3,
            name:'Teeth Whitening',
            des:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon:whitening
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h2 className='text-3xl text-primary font-bold'>OUR SERVICES</h2>
                <h3 className='text-3xl'>Services We Provide</h3>
            </div>
            <div className='grid gap-8 mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servisedatas.map(serviceData => <Service
                    
                    key={serviceData.id}
                    serviceData={serviceData}
                    
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;