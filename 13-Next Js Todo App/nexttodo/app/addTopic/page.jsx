"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const AddTopic = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert('Please add a title and description');
      return;
    }

    // Connect to DB
    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description ,  status: 'incomplete'}),
      });
      if (res.ok) {
        // Navigate to the list page
        window.location.href = '/';
      } else {
        throw new Error('Failed to add topic');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Add Topic</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="topicInput" className="block text-gray-700 font-bold mb-2">
            Topic
          </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            id="topicInput"
            value={title}
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
            onChange={(e) => setDescription(e.target.value)}
            value={description}
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

export default AddTopic