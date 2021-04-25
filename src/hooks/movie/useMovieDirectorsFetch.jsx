import {useState, useEffect, useCallback} from "react";
import axios from "axios";
import PropTypes from "prop-types"
import {getMovieCredits} from "../../constants/constants";

export const useMovieDirectorsFetch = (movieId) => {

  const [directors, setDirectors] = useState([])
  const [loading, setLoading] = useState(false)
  const [_error, _setError] = useState(false)

  const fetchDirectors = useCallback(() => {
    setLoading(true)

    try {
      console.log(">>> Fetching directors <<<")
      axios.get(getMovieCredits(movieId))
        .then(response => {
          setDirectors(
            response.data.crew.filter(director => {
              return director.department.includes("Directing")
            }))
        })
    } catch (error) {
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
