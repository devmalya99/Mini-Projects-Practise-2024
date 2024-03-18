"use client"
 
import { useRouter } from 'next/navigation';
import {useState} from 'react'

const EditTopicForm = ({id,title,description}) => {
  const [newTitle, setTitle] = useState(title);
  const [newDescription, setDescription] = useState(description);
  
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTitle || !newDescription) {
      alert('Please add a title and description');
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newTitle,
          newDescription
        })
      })

            if(res.ok){
              

              // Navigate to the list page
              router.push('/');
              router.refresh()

            }  else{
              console.log("Failed to update topic")
            }

    } catch (error) {
      console.log(error)

    }
  }


  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold mb-6">Edit Task</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="topicInput" className="block text-gray-700 font-bold mb-2">
          Topic
        </label>
        <input
          type="text"
          id="topicInput"
          value={newTitle}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Update a Topic"
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
          value={newDescription}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add Description"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Update Task
      </button>
    </form>
  </div>
  )
}

export default EditTopicForm