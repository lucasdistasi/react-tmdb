import {useState, useEffect, useCallback} from "react";
import axios from "axios";
import {getSimilarMovies} from "../constants/constants";

export const useSimilarMoviesFetch = (movieId) => {

  const [state, setState] = useState({movies: []})
  const [similarMoviesLoading, setSimilarMoviesLoading] = useState(false)
  const [_error, _setError] = useState(false)

  const fetchSimilarMovies = useCallback(async (endpoint) => {
    console.log(">>> fetching similar movies <<<")
    setSimilarMoviesLoading(true)

    try {
      console.log(endpoint)
      await axios.get(endpoint)
        .then(response => {
          console.log(response)
          setState(() => ({
            movies: [...response.data.results],
            currentPage: response.data.page,
            totalPages: response.data.total_pages
          }))
        })
    } catch (error) {
      console.log(error)
      _setError(true)
    } finally {
      setSimilarMoviesLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSimilarMovies(getSimilarMovies(movieId));
  }, [fetchSimilarMovies])

  return [{state, similarMoviesLoading, _error}, fetchSimilarMovies]
}
