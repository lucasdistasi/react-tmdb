import {useEffect, useState} from "react";
import {MovieCardComponent} from "./MovieCardComponent";
import axios from "axios";

const URI = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`

export const MoviesGrid = () => {

  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    axios.get(URI)
      .then(response => {
        setPopularMovies(response.data.results)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="mx-auto flex justify-center flex-wrap my-12">
      {
        popularMovies.map(movie => {
          return <MovieCardComponent movies={movie} key={movie.id} />
        })
      }
    </div>
  )
}
