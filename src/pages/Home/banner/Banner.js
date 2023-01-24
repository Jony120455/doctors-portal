import React from 'react';
import chir from '../../../assets/images/chair.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className="hero  banner">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chir} className=" sm:w-1/2 rounded-lg  shadow-2xl" alt='chair' />
    <div className='p-2'>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;