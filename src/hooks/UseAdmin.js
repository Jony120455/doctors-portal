import { useEffect, useState } from "react"

const useAdmin = email =>{
    const [isAdmin, setIsadmin] = useState(false)
    const [isloadAdmin, setIsloadAdmin] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/users/admin/${email}`)
        .then(res => res.json())
        .then(data => {
            setIsadmin(data.isAdmin)
            setIsloadAdmin(false)
        })
    },[email])
    return [isAdmin, isloadAdmin]
}

export default useAdmin