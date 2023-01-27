import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const {signIn,user}= useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    // const [loginToken, setLoginToken] = useState('')
    const [token] = useToken(user?.email)

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    if(token){
        navigate(from,{replace:true});
    }
    const handleData = data =>{
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            // setLoginToken(user.email)
            
        })
        .catch(error =>{
            console.error(error.message)
            setLoginError(error.message)
        })
    }
    return (
        <div className='drop-shadow h-[600px] flex justify-center items-center'>
            <div className='border shadow-neutral-900 hue-rotate-15 w-96 p-7'>
                <h1 className='text-3xl text-center'>Login</h1>
            <form onSubmit={handleSubmit(handleData)}>

                    <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Enter your email</span>
                                
                            </label>
                            <input type='text'  {...register("email",{ required: "Email Address is required" })} 
                            aria-invalid={errors.email ? "true" : "false"}  className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                                
                            </label>
                            <input type='password'  {...register("password",{
                                required:'enter your password', 
                                minLength:{value:6, message:"must be 6 charectors or long"},
                               
                            }
                            )}  className="input input-bordered w-full max-w-xs" />
                            {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                            
                    </div>
                    <div>
                        {
                            loginError && <p className='text-red-600'>{loginError}</p>
                        }
                    </div>
                    <label className="label">
                                <span className="label-text">forget password</span>
                                
                            </label>
                     <input  type='submit' value='LOGIN' className="btn  w-full max-w-xs bg-accent text-white" />

            </form>
                <span className=''>New to Doctors Portal ? <Link to='/signup' className='text-secondary'>Create new account</Link></span>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;