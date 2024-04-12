import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import './style.css'

function StarRating ({starCount=10}){

    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0) 
    
    //to find out the current hoover index



    const handleClick = (currIndex)=>{
      console.log('clicked',currIndex)
      setRating( currIndex ===rating ? 0:currIndex)
    }


    const handleMove = (currIndex)=>{
        console.log(currIndex)
        setHover(currIndex)
    }


    const handleLeave = ()=>{
        
        setHover(rating)//bcz we want to reset the hover to the current rating
    }
    
        return <div>
            <h1>Star Rating Component</h1>
            <div className="star-container">
                {
                    Array(starCount).fill(0).map((_,index)=>{
                        index+=1;
                        return <AiFillStar 
                        key={index}
                        className={index<= (rating || hover) ? 'active' : ''}
                        onClick={()=>handleClick(index)}
                        onMouseMove={()=>handleMove(index)}
                        onMouseLeave={()=>handleLeave()}
                        size={40}
                        />
                    })
                }
            </div>
        </div>
    
}

export default StarRating