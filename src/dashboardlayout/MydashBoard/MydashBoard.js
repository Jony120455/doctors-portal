import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const MydashBoard = () => {

    const {user} = useContext(AuthContext)
    const {data:bookings = []} = useQuery({
        queryKey:['bookings',user?.email],
        queryFn:()=>fetch(`https://doctors-c.vercel.app/bookings?email=${user?.email}`,{

         headers:{

             authorization:`brear ${localStorage.getItem('accessToken')}`

         }


        }).then(
            (res) => res.json(),
          ),

    })
    return (
        <div>
            <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
   
         <thead>
            <tr>
                <th>SeNo.</th>
                <th>Name</th>
                <th>TretMent</th>
                <th>Slots</th>
                <th>AppointmentDate</th>
                <th>Payment</th>
            </tr>
        </thead>
    <tbody>
      {
        bookings.map((booking,i) =>
        
        <tr>
            <th>{i+1}</th>
            <td>{booking.patient}</td>
            <td>{booking.tretMent}</td>
            <td>{booking.slot}</td>
            <td>{booking.appointmentDate}</td>
            <td>
                {
                    booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                    
                    <button className='btn btn-outline'>
                        pay
                    </button>
                    
                    </Link>
                }
                {
                    booking.price && booking.paid && <button>Paid</button>
                }
            </td>
        </tr>
        
        )
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MydashBoard;