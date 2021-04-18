import {useState, useEffect, useCallback} from "react";
import axios from "axios";

export const useElementGridFetch = (props) => {

  const [state, setState] = useState({elements: []})
  const [loading, setLoading] = useState(false)
  const [_error, _setError] = useState(false)

  const fetchData = useCallback(async (endpoint) => {
    setLoading(true)

    console.log(">>> Fetching element info <<<")
    try {
      await axios.get(endpoint)
        .then(response => {
          setState(prev => ({
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
    fetchData(props);
  }, [fetchData, props])

  return [{state, loading, _error}, fetchData]
}
