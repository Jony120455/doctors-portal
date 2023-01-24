import React from 'react';
import Appoitment from '../Appoitment/Appoitment/Appoitment';
import Banner from './banner/Banner';
import Contact from './contact/Contact';
import Dental from './dental/Dental';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import Testimonial from './testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Dental></Dental>
            <Appoitment></Appoitment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;