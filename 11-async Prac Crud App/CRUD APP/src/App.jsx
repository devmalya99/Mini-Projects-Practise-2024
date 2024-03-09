

import './App.css'
import Navbar from './Components/Navbar'
import Form from './Components/CreateForm'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Read from './Components/Read'
import Update from './Components/Update'
function App() {


  return (
<div className='container dark mx-auto px-4 pt-4 '>
   <BrowserRouter>
   <Navbar />
   <Routes>
   <Route exact path='/create-post' element={<Form/>}/>
   <Route exact path='/read' element={<Read/>}/>
   <Route  path='/edit/:id' element={<Update/>}/>
   </Routes>
   </BrowserRouter>
   
 
</div>
  )
}

export default App
