import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

const getTaskById = async (id) => {
  try {
    const res= await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }else{
      const topic = await res.json();
      return topic
    }
    
  } catch (error) {
    
  }
}

const edit = async ({params}) => {
  

  const {topic} =await  getTaskById(params.id)
  console.log(topic)
  const {title , description} = topic
  return (
    <div>
      <EditTopicForm 
        id={params.id}
        title={title}
        description={description}
      />

    </div>
  )
}

export default edit