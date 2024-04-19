

import React, { useReducer } from 'react'
import Increment from '../components/increment'
import Decrement from '../components/decrement'
const initialState ={
  count:0,
}
const reducer =(state,action)=>{
  switch (action.type)
  {
    case 'Increment' :
      return {
        ...state,
        count:state.count+1
      }

      case 'Decrement' :
        return {
          count : state.count-1
        }
        default :
        throw new Error('Action type unknown')
  }
}

const MainFile = () => {

  const [state,dispatch] = useReducer(reducer, initialState)
    return (
    <div>
      <main>
        
        <div className='flex flex-col justify-center items-center'>
          <span className='bg-yellow-400 px-28 mr-4 mb-6 rounded-xl py-4 mt-20 text-4xl '>{state.count}</span>
          
          <div className='flex'>
          <Increment dispatch={dispatch}/>
          <Decrement dispatch={dispatch}/>
          </div>
        

        </div>
      </main>

    </div>
  )
}

export default MainFile