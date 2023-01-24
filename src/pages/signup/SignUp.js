import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const {register, handleSubmit,formState: { errors }} = useForm()
    const {signup,updatePro} = useContext(AuthContext)
    const [signUpError, setsignUpError] = useState('')
    const [creatUserEmail ,setCreatUserEmail] = useState('')
    const [token] = useToken(creatUserEmail)
    const navigate = useNavigate()

    if(token){
        navigate('/')
    }
    const handleSign = data =>{  
        console.log(data);
        setsignUpError('')
        signup(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
             toast('Successfully submited')
            const userInfo = {
                 displayName: data.name
            }
            updatePro(userInfo)
            .then(() => { 
                userdata(data.name, data.email)
               
            })
            .catch(err => console.log(err))
                
            
        })
        .catch(error => {
            console.log(error)
            setsignUpError(error.message)
        })
    }

    const userdata = (name,email) =>{
        const user ={name, email}
        fetch('https://doctors-c.vercel.app/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
            })
            .then((response) => response.json())
            .then((data) => {
                setCreatUserEmail(email)
            })
    }

    return (
        <div className='drop-shadow h-[600px] flex justify-center items-center'>
            <div className='border shadow-neutral-900 hue-rotate-15 w-96 p-7'>
                <h1 className='text-3xl text-center'>Sign Up</h1>
            <form onSubmit={handleSubmit(handleSign)}>

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
                                <span className="label-text">Password</span>  
                            </label>
                            <input type='password'  {...register("password",
                            { required: 'Enter your password',
                            
                                
                                    minLength:{value:6, message:'password must be 6 charactors or long'},
                                    pattern:{value:/(?=(.*[A-Z]){2,})/, message:'Password must be strong'}
                                
                            
                            }
                            
                            )}  className="input input-bordered w-full max-w-xs" />
                            {errors.password && <span className='text-red-500'>{errors.password.message}</span>}

                            
                    </div>
                     <input  type='submit' value='SIGN UP' className="btn mt-4  w-full max-w-xs bg-accent text-white" />
                            {
                                signUpError && <p className='text-red-500'>{signUpError}</p>
                            }
            </form>
                <span className=''>Already have an account ? <Link to='/login' className='text-secondary'>Sign </Link></span>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;