import React from 'react'

const Increment = ({dispatch}) => {
  return (
    <div>
        <button
          className='px-6 py-4 bg-green-600 rounded-xl border '
          onClick={()=>dispatch({type:'Increment'})}
          >Increment</button>
    </div>
  )
}

export default Increment