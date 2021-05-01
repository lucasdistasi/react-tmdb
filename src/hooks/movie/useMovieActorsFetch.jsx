import {useState, useEffect} from "react";
import axios from "axios";
import PropTypes from "prop-types"
import {getMovieCredits} from "../../constants/constants";

export const useMovieActorsFetch = (movieId) => {

  const [actors, setActors] = useState([])
  const [loading, setLoading] = useState(false)
  const [_error, _setError] = useState(false)

  useEffect(() => {
    const fetchActors = () => {
      setLoading(true)

      try {
        console.log(">>> Fetching actors <<<")
        axios.get(getMovieCredits(movieId))
          .then(response => {
            setActors(
              response.data.cast.filter(actor => {
                return actor.known_for_department.includes("Acting") && actor.popularity >= 2
              }))
          })
          .catch(() => {
            _setError(true)
          })
      } catch (error) {
        _setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchActors()
  }, [movieId])

  return {actors, loading, _error}
}

useMovieActorsFetch.prototype = {
  movieId: PropTypes.number
}
