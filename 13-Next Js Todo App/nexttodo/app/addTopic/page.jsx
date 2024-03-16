import React from 'react'

const addTopic = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Add Topic</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="topicInput" className="block text-gray-700 font-bold mb-2">
            Topic
          </label>
          <input
            type="text"
            id="topicInput"
            placeholder="Add Topic"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="descriptionInput" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <input
            type="text"
            id="descriptionInput"
            placeholder="Add Description"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Topic
        </button>
      </form>
    </div>
  )
}

export default addTopic