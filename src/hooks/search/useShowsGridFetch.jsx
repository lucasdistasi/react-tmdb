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
          // TMDB API DOES NOT RETRIEVE AN ADULT FIELD FOR TV SHOWS.
          // I noticed that some adult Tv Shows do not have an Overview.
          // We are going to filter those results. However, this does not ensure
          // that all adult Tv Shows are not going to be displayed.
          let validShows = response.data.results.filter(show => show.overview.length !== "")

          setShows(prev => ({
            ...prev,
            elements: [...prev.elements, ...validShows],
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
      setShows(JSON.parse(sessionStorage["popular_shows"]))
    } else {
      fetchData(props);
    }
  }, [fetchData, props])

  useEffect(() => {
    sessionStorage.setItem("popular_shows", JSON.stringify(shows))
  }, [shows])

  return [{shows, loading, _error}, fetchData]
}
