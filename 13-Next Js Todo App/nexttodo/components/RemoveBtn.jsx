"use client"

import React from 'react'

const RemoveBtn = ({id}) => {

  const removeTopic = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this topic?");
    if(confirmed){
      await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      window.location.reload();
    }
  }



  return (
    <button 
    onClick={() => removeTopic(id)}
    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      <span className="flex items-center">
        <span className="mr-2">🗑️</span>
        Remove
      </span>
    </button>
  )
}

export default RemoveBtn