import React from 'react'

const ReadyPage = ({dispatch}) => {
  return (
    <div className='flex flex-col justify-center items-center mt-8 '>
        <h1 className='text-4xl mb-4 text-white'>Welcome to the React Quiz!</h1>
        <h3 className='text-2xl mb-8 text-white'>15 questions to test your React mastry</h3>

          <button className='px-6 py-4  rounded-xl bg-blue-gray-600 text-white hover:cursor-pointer hover:text-3xl'
          onClick={()=> dispatch({type:'startQuiz'})}
          
          >Lets Start</button>
    </div>
  )
}

export default ReadyPage