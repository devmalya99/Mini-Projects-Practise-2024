import React from 'react'

const Decrement = ({dispatch}) => {
  return (
    <div>
        <button  className='px-6 py-4 bg-rose-600 rounded-xl border mx-4 ' 
        onClick={()=>dispatch({type:'Decrement'})}> Decrement</button>
    </div>
  )
}

export default Decrement