import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllUser = () => {


    const {data:users=[],refetch} = useQuery({
        queryKey:['users'],
        queryFn: () =>
            fetch('http://localhost:5000/users')
            .then((res) => res.json(),
            ),
    })

    const handleAdmin = id =>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method:'PUT',
            headers:{
                authorization:`brear ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make admin sucessfully')
                refetch()
            }
            
        })
    }

    return (
        <div>
            <h1>All user</h1>

            <div className="overflow-x-auto">
        <table className="table w-full">
            
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
           {
            users.map((user,i) => <tr key={user._id}>
                <th>{i+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{ user?.role !== 'admin' && <button onClick={() => handleAdmin(user._id)} className='btn btn-xs btn-primary'>Make admin</button>}</td>
                <td><button className='btn btn-xs btn-primary'>Delete</button></td>
            </tr>)
           }
            </tbody>
        </table>
</div>
        </div>
    );
};

export default AllUser;