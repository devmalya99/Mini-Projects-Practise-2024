

import {useState, useEffect} from 'react'
import Sidebar from './SideNavbar'
import {Link} from 'react-router-dom'
import Logout from './Buttons/LogoutButton'
import { FirebaseAuthentication } from '../Firebase/FirebaseConfig'
const Inbox = () => {
  const [inboxArr, setInboxArr] = useState([]);
  const fetchUserInbox = async()=>{
    const userEmail = FirebaseAuthentication.currentUser.email;
    const formattedEmail = userEmail.replace(/\./g, '_')
  
    const res = await fetch(`https://mailbox-client-app-default-rtdb.firebaseio.com/inbox/${formattedEmail}.json`,{
  
      method: 'GET',
    
    })

    if(res.ok){
      const data = await res.json();
      setInboxArr(Object.values(data|| {}));
      console.log(inboxArr);
      return data;
    }else{
      console.log("Error fetching data");
      return (<div><h1>Error fetching data</h1></div>)
    }
  
  }

  useEffect(()=>{
    const unsubscribe = FirebaseAuthentication.onAuthStateChanged(user=>{
      if(user){
        console.log('User is signed in');
      }else{
        console.log('No user is signed in');
      }
    })
    fetchUserInbox()
     // Cleanup subscription on unmount
     return () => unsubscribe();
  },[])

  if(!inboxArr){
    return <div>Loading...</div>
  }

  return (
    <>
    <Sidebar/>
    <header className="bg-gray-500 text-white sticky top-0 z-10 dark:bg-black dark:text-white">
    <div className=" w-full">
      <div className="flex justify-between h-16">
        <div className="w-full flex items-center justify-start md:w-auto">
          <a href="#" className="flex-shrink-0">
          <span className="font-bold text-3xl">
  <span className="text-gray-300 ml-64">Email Client</span>
  
</span>
          </a>
        </div>
        <div className="hidden md:block w-full md:w-auto" id="navbar-solid-bg">
          <div className="md:ml-auto md:mr-0 md:py-0 md:block md:basis-1/4">
            <div className="flex items-center justify-end flex-1 md:flex-none md:mr-4">
              <div
              
              className=" p-4 text-xl text-white cursor-pointer  hover:text-2xl ">
                <Link to={''}>Profile</Link> 
                
              </div>
              <div className=" p-4 text-xl text-white cursor-pointer  hover:text-2xl ">
                About
              </div>
              <div className=" p-4 text-xl text-white cursor-pointer  hover:text-2xl ">
              <i className="fa-solid fa-sun"></i>
              </div>
              
              
              <Logout/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>



  
    <div className="flex flex-col mx-64 mt-24 " >

    <h1 className="text-3xl font-bold mb-4 ml-64 ">See whats waiting for you </h1>
    <ul className="divide-y divide-gray-200 ">
      {inboxArr.map((email) => (
        <li key={email.requestBody.sentAt} 
        className="px-4 py-4 sm:px-6  hover:bg-blue-gray-400">
          <div className="flex items-center justify-between ">
            <div className="truncate">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://via.placeholder.com/50"
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {email.requestBody.to}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {email.requestBody.subject}
                  </p>
                </div>
              </div>
            </div>
            <div className="ml-2 flex-shrink-0 flex">
              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Sent
              </p>

              <span className="text-sm text-gray-500">
            {new Date(email.requestBody.sentAt).toLocaleString()}
          </span>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-600 line-clamp-2">
              {email.requestBody.message}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>
  </>
  )
}

export default Inbox