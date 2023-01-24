import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';


const Testimonial = () => {
    const reviws =[
        {
            _id:1,
            des:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people1,
            review:'Winson Herry',
            reDs:'California'
        },
        {
            _id:1,
            des:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people2,
            review:'Winson Herry',
            reDs:'California'
        },
        {
            _id:1,
            des:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people3,
            review:'Winson Herry',
            reDs:'California'
        },
    ]
    return (
        <section className='mt-20'>

            <div>

                <h4 className='text-3xl font-bold text-primary'>Testimonial</h4>
                <h2 className='text-4xl mt-2.5'>What Our Patients Says</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-14'>
                {
                    reviws.map(reviewC => <Review
                    
                    key={reviewC._id}

                    reviewC={reviewC}
                    
                    ></Review>)
                }
            </div>
            
        </section>
    );
};

export default Testimonial;