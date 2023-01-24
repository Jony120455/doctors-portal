import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvalaibleOption from './AvalaibleOption';
import BookingModal from '../bookingModal/BookingModal'
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../loading/Loading';

const AvalaibleAppoitment = ({select}) => {
    const [tretMent, setTretment] = useState(null)
    const date = format(select,'PP')
    const {data:appoitmentOption = [], refetch, isLoading} = useQuery({
        queryKey:['appoitmentOption',date],
        queryFn: () => fetch(`https://doctors-c.vercel.app/appointmentOptions?date=${date}`)
        .then(res => res.json())
    })

        if(isLoading){
            return <Loading></Loading>
        }
        
    // useEffect(()=>{
        
    //     .then(data => setAppoitmentOption(data))
    // },[])
    return (
        <div className='my-16'>
            <p className='text-center text-2xl font-bold text-secondary'>Available Services on {format(select, 'PP')}</p>

            <div className=' mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    appoitmentOption.map(option => <AvalaibleOption
                    key={option._id}
                    option={option}
                    setTretment={setTretment}
                    
                    ></AvalaibleOption>)
                }
            </div>
            {
                tretMent &&
                <BookingModal
                    select={select}
                    tretMent={tretMent}
                    setTretment={setTretment}
                    refetch={refetch}
                    
                ></BookingModal>
            }
        </div>
    );
};

export default AvalaibleAppoitment;