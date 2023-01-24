import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({booking}) => {
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [procecing, setProcecing] = useState(false)
    const [tansactionId, setTansactionId] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const {price, patient,email,_id } =booking

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://doctors-c.vercel.app/create-payment-intent", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            authorization:`brear ${localStorage.getItem('accessToken')}`
         },
          body: JSON.stringify({ price }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
          }


        const card = elements.getElement(CardElement);
        if(card == null){
            return
        }
       
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            console.log(error);
            setCardError(error.message)
          }
          else{
            setCardError('')
          }
          setSuccess('')
          setProcecing(true)
          const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patient,
                  email:email
                },
              },
            },
          );

          if(confirmError){
            setCardError(confirmError.message)
            return
          }

          const payment ={
              price,
              transtionId:paymentIntent.id,
              email,
              bookingId:_id

          }
          if(paymentIntent.status === 'succeeded'){
                console.log('card success', card);

                fetch("https://doctors-c.vercel.app/payments", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            authorization:`brear ${localStorage.getItem('accessToken')}`
         },
          body: JSON.stringify(payment),
        })
          .then((res) => res.json())
          .then(data => {
            if(data.insertedId){
              setSuccess('Congrats! your payments is complete')
              setTansactionId(paymentIntent.id)
            }
          });
          }
          setProcecing(false)
          
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='mt-5 font-bold' type="submit" disabled={!stripe || !clientSecret || procecing}>
          Pay
        </button>
      </form>
      <p className='text-red-500'>{cardError}</p>

      {
        success && <div>
            <p className='text-red-500'>{success}</p>
            <p className='text-red-500'> Your trns ID {tansactionId}</p>
        </div>
      }
        </>
    );
};

export default CheckOutForm;