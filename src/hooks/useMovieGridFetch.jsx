import {useState, useEffect} from "react";
import axios from "axios";

const URI = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`

export const useMovieGridFetch = () => {

  const [state, setState] = useState({movies: []})
  const [loading, setLoading] = useState(false)
  const [_error, _setError] = useState(false)

  const fetchData = async (endpoint) => {
    setLoading(true)

    try {
      await axios.get(endpoint)
        .then(response => {
          setState(prev => ({
            ...prev,
            movies: [...response.data.results],
            currentPage: response.data.page,
            totalPages: response.data.total_pages
          }))
        })
    } catch (error) {
      _setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData(URI);
  }, [])

  return [{state, loading, _error}, fetchData]
}
