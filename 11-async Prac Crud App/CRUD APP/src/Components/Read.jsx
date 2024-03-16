import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showUser } from '../ReduxToolkit/Slices/UserDetailSlice';
import { Link } from 'react-router-dom';
import { deleteUser } from '../ReduxToolkit/Slices/UserDetailSlice';

const Read = () => {
    const dispatch = useDispatch();

    const {users, loading,searchData } =useSelector((state)=>state.app)

    const [selectGender, setSelectGender] = useState("")
    
    
    useEffect(() => {
        dispatch(showUser())

    },[])

console.log(searchData)

    if(loading){
        return <div className='text-3xl'>
            <h1>Loading...</h1>
            </div>
    }

    const handleGenderFilter = (e)=>{
      
    }



  return (
    <div className="container bg-gradient-to-l from-green-800 to-blue-800 text-white  ">
         <div>Filter By Gender
          <div>
          <div>
              <label>All
            <input type="radio" 
            value=""
            onChange={(e)=>setSelectGender(e.target.value)} 
            checked = {selectGender === ""}
            />
            </label>
            </div>


            <div>
              
              <label>Male
            <input type="radio" 
            value="Male"
            checked = {selectGender === "Male"}
            onChange={(e)=>setSelectGender(e.target.value)}/>
            </label>
            </div>

            <div>
              <label>Female
            <input type="radio"
            value="Female"
            checked = {selectGender === "Female"}
             onChange={(e)=>setSelectGender(e.target.value)}/>
            </label>
            </div>
            
          </div>

         </div>
      <div className='w-full px-4 py-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
  {users && 

  users
  
  .filter((ele)=>ele.name.toLowerCase().includes(searchData.toLowerCase()))

  .filter((ele)=>{
    if(selectGender==="Male")
    return ele.gender === selectGender
    if(selectGender==="Female"){
      return ele.gender === selectGender
       
    }
    else{
      return ele
    }
  })
 
  
  
  .map((user) => (
    <div 
      key={user.id} 
      className="grid bg-white rounded-lg bg-gradient-to-l from-green-700 via-lime-800 to-orange-500  overflow-hidden shadow-md border border-gray-300 p-4 text-white gap-6"
    >
      <dl>
        <dt className="text-xl font-bold mb-2">
          {user.name}
        </dt>
        <dd className="text-sm mb-2">
          <strong>Gender: </strong>{user.gender}
        </dd>
        <dd className="text-sm mb-2">
          <strong>Email: </strong>{user.email}
        </dd>
        <dd className="text-sm mb-2">
          <strong>Age: </strong>{user.age}
        </dd>
      </dl>
      <div>
      
        <button 

        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
            <Link to={`/edit/${user.id}`}>Edit
            </Link>
            
            </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(deleteUser(user.id))}
        >Delete</button>
      </div>
    </div>
  ))}
  </div>
</div>
  )
}

export default Read