import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../loading/Loading';
import ConformationModal from '../../pages/conformationModal/ConformationModal';

const ManageDoctors = () => {
const [deleting, setDeleting] = useState(null)
    const {data:doctors, isLoading, refetch} = useQuery({
        queryKey:['doctors'],
        queryFn: () =>
        fetch('https://doctors-c.vercel.app/doctors',{

                headers: {
                    'Content-Type': 'application/json',
                    authorization:`brear ${localStorage.getItem('accessToken')}`
                },
                

        }).then(
          (res) => res.json(),
        ),
    
    })
    if(isLoading){
        return <Loading></Loading>
    }

    const closeModal =() =>{
        setDeleting(null)
    }
    const deletingModal = doctor =>{
        fetch(`https://doctors-c.vercel.app/doctors/${doctor._id}`,{
            method:'DELETE',
            headers: {
                authorization:`brear ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                refetch()
                toast.success('Successfully deleted')

            }
        })
    }
    return (
        <div>
            <h1 className='text-3xl'>Manage Doctors</h1>

            <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                        <tr>
                            <th>SeNo</th>
                            <th>Avater</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                doctors.map((doctor,i) =>
                                
                                <tr key={doctor._id}>
                                    <th>{1+i}</th>
                                    <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={doctor.image} alt=''/>
                                        </div>
                                        </div>

                                    </td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.specialty}</td>
                                    
                                    <td>
                                    <label onClick={() => setDeleting(doctor)} htmlFor="conformation-modal" className="btn">Delete</label>
                                        
                                        </td>
                                </tr>
                                
                                )
                            }
                        
                        
                      
                        </tbody>
                    </table>
                    </div>

                    {
                        deleting && <ConformationModal
                        title ={`Are you sure you want to delete`}
                        message ={`If you delete ${deleting.name}`}
                        deletingModal={deletingModal}
                        deleting={deleting}
                        closeModal ={closeModal}
                        deleteDoc = 'Delete'
                        ></ConformationModal>
                    }

        </div>
    );
};

export default ManageDoctors;