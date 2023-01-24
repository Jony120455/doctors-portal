import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({tretMent,select,setTretment, refetch}) => {
    const {name,price,slots} = tretMent;
    const {user} = useContext(AuthContext)
    const date = format(select, 'PP');

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const nameE = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking ={
            appointmentDate : date,
            tretMent : name,
            patient:nameE,
            slot,
            email,
            phone,
            price
        }
        // fetch('https://doctors-c.vercel.app/bookings', {
            
        // })
        fetch('https://doctors-c.vercel.app/bookings', {
            method: 'POST', 
             headers: {
                'Content-Type': 'application/json',
                 },
                body: JSON.stringify(booking),
            })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.acknowledged){
                setTretment(null)
                toast.success('booking confirmed')
                refetch()
            }
            else{
                toast.error(data.message)
            }
            
        })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 mt-6'>
                    <input type="text" value={date} disabled className="input w-full input-bordered" />
                    <select name='slot' className="select select-bordered w-full ">
                        
                        {
                            slots.map((slot, i) =><option value={slot}
                            key={i} 
                            > {slot}</option>)
                        }
                    </select>
                    <input name='name' type="text" disabled defaultValue={user?.displayName}placeholder="Your name" className="input w-full input-bordered" />
                    <input name='email' type="email" disabled defaultValue={user?.email} required placeholder="Your email address" className="input w-full input-bordered" />
                    <input name='phone' defaultValue={user} type="number" required placeholder="Phone number" className="input w-full input-bordered" />
                    <input className="w-full font-bold bg-accent text-white py-2 input-bordered" type='submit' value='Submit'/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;