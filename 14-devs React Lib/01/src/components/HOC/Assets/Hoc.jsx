import { useState } from "react";

const Hoc=(Component)=>{
    const wrapper=(props)=>{
        const [count,setCount] =useState(0)
        const increment =()=>{
            setCount(count+1)
        }
        return <Component count={count} 
        increment={increment} {...props}/>
    };
    wrapper.defaultName=`wrapper(${Component})`
    return wrapper;
}

export default Hoc;
