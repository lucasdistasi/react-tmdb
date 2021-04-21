import {useState, useCallback} from "react";
import axios from "axios";

export const useSearchFetch = () => {

  const [data, setData] = useState({elements: []})
  const [_error, _setError] = useState({hasError: false, errorMessage: ""})
  const [loading, setLoading] = useState(false)

  const fetchData = useCallback((uri, isSearchLoadMore) => {
    try {
      // We need to clear the state every time the user clicks the Search button
      // in case he/she changes the search criteria
      if (!isSearchLoadMore) {
        setData({
          elements: []
        })
      }
      axios.get(uri)
        .then(response => {
          console.log(response)
          setData(prev => ({
            ...prev,
              elements: [...prev.elements, response.data.results],
            currentPage: response.data.page,
            totalPages: response.data.total_pages
          }))
        })
        .catch(error => {
          _setError({
            hasError: true,
            errorMessage: error.message
          })
        })
    } catch (error) {
      _setError({
        hasError: true,
        errorMessage: error.message
      })
    } finally {
      setLoading(false)
    }
  }, [])

  return [{data, _error, loading}, fetchData]
}
