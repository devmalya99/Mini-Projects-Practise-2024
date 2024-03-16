import React from 'react'

const RemoveBtn = () => {
  return (
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      <span className="flex items-center">
        <span className="mr-2">🗑️</span>
        Remove
      </span>
    </button>
  )
}

export default RemoveBtn