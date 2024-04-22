
export default function Display({taskArr,dispatch}) {

    const handleDelete =(id)=>{
      dispatch({type: 'RemoveTask', payload: id})
    }

    const openEdit =(id)=>{
      dispatch({type:'EditTask', payload:id})
    }

    return (
        <div className=" container flex flex-col   text-2xl mt-4 w-1/2 ">
         {
          taskArr.map((each,id)=>{
            return (
              <div key={id} className="border w-full flex justify-between items-center  ">
                <div className="px-4 py-2 mb-2 ">
                     {each}
                </div>
                <span> 
                <button
                className='px-4 py-2 m-2 bg-lime-600 rounded-xl border mx-4 ' 
                onClick={()=>openEdit(id)}
                >✏️</button>

                <button
                className='px-4 py-2 m-2 bg-rose-600 rounded-xl border mx-4 ' 
                onClick={()=>handleDelete(id)}
                >X</button>
                

                </span>
               
              </div>
            )
          })
         }
        </div>
    )
}