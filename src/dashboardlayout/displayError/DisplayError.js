import React from 'react';
import { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const DisplayError = () => {
    const error = useRouteError()
    const {logOut}= useContext(AuthContext)
    const handlelogOut= () =>{
        logOut()
        .then(() =>{})
        .catch(error => console.error(error))
      }
    return (
        <div>
            <p className='text-red-500'>Something went wrong</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h2>Please <button onClick={handlelogOut}>Log out</button> and login</h2>
        </div>
    );
};

export default DisplayError;