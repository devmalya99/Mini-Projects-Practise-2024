import React, { useState, useEffect } from "react";

const MovieAppPage = () => {
  const [movies, setMovies] = useState([]);
  
  const [error, setError] = useState(null);

  const [movieObj,setMovieObj] = useState({
    title:'',
    director:''
  })
  

  useEffect(() => {
    const fetchMovies = async () => {
      try {

        const res = await fetch("https://swapi.dev/api/films");
        if(!res.ok){
          throw Error ('could not fetch the data')
        }
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        setError(error.message)
        console.log(error);
      } 
    };
    fetchMovies();
  }, []);

  const handleChange=(e)=>{
    setMovieObj({
      ...movieObj,[e.target.name]:e.target.value
    })
  }

  const handleFormSubmit=(e)=>{
    e.preventDefault()
    setMovies([...movies,movieObj])
    console.log(movieObj),movies;
  }

  return (
    <div>

      <div className="Input Div">
        <form onSubmit={(e)=>handleFormSubmit(e)}>
        <input 
        name="title"
        type="text" 
        placeholder="Enter MOvie name"
        onChange={handleChange}/>

        <input
        name="director" 
        type="text" 
        placeholder="Directed By"
        onChange={handleChange}
        />
        <button type="submit">Submit</button>
        </form>
      </div>
      

      <div>
       
        {error && <div>{error}</div>}
        {movies.length >0 && movies.map((movie, index) => (
            <div className="p-2 bg-rose-500 mt-8 ml-8" key={index}>
              <h2>{movie.title}</h2>
              <h4>Directed by {movie.director}</h4>
            </div>
          ))}

        
      </div>
    </div>
  );
};

export default MovieAppPage;
