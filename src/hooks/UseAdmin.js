import { useEffect, useState } from "react"

const useAdmin = email =>{
    const [isAdmin, setIsadmin] = useState(false)
    const [isloadAdmin, setIsloadAdmin] = useState(true)
    useEffect(() => {
        fetch(`https://doctors-c.vercel.app/users/admin/${email}`)
        .then(res => res.json())
        .then(data => {
            setIsadmin(data.isAdmin)
            setIsloadAdmin(false)
        })
    },[email])
    return [isAdmin, isloadAdmin]
}

export default useAdmin