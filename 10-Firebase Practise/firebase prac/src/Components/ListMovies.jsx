

import {useState , useEffect} from 'react'
import { collection ,getDocs} from 'firebase/firestore'
import { collectionRef } from '../lib/firestore.collection'
import { db } from '../Firebase/firebaseConfig'

const ListMovies = () => {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        getMovies()
    },[])

    useEffect(()=>{
        console.log(movies)
    },[movies])

    function getMovies(){
        //const movieCollectionRef= collection(db, "movieList01")
      getDocs(collectionRef)
      .then(res=>{
        const moviz = res.docs.map((doc)=>({
          data: doc.data(),
          id: doc.id
        }))
        setMovies(moviz)
      })
      .catch(err=>console.log(err.message))

    
    }

    const handleDelete = (id) => {
      // dispatch(delete_Expense(id));
    };
  
    const handleEdit = (id) => {
      const myDocRef = doc(db, "movieList01", id);
      updateDoc(myDocRef, { name})

    return (
        <div className="max-w-md mx-auto bg-blue-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3">
            List Movies
          </h3>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mb-3"
            onClick={getMovies}
          >
            Refresh List
          </button>
          <ul className="divide-y divide-gray-200">
            {movies.map((movie) => (
              <div
              className="flex border-2 mt-4 border-gray-200 p-5 rounded-md bg-white shadow-sm dark:bg-black dark:text-white"
              key={movie.id}
            >
              <li>
                <p>{movie.data.name}</p>
                <p>{movie.data.amount}</p>
                <p>{movie.data.category}</p>
              </li>
              <button
                onClick={() => handleEdit(movie.id)}
                className="ml-2 px-4 py-2 rounded-xl text-xl bg-green-600 "
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(movie.id)}
                className="ml-2 px-4 py-2 rounded-xl  bg-red-500 text-xl"
              >
                Delete
              </button>
            </div>
            ))}
          </ul>
        </div>
      );
}}

export default ListMovies