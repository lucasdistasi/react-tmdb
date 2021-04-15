import {useState, useEffect, useCallback} from "react";
import axios from "axios";
import PropTypes from "prop-types"

export const useMovieDirectorsFetch = (movieId) => {

  const [directors, setDirectors] = useState([])
  const [loading, setLoading] = useState(false)
  const [_error, _setError] = useState(false)

  const fetchDirectors = useCallback(() => {
    const URI = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    setLoading(true)

    try {
      console.log(">>> Fetching directors <<<")
      axios.get(URI)
        .then(response => {
          setDirectors(
            response.data.crew.filter(director => {
              return director.department.includes("Directing") && director.profile_path
            }))
        })
    } catch (error) {
      console.log(error)
      _setError(true)
    } finally {
      setLoading(false)
    }
  }, [movieId])

  useEffect(() => {
    fetchDirectors()
  }, [fetchDirectors])

  return {directors, loading, _error}
}

useMovieDirectorsFetch.prototype = {
  movieId: PropTypes.number
}
