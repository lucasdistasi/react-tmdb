import {useState, useEffect, useCallback} from "react";
import axios from "axios";
import {getSimilar} from "../../constants/constants";

export const useSimilarFetch = (elementType, elementId) => {

  const [state, setState] = useState({elements: []})
  const [similarLoading, setSimilarLoading] = useState(false)
  const [_error, _setError] = useState(false)

  const fetchSimilarElements = useCallback(async (endpoint) => {
    console.log(">>> fetching similar elements <<<")
    setSimilarLoading(true)

    try {
      await axios.get(endpoint)
        .then(response => {
          setState(() => ({
            elements: [...response.data.results],
            currentPage: response.data.page,
            totalPages: response.data.total_pages
          }))
        })
    } catch (error) {
      _setError(true)
    } finally {
      setSimilarLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSimilarElements(getSimilar(elementType, elementId));
  }, [fetchSimilarElements, elementType, elementId])

  return [{state, similarLoading, _error}, fetchSimilarElements]
}
