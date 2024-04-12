

import { useEffect, useState } from 'react'
import './style.css'
const ProgressbarComponent = () => {
  const [value,setValue] = useState(0)
  const [success,setSuccess] = useState(false)
  useEffect(()=>{
    const interval = setInterval(() => {
      if (value < 100) {
        setValue((val) => val + 2);
      } else {
        setValue(100);
        setSuccess(true)
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  },[value])
  return (
    <div>
        <div className='parentContainer' role='progressbar'aria-valuenow={value} 
        aria-valuemin="0" aria-valuemax="100">
        <h1>Progressbar</h1>
     <div className='progressbar'> 
     <div className='progressFill'
     style={{width:`${value}%`}}
     >{value}%</div>
     </div>
     <p>{success? 'Completed !' : 'Loading...'}</p>
    </div>
    
    </div>
  )
}

export default ProgressbarComponent  