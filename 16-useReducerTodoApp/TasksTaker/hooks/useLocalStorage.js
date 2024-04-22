

export const setTask =(keys,content)=>{
   localStorage.setItem(keys,JSON.stringify(content))
}