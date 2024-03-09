import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../ReduxToolkit/Slices/UserDetailSlice';
import { useNavigate } from 'react-router-dom/dist';

const CreateForm = () => {
    const [user, setUser] = useState({ name: '', email: '', age: '', gender: 'Select' });
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleChange = (e) =>{
        if(!e.target.value) alert ('Please Enter Details');
        else setUser({...user, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(user));
        setUser({ name: '', email: '', age: '', gender: 'Select' });
        console.log(user)
        dispatch(createUser(user))
        navigate('/read')
    }

    return (
        <div className="w-full bg-blue-300 max-w-xs mx-auto my-8">
            <form onSubmit={handleSubmit} className="bg-blue-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-indigo-800" >
                <div className="mb-4 dark:text-white">
                    <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input onChange={handleChange} name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input onChange={handleChange} name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="age">Age</label>

                    <input onChange={handleChange} name="age" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm dark:text-white font-bold mb-2" htmlFor="gender">Gender</label>
                    <select onChange={handleChange} name="gender" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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

export default CreateForm