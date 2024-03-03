import { useState , useEffect} from 'react'
import './App.css'
import AdminPage from './Components/AdminPage'

function App() {


  return (
    <>
     <h1 className="text-3xl font-bold underline">
      Admin Page!
    </h1>
    <AdminPage/>
    </>
  )
}

export default App
