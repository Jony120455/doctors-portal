import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../components/firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const signup = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const signIn =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const updatePro = userInfo =>{
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('observe running');
            setUser(currentUser)
            setLoading(false)
            
        });
        return () => unsubscribe()
    },[])
    const authInfo ={
        signup,
        signIn,
        updatePro,
        logOut,
        user,
        loading
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;