import React from 'react'

const Progressbar = ({ index, total }) => {
  const progress = ((index + 1) / total) * 100

  return (
    <div className="flex items-center justify-between mb-8 px-8">
      
      <div className="w-full h-6 bg-gray-300 rounded-full overflow-hidden">
        <progress
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 rounded-full"
          max={total}
          value={index + 1}
          style={{ width: '100%' }}
        />
      </div>
      <div className="text-white text-lg">
       {index + 1}/{total} 
      </div>
    </div>
  )
}

export default Progressbar