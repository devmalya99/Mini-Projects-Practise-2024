import React from 'react'

const Header = ({ points }) => {
  return (
    <div className="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-white mr-2"
        >
          <path
            fillRule="evenodd"
            d="M17.834 6.166a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.592-1.592H13.75a4.75 4.75 0 100 9.5h6.672l-1.592-1.592a.75.75 0 011.06-1.06l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.592-1.592H13.75A6.25 6.25 0 017.5 16.5v-9A6.25 6.25 0 0113.75 1h6.672l-1.592-1.592a.75.75 0 011.06-1.06l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06 0zM12 6.75a.75.75 0 00-.75.75v9a.75.75 0 001.5 0v-9a.75.75 0 00-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="text-2xl text-white font-bold">The React Quiz App</h1>
      </div>
      <div className="flex items-center">
        <span className="text-lg text-white mr-2">Total Points:</span>
        <span className="text-2xl font-bold text-white">{points}</span>
      </div>
    </div>
  )
}

export default Header