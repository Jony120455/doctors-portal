import React from 'react';
import dockor from '../../../assets/images/doctor-small.png'
import './Appoitment.css'

const Appoitment = () => {
    return (
        <section className='ap mt-32'>
            <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
            <img src={dockor} alt='' className=" -mt-32 lg:w-1/2 rounded-lg -mb-4 hidden lg:block" />
            <div>
                <h4 className='text-primary text-3xl font-bold'>Appointment</h4>
            <h1 className="text-4xl text-white font-bold">Make an appointment Today</h1>
            <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
            <button className="btn text-white btn-primary">Get Started</button>
            </div>
        </div>
        </div>
        </section>
    );
};

export default Appoitment;