import React from 'react'

const ReadyPage = ({ dispatch }) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col justify-center items-center min-h-screen">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-white text-center">Welcome to the React Quiz!</h1>
        <h3 className="text-2xl mb-8 text-white text-center">15 questions to test your React mastery</h3>
        <p className="text-lg mb-8 text-white text-center">
          For each correct question, you will be awarded 10 points, while for each wrong answer, 5 points will be deducted.
        </p>
        <button
          className="px-8 py-3 rounded-full bg-white text-purple-600 font-bold hover:bg-purple-600 hover:text-white transition-colors duration-300"
          onClick={() => dispatch({ type: 'startQuiz' })}
        >
          Let's Start
        </button>
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg animate-pulse"></div>
        <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg animate-pulse delay-500"></div>
        <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg animate-pulse delay-1000"></div>
      </div>
    </div>
  )
}

export default ReadyPage