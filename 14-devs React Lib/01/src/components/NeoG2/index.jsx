import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import UserCard from "./components/UserCard";

const Neog2 =()=>{
    const [users,setUsers] = useState([])
    const fetchUsers = useCallback(async()=>{
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(data.data)
    },[])

    const handleClick = ()=>{
        fetchUsers()
    }

    // useEffect(()=>{
    //     fetchUsers()
    // },[])

    console.log(users)

    return (
        <div>
            <h1>Hello Day 2 Neog</h1>
            <button onClick={handleClick} className="px-4 py-2 bg-lime-800 text-xl text-white">Load Data</button>
            <div className="grid grid-cols-4 border-2 border-black">
                   {
                    users.map((each)=>{
                        return (
                        <UserCard 
                        key={each.id}
                        email={each.email}
                        name={each.name}
                        phone={each.phone}
                        website={each.website}
                        address={each.address.city}
                        />
                        )

                    })
                   }
            </div>
        </div>
    )
}

export default Neog2;
