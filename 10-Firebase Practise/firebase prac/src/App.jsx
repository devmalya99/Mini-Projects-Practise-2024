

import './App.css'
import Addmovies from './Components/Addmovies'
import ListMovies from './Components/ListMovies'
function App() {


  return (
<div className='container mx-auto px-4 pt-4'>
   
<div>
        <header className='text-3xl'
        >
           <h1> Firebase- Firestore -Movie Mania</h1>
        </header>
        <Addmovies/>
        <ListMovies />
      
    </div>
</div>
  )
}

export default App
