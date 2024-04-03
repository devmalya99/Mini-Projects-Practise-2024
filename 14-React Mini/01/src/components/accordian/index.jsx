import { useState } from "react"
import data from "./data"
import './style.css'
export default function Accordion() {

    const [selected,setSelected] = useState(null)

    const handleSingleClick = (id) => {
           console.log(id)
           setSelected(id===selected ? null : id)
    }


    return (
        <div className="wraper">
           <div className="accordian"> 
                 {
                    data && data.length>0 ?  
                     data.map((each)=>{
                        return (
                            <div key={each.id}
                                className="item"
                            >
                                <div 
                                 onClick={()=>handleSingleClick(each.id)}
                                className="title">
                                    <h3>{each.question}</h3>
                                    <span className="icon"> {selected===each.id? '-' : '+'}  </span>
                                </div>
                                {
                                    selected ===each.id ? 
                                    <div className="answer">
                                     <p>{each.answer}</p>
                                    </div>
                                    :
                                    null

                                }

                                
                                 
                                 

                            </div>
                        )
                     })
                    
                    : <div>No Data Found</div>
                 }
           </div>
        
        </div>
    )
}