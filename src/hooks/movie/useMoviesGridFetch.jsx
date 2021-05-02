import {useState, useEffect, useCallback} from "react";
import axios from "axios";

export const useMoviesGridFetch = (props) => {

  const [movies, setMovies] = useState({elements: []})
  const [loading, setLoading] = useState(false)
  const [_error, _setError] = useState(false)

  const fetchData = useCallback(async (endpoint) => {
    setLoading(true)

    try {
      await axios.get(endpoint)
        .then(response => {
          setMovies(prev => ({
            ...prev,
            elements: [...prev.elements, ...response.data.results],
            currentPage: response.data.page,
            totalPages: response.data.total_pages
          }))
        })
    } catch (error) {
      _setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (sessionStorage["popular_movies"]) {
      setMovies(JSON.parse(sessionStorage["popular_movies"]))
    } else {
      fetchData(props);
    }
  }, [fetchData, props])

  useEffect(() => {
    sessionStorage.setItem("popular_movies", JSON.stringify(movies))
  }, [movies])

  return [{movies, loading, _error}, fetchData]
}
