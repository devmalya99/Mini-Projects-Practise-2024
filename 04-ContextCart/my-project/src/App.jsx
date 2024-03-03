import { useState } from 'react'
import Header from '../src/Components/Header'
import Body from '../src/Components/Body'
import './App.css'

function App() {

const [count,setCount] =useState(0)

const addToCart =()=>{
  setCount(prev=>prev+1)
}
  return (
    <>
     <Header count={count}/>
     <Body
     count={count} 
     addToCart={addToCart}/>
    </>
  )
}

export default App
