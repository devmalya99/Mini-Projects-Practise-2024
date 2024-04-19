
export default function Display({taskArr,dispatch}) {

    const handleDelete =(id)=>{
      dispatch({type: 'RemoveTask', payload: id})
    }
    return (
        <div className="text-2xl mt-4">
         {
          taskArr.map((each,id)=>{
            return (
              <div key={id} className="border flex ">
                <div className="px-4 py-2 mb-2 ">
                     {each}
                </div>
                <span> 
                <button
                className='px-4 py-2 m-2 bg-rose-600 rounded-xl border mx-4 ' 
                onClick={()=>handleDelete(id)}
                >X</button></span>
               
              </div>
            )
          })
         }
        </div>
    )
}