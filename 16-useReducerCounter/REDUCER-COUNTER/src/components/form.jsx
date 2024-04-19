import React, { useState } from "react";

const Form = ({dispatch}) => {
    const [newTask,setNewTask] = useState()
    const handleSubmit=(e)=>{
        e.preventDefault();
    dispatch({type:'AddTask' , payload: newTask})
    setNewTask('');
    }

  return (
    <main className="flex  flex-col justify-center items-center  ">
      <span className="text-4xl font-serif mb-8 ">
        <h1>My Todo </h1>
      </span>
      <div className="flex w-96  items-center justify-center">
        <form
          className="flex flex-col items-center justify-center "
          onSubmit={handleSubmit}
        >
          <div className="flex mb-6 mt-4  items-center justify-center ">
            <label htmlFor="taskBox" className="text-2xl ">
              {" "}
              Task :{" "}
            </label>
            <input
              id="taskBox"
              placeholder="Enter task"
              onChange={(e)=>setNewTask(e.target.value)}
              value={newTask}
              className="border  px-6 py-4 rounded-xl ml-2"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-4 bg-lime-600 rounded-xl border mx-4 "
          >
            Add Task
          </button>
        </form>
      </div>
    </main>
  );
};

export default Form;
