import {useState, useEffect} from "react";
import axios from "axios";

export const useMovieInfoFetch = (movieId) => {

  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(false)
  const [_error, _setError] = useState(false)

  const fetchMovieInfo = () => {
    const URI = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    setLoading(true)

    try {
      axios.get(URI)
        .then(response => {
          setMovie(response.data)
        })
    } catch (error) {
      _setError(true)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMovieInfo();
  }, [])

  return [{movie, loading, _error}, fetchMovieInfo]
}
