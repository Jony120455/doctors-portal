import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useAdmin from '../../../hooks/UseAdmin';
import Loading from '../../../loading/Loading';

const RouteAdmin = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    const [isAdmin, setIsloadAdmin] = useAdmin(user?.email)

    if(loading || setIsloadAdmin){
        return <Loading></Loading>
    }

    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default RouteAdmin;