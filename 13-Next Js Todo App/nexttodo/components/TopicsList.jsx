import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'

const TopicsList = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl mt-4 border p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Todo List</h1>
        <div className="flex items-center">
          <RemoveBtn />
          
          <button className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/edit/123" className="ml-4 flex items-center text-white hover:text-gray-700">
            <span>Edit</span>
            <span className="ml-1">🖊️</span>
          </Link>
    </button>
        </div>
      </div>
      <div className="text-gray-700">Task Description</div>
    </div>
  )
}

export default TopicsList