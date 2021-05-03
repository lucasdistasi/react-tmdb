import {useState, useEffect, useCallback} from "react";
import axios from "axios";
import {getSimilar} from "../../constants/constants";

export const useSimilarFetch = (elementType, elementId) => {

  const [similarMovies, setSimilarMovies] = useState({elements: []})
  const [similarLoading, setSimilarLoading] = useState(false)
  const [_error, _setError] = useState(false)

  const fetchSimilarElements = useCallback(async (endpoint) => {
    setSimilarLoading(true)

    try {
      await axios.get(endpoint)
        .then(response => {
          setSimilarMovies(() => ({
            elements: [...response.data.results],
            currentPage: response.data.page,
            totalPages: response.data.total_pages
          }))
        })
        .catch(() => _setError(true))
    } catch (error) {
      _setError(true)
    } finally {
      setSimilarLoading(false)
    }
  }, [])

  useEffect(() => {
    let name = `${elementType}_${elementId}_similar`

    if (localStorage[name]) {
      setSimilarMovies(JSON.parse(localStorage[name]))
    } else {
      fetchSimilarElements(getSimilar(elementType, elementId));
    }

  }, [fetchSimilarElements, elementType, elementId])

  useEffect(() => {
    let name = `${elementType}_${elementId}_similar`

    localStorage.setItem(name, JSON.stringify(similarMovies))
  }, [elementType, elementId, similarMovies])

  return [{similarMovies, similarLoading, _error}, fetchSimilarElements]
}
