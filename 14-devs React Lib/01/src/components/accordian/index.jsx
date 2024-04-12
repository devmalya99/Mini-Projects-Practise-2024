import { useState } from "react"
import data from "./data"
import './style.css'
export default function Accordion() {

    const [selected,setSelected] = useState(null)
     const [enableMultiSelection , setEnableMultiSelection] = useState(false)
     const [multipleIds,setMultipleIds] = useState([])
    const handleSingleClick = (id) => {
           console.log(id)
           setSelected(id===selected ? null : id)
    }

    const handleMultiSelection =(id)=>{
         let cpy = [...multipleIds]
         const findIndexOfCurrentId = cpy.indexOf(id)
         console.log(findIndexOfCurrentId)

         if(findIndexOfCurrentId===-1){
            cpy.push(id)
         }
            else{
                cpy.splice(findIndexOfCurrentId,1)
            }
            setMultipleIds(cpy)
        }

        console.log(selected,multipleIds)
        


    return (
        <div className="wraper">
            <button 
            onClick={()=>setEnableMultiSelection(!enableMultiSelection)}
            className="btn">{enableMultiSelection?  'Enable Single Select' : 'Enable Multiselect'}</button>
           
           <div className="accordian"> 
                 {
                    data && data.length>0 ?  
                     data.map((each)=>{
                        return (
                            <div key={each.id}
                                className="item"
                            >
                                <div 
                                 onClick={
                                    enableMultiSelection ?
                                    ()=>handleMultiSelection(each.id)
                                    :
                                    
                                    ()=>handleSingleClick(each.id)}
                                className="title">
                                    <h3>{each.question}</h3>
                                    <span className="icon"> {selected===each.id? '-' : '+'}  </span>
                                </div>
                                {

// it checks if the item's id is in the multipleIds array. 
// If it is, it means this item has been selected in multi-select mode, 
// and it renders the answer of that question.
                                    enableMultiSelection?
                                    multipleIds.includes(each.id) && <div className="answer">
                                    <p>{each.answer}</p>
                                   </div>
                                    :


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