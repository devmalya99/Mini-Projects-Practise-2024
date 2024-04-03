"use client"

import { useRouter } from "next/navigation";

const Checkbox = ({id}) => {
    const router = useRouter();
    const changeStatus = async (id) => {
       //send a put request and change status to completed 
       
       try {
        const res= await fetch(`http://localhost:3000/api/topics/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({status: "completed"}),
        })
        if (!res.ok) {
            throw new Error("Failed to update task status");
          }
          const updatedTopic = await res.json();
          console.log(updatedTopic);
          router.refresh();
       } catch (error) {
         console.log(error)
       }
    
    }

  return (
    <div>
    <input
    onChange={() => changeStatus(id)}
   type="checkbox"
  /></div>
  )
}

export default Checkbox