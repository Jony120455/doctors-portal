import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
console.log(stripePromise);
const Payment = () => {
    const booking = useLoaderData()
    const {tretMent,slot,price} = booking
    return (
        <div>
            <h1 className='text-3xl'>Payment Methode</h1>
            <h3 className='text-2xl text-red-600'>Payment for {tretMent}</h3>
            <p>payment <span className='text-red-800 font-bold'>${price}</span> and avalailabel your slots {slot}</p>

            <div className='mt-5 w-60 mb-5'>
            <Elements stripe={stripePromise}>
                <CheckOutForm
                booking={booking}
                
                />
            </Elements>
            </div>
        </div>
    );
};

export default Payment;