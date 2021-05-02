import {useCallback, useEffect, useState} from "react";
import axios from "axios";

export const useShowsGridFetch = (props) => {

  const [shows, setShows] = useState({elements: []})
  const [loading, setLoading] = useState(false)
  const [_error, _setError] = useState(false)

  const fetchData = useCallback(async (endpoint) => {
    setLoading(true)

    try {
      await axios.get(endpoint)
        .then(response => {
          setShows(prev => ({
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
    if (sessionStorage["popular_shows"]) {
      console.log("Fecthing popular shows from session storage")
      setShows(JSON.parse(sessionStorage["popular_shows"]))
    } else {
      console.log("Fecthing popular shows from TMDB API")
      fetchData(props);
    }
  }, [fetchData, props])

  useEffect(() => {
    sessionStorage.setItem("popular_shows", JSON.stringify(shows))
  }, [shows])

  return [{shows, loading, _error}, fetchData]
}
