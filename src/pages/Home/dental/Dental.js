import React from 'react';
import tretment from '../../../assets/images/treatment.png'

const Dental = () => {
    return (
        <div className="hero  mt-16">
        <div className="hero-content flex-col lg:flex-row">
            <img src={tretment} alt="" className=" lg:w-1/2 rounded-lg shadow-2xl" />
            <div className='p-4'>
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn btn-primary text-white">GET STARTED</button>
            </div>
        </div>
        </div>
    );
};

export default Dental;