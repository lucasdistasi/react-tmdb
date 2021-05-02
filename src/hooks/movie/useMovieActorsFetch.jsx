import {useState, useEffect} from "react";
import axios from "axios";
import PropTypes from "prop-types"
import {getMovieCredits} from "../../constants/constants";

export const useMovieActorsFetch = (movieId) => {

  const [actors, setActors] = useState([])
  const [loading, setLoading] = useState(false)
  const [_error, _setError] = useState(false)

  useEffect(() => {
    let name = `${movieId}_actors`;

    if (localStorage[name]) {
      setActors(JSON.parse(localStorage[name]))
    } else {
      const fetchActors = () => {
        setLoading(true)

        try {
          axios.get(getMovieCredits(movieId))
            .then(response => {
              setActors(
                response.data.cast.filter(actor => {
                  return actor.known_for_department.includes("Acting") && actor.popularity >= 1
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
    }
  }, [movieId])

  useEffect(() => {
    let name = `${movieId}_actors`;
    localStorage.setItem(name, JSON.stringify(actors))
  })

  return {actors, loading, _error}
}

useMovieActorsFetch.prototype = {
  movieId: PropTypes.number
}
