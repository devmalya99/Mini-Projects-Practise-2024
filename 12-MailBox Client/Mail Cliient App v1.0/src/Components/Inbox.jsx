

import {useState, useEffect} from 'react'
import Sidebar from './SideNavbar'
import {Link, useNavigate} from 'react-router-dom'
import Logout from './Buttons/LogoutButton'
import { FirebaseAuthentication } from '../Firebase/FirebaseConfig'
import { deleteInboxEmail, fetchInboxEmails, updateInboxEmail } from '../ReduxToolKit/mailSlice';
import ReadMails from './ReadMails'
import { useSelector , useDispatch} from 'react-redux';
const Inbox = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const inboxEmails = useSelector((state) => state.mail.inboxEmailsArr);
  console.log("inboxEmails",inboxEmails)

  

  const handleDeleteMail = (id) => {
    dispatch(deleteInboxEmail({id, email: FirebaseAuthentication.currentUser.email}));
  }


  const handleReadMail = (id)=>{
    console.log("clicked",id)

    //chage the read status of the mail to true
  //do this update the redux 

  dispatch(updateInboxEmail({ id, email: FirebaseAuthentication.currentUser.email, readStatus: true }));
    navigate(`/readmail/${id}`)
  }

  useEffect(()=>{
    const unsubscribe = FirebaseAuthentication.onAuthStateChanged(user=>{
      if(user){
        dispatch(fetchInboxEmails(user.email));
        console.log('User is signed in');
      }else{
        console.log('No user is signed in');
      }
    })
    
     // Cleanup subscription on unmount
     return () => unsubscribe();
  },[])


  if(!inboxEmails){
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



  
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
 <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">See What's Waiting for You</h1>
 <ul className="divide-y divide-gray-200 shadow-lg rounded-lg overflow-hidden">
   {inboxEmails.map((email) => (
     <li
       key={email.requestBody.sentAt}
       className="bg-white hover:bg-gray-50 transition duration-300 ease-in-out px-6 py-4 flex items-center justify-between"
       
     >
       <div className="flex items-center px-4 py-2 rounded-xl bg-blue-gray-200 cursor-pointer"
       onClick={() => handleReadMail(email.id)}
       >
         <div className="flex-shrink-0 bg-blue-gray-400"

         >
           {email.requestBody.read === false ? (
             <div className="mr-2 text-blue-500">🔵</div>
           ) : null}
           <img
             className="h-10 w-10 rounded-full"
             src="https://via.placeholder.com/50"
             alt=""
           />
         </div>
         <div className="ml-4">
           <p className="text-sm font-semibold text-red-700 truncate">
             {email.requestBody.to}
           </p>
           <p className="text-sm text-gray-500 truncate">
             {email.requestBody.subject}
           </p>
         </div>
       </div>
       <div className="flex items-center">
         <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
           Sent
         </span>
         <span className="ml-2 text-sm text-gray-500">
           {new Date(email.requestBody.sentAt).toLocaleString()}
         </span>
         <div className="mt-6">
   <p 
   
   className="text-sm text-gray-600 line-clamp-2">
     {email.requestBody.body}
   </p>
 </div>
 <div className="mt-4 ml-6 text-right">
   <button
     onClick={() => handleDeleteMail(email.id)} 
   className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
     Delete Email
   </button>
 </div>
       </div>
     </li>
   ))}
 </ul>

</div>
  </>
  )
}

export default Inbox