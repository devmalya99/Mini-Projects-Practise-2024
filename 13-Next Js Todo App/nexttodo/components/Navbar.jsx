import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-white font-semibold text-xl">Next MongoCrud</span>
            </Link>
          </div>
          <div>
            <Link href="/addTopic">
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Add Task
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar