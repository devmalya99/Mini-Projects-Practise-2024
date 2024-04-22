import React, { useContext, useEffect } from 'react'
import TimerContext from '../Timer-Context'

const Timer = () => {
    const {secondsRemaining,dispatch} = useContext(TimerContext)
    const mins= Math.floor((secondsRemaining)/60)
    const secs=Math.abs((secondsRemaining%60))
    useEffect(()=>{
       const timer= setInterval(()=>{
            dispatch({type:'timer'})
        },1000)
        return ()=>clearInterval(timer)
    },[dispatch])
  return (
    <div>{mins<10 && '0'}{mins}:{secs<10 && '0'}{secs}</div>
  )
}

export default Timer