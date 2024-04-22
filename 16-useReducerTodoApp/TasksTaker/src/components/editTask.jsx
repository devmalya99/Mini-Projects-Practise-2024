import { useState } from "react"

export const EditPopUp = ({dispatch,content}) => {

    const[editedTask,setEditedTask] = useState(content || '')
    
    console.log(editedTask)
    
    return (
      <div className="fixed inset-0 w-full h-full flex items-center justify-center z-50 backdrop-blur-md bg-opacity-40 bg-black">
        <div className="w-1/3 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-xl border-black py-12">
            <div className="mr-4 ml-4">
            <input 
            type="text"
            onChange={(e)=>setEditedTask(e.target.value)}
            value={ editedTask}
            className="border px-4 py-3   w-full rounded-xl "
            placeholder="Update"
            aria-label="Update" />

            </div>
          
          <div className="flex justify-between mx-4">
            <button className="px-4 py-2 mt-6 bg-green-400 rounded-xl" aria-label="Update button"
            onClick={()=>dispatch({type:'UpdateTodo' , newTask: editedTask })}>Update</button>


            <button className="px-4 py-2 mt-6 bg-rose-400 ml-4 rounded-xl" aria-label="Close button"
            onClick={()=>dispatch({type: 'EditTask' })}
            >Close</button>
          </div>
        </div>
      </div>
    )
  }