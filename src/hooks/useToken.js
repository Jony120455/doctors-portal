import { useEffect, useState } from "react"


const useToken = email =>{
    console.log('from use token',email);
        const [token, setToken] = useState('')
    useEffect(() =>{
        
        if(email){
            fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data =>{
                console.log('data load',data);
                if(data){
                    localStorage.setItem('accessToken', data.accessToken)
                    setToken(data.accessToken)
                }
            })
        }


    },[email])
    return[token]
   

}

export default useToken