import {useState, useEffect, useCallback} from "react";
import axios from "axios";

const URI = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`

export const useMovieGridFetch = () => {

  // Changed data type to Set because there was some duplicated movies when fetching with load more button
  const [state, setState] = useState({movies: new Set([])})
  const [loading, setLoading] = useState(false)
  const [_error, _setError] = useState(false)

  const isLoadMore = (page) => {
    return page.search('page')
  }

  const fetchData = useCallback(async (endpoint) => {
    setLoading(true)

    try {
      console.log(">>> Fetching movie info <<<")
      await axios.get(endpoint)
        .then(response => {
          setState(prev => ({
            ...prev,
            movies: isLoadMore !== -1 ? [...prev.movies, ...response.data.results] : [...response.data.results],
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
    fetchData(URI);
  }, [fetchData])

  return [{state, loading, _error}, fetchData]
}
