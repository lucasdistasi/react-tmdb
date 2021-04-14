import {useState, useEffect} from "react";
import axios from "axios";

export const useMovieActorsFetch = (movieId) => {

  const [actors, setActors] = useState([])
  const [loading, setLoading] = useState(false)
  const [_error, _setError] = useState(false)

  const URI = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`

  const fetchActors = () => {
    setLoading(true)

    try {
      axios.get(URI)
        .then(response => {
          setActors(
            response.data.cast.filter(actor => {
              return actor.known_for_department.includes("Acting") && actor.popularity >= 2 && actor.profile_path
            }))
        })
    } catch (error) {
      console.log(error)
      _setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchActors()
  }, [])

  return {actors, loading, _error}
}
