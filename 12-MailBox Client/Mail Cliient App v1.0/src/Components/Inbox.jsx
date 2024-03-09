

import React from 'react'
import Sidebar from './SideNavbar'
import {Link} from 'react-router-dom'
const Inbox = () => {
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
              
              
              <button className="white px-4 ml-2 py-2 rounded-md text-gray-700 bg-gray-100 border border-transparent shadow-sm hover:text-blue-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:text-xl">
              <Link to={''}>Logout</Link> 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>



  
    <div className="flex flex-col mx-2">

    <h1 className="text-3xl font-bold mb-4">Inbox</h1>
    {/* {emails.map((email, index) => (
      <div key={index} className="border-b border-gray-200 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{email.subject}</h2>
          <span className="text-sm text-gray-500">{email.date}</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="mr-2 font-bold">{email.sender}</span>
          <span className="text-gray-600">{email.preview}</span>
        </div>
      </div>
    ))} */}
  </div>
  </>
  )
}

export default Inbox