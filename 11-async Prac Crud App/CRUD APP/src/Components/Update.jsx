import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createUser, updateUser } from '../ReduxToolkit/Slices/UserDetailSlice';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    /**
     * @description - Hold the user data from api
     */

    const {users , loading} = useSelector((state)=>state.app)
    const [updateUserData, setUpdateUser] = useState({})
    const navigate = useNavigate();
    

    /**
     * @description - Handle the change event of input
     * @param {object} e - Event object
     */
    const newData = (e) => {
       setUpdateUser({...updateUserData, [e.target.name]: e.target.value})
    }

    console.log(updateUserData)




useEffect(()=>{
    if(id){
        const singleUserToBeEdited = users.find((ele) => ele.id === id);

        setUpdateUser(singleUserToBeEdited)
    }
    
   
},[])


   

    const handleUpdate = (e) => {
        e.preventDefault();

        dispatch(updateUser(updateUserData))
        navigate('/read')
        
    
        
       
        
    }

    return (
        <div className="w-full bg-blue-300 max-w-xs mx-auto my-8">
            <h1 className='text-3xl text-center'>Update User</h1>
            <form onSubmit={handleUpdate} className="bg-blue-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-indigo-800" >
                <div className="mb-4 dark:text-white">
                    <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input onChange={newData} 
                    name="name"
                    value={updateUserData && updateUserData.name} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input onChange={newData} 
                    name="email" 
                    value={updateUserData && updateUserData.email}

                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="age">Age</label>

                    <input onChange={newData} 
                    name="age" 
                    value={updateUserData && updateUserData.age}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm dark:text-white font-bold mb-2" htmlFor="gender">Gender</label>
                    <select onChange={newData} 
                    name="gender" 
                    value={updateUser && updateUserData.gender}
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>

                    <button className='bg-blue-500 w-full items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>Add User</button>
                </div>
            </form>
        </div>
    )
}

export default Update

