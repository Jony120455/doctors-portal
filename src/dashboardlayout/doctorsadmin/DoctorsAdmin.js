import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../loading/Loading';

const DoctorsAdmin = () => {
    const {register, handleSubmit,formState: { errors }} = useForm()
    const imgHosting = process.env.REACT_APP_imgbb_key

    const navigate = useNavigate()
    const {data:specialtys, isLoading} = useQuery({

        queryKey:['specialty'],
        queryFn: () =>
        fetch('http://localhost:5000/specialtyappointments').then(
          (res) => res.json(),
        ),
    })

    const handleDoctor = data =>{
        const formData = new FormData();
        const image = data.image[0];
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHosting}`

        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(imgData =>{
            if(imgData.success){
                console.log(imgData.data.url);
                const doctor ={
                    name:data.name,
                    email: data.email,
                    specialty:data.specialty,
                    image:imgData.data.url
                }
                fetch('http://localhost:5000/doctors', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    authorization:`brear ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(doctor),
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    toast.success('Doctors is added')
                    navigate('/dashboard/managedoctors')
                })
            }
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>Doctors</h1>
            <form onSubmit={handleSubmit(handleDoctor)}>

                    <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Enter your name</span>
                                
                            </label>
                            <input type='text'  {...register("name", { required: true })} 
                             className="input input-bordered w-full max-w-xs" />
                             {errors.name && <span className='text-red-500'>Enter your name</span>}
                            
                    </div>
                    <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Enter your email</span>
                                
                            </label>
                            <input type='email'  {...register("email", { required: true })} 
                             className="input input-bordered w-full max-w-xs" />
                             {errors.email && <span className='text-red-500'>Enter your email</span>}
                            
                    </div>
                    <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Specialty</span>  
                            </label> 
                            <select
                                {
                                    ...register('specialty')
                                }
                            
                            className="select select-ghost w-full max-w-xs">
                            <option disabled selected>Select your Specialty</option>
                            {
                                specialtys.map(specialti =><option
                                    key={specialti._id}
                                    value={specialti.name}
                                
                                >{specialti.name}</option>)
                            }
                            {/* <option>Svelte</option>
                            
                            <option>React</option> */}
                            </select>    
                    </div>
                    <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                                
                            </label>
                            <input type='file'  {...register("image", { required: true })} 
                             className="input input-bordered w-full max-w-xs" />
                             {errors.img && <span className='text-red-500'>Enter your name</span>}
                            
                    </div>
                     <input  type='submit' value='Add Doctor' className="btn mt-4  w-full max-w-xs bg-accent text-white" />

                            
            </form>

        </div>
    );
};

export default DoctorsAdmin;