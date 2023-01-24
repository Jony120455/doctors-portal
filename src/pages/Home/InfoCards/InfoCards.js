import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {

    const infoDatas =[
        {
            id:1,
            name:'Opening Hours',
            info:'9am to 10pm',
            icon: clock,
            color:'bg-primary'

        },
        {
            id:2,
            name:'Visit our location',
            info:'Dhanmondi 32',
            icon: marker,
            color:'bg-neutral'

        },
        {
            id:3,
            name:'Contact us now',
            info:'01869068778',
            icon: phone,
            color:'bg-primary'

        },
    ]
    return (
        <div className='grid grid-cols-1 mt-9 md:grid-cols-2 gap-6  lg:grid-cols-3'>
            {
                infoDatas.map(card => <InfoCard
                
                key={card.id}

                card={card}
                
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;