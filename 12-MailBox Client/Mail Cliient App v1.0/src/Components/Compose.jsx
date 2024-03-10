

import {useState , useEffect } from 'react';
// import firebase from 'firebase/app';
import { FirebaseAuthentication } from '../Firebase/FirebaseConfig';

import Sidebar from './SideNavbar';
import {Link} from 'react-router-dom'
const EmailCompose = () => {

  const [mailContent,setMailContent] = useState({})
  
  const handleChange = (e)=>{
    setMailContent({...mailContent, [e.target.name]: e.target.value})
  }

  const saveEmailToUserInbox = (from, emailId)=>{
    fetch(`https://mailbox-client-app-default-rtdb.firebaseio.com/Users/${userEmail}/inbox.json`, {
      method: 'PATCH',
      body: JSON.stringify({ [emailId]: true }),
    });
  }

  const saveEmailToUserSentbox = (to, emailId)=>{
    fetch(`https://mailbox-client-app-default-rtdb.firebaseio.com/Users/${userEmail}/sentbox.json`, {
      method: 'PATCH',
      body: JSON.stringify({ [emailId]: true }),
    });
  }

  
  useEffect(() => {
    const unsubscribe = FirebaseAuthentication.onAuthStateChanged(user => {
      if (user) {
        console.log('User is signed in');
      } else {
        console.log('No user is signed in');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();

  }, []);


  const handleSubmit = async (e)=>{
    e.preventDefault();
    const {to , subject , message} = mailContent;
    const sentAt = new Date().getTime();
    const currentUser = FirebaseAuthentication.currentUser;
     console.log(currentUser)
    if(currentUser){
      const from = currentUser.email
      const requestBody = {
        to,
        subject,
        message,
        sentAt,
        from,
      };

      try{
           const response = await fetch('https://mailbox-client-app-default-rtdb.firebaseio.com/Emails.json', {
            method: 'POST',
            body: JSON.stringify(requestBody),
          })

          if(response.ok)
          {
            const data = await response.json();
            const emailId = data.name;

            //Save the email in the sender's sentbox and receiver's inbox
          saveEmailToUserInbox(from,  emailId);
          saveEmailToUserSentbox(to, emailId);

          console.log('Mail sent');
          }SD/k 
          else{
            console.error('Error sending mail:', response.status);
          }
      }
      catch(error) {
      console.error('Error:', error);
    }
  }else{
      console.log("User not logged in")
    }
    


    console.log("submitted")
  }
  return (
    <>
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
    <Sidebar/>
    <div className="p-6 max-w-3xl ml-64 mt-16 bg-white rounded-xl shadow-md space-y-4">
      <p  className='bg-teal-200 text-xl'>Compose New Message</p>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="to" className="block text-sm font-medium text-gray-700">
          To
        </label>
        <div className="mt-1">
          <input
            id="to"
            name="to"
            type="text"
            autoComplete="email"
            onChange={handleChange}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
          Subject
        </label>
        <div className="mt-1">
          <input
            id="subject"
            name="subject"
            type="text"
            autoComplete="email-subject"
            onChange={handleChange}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            rows="4"
            
            onChange={handleChange}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send
        </button>
      </div>
      </form>
    </div>
    </>
  );
};

export default EmailCompose;