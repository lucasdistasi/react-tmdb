import {useCallback, useEffect, useState} from "react";
import axios from "axios";

export const useElementsByGenreFetch = (endpoint, type, genreId) => {

  const [data, setData] = useState({elements: []})
  const [_error, _setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchDataByGenre = useCallback(async (endpoint) => {
    setLoading(true)

    try {
      await axios.get(endpoint)
        .then(response => {
          console.log(response)
          setData(prev => ({
            ...prev,
            elements: [...prev.elements, ...response.data.results],
            currentPage: response.data.page,
            totalPages: response.data.total_pages,
            elementType: type
          }))
        })
        .catch(() => _setError(true))
        .finally(() => setLoading(false))
    } catch (error) {
      _setError(true)
    } finally {
      setLoading(false)
    }
  }, [type])

  useEffect(() => {
    let moviesName = `movies_genres_${genreId}`
    let showsName = `shows_genres_${genreId}`

    if (localStorage[moviesName] || localStorage[showsName]) {
      if (localStorage[moviesName]) {
        setData(JSON.parse(localStorage[moviesName]))
      }

      if (localStorage[showsName]) {
        setData(JSON.parse(localStorage[showsName]))
      }
    } else {
      fetchDataByGenre(endpoint, type)
    }
  }, [endpoint, fetchDataByGenre, genreId, type])

  useEffect(() => {
    if (type === "movies") {
      let name = `movies_genres_${genreId}`
      localStorage.setItem(name, JSON.stringify(data))
    }

    if (type === "shows") {
      let name = `shows_genres_${genreId}`
      localStorage.setItem(name, JSON.stringify(data))
    }
  })

  return [{data, _error, loading}, fetchDataByGenre]
}
