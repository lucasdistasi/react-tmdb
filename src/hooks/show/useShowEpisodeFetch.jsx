import {useEffect, useCallback, useState} from "react";
import {getShowEpisodesInfo} from "../../constants/constants";
import axios from "axios";

export const useShowEpisodeFetch = ({showId, seasonNumber}) => {

  const [episodes, setEpisodes] = useState({})
  const [loading, setLoading] = useState(false)
  const [_error, _setError] = useState(false)

  const fetchEpisodeInfo = useCallback(() => {
    try {
      setLoading(true)
      axios.get(getShowEpisodesInfo(showId, seasonNumber))
        .then(response => {
          setEpisodes(response.data.episodes)
        })
        .catch(() => _setError(true))
    } catch (error) {
      _setError(true)
    } finally {
      setLoading(false)
    }
  }, [showId, seasonNumber])

  useEffect(() => {
    let name = `${showId}_${seasonNumber}_episodes`

    if (localStorage[name]) {
      setEpisodes(JSON.parse(localStorage[name]))
    } else {
      fetchEpisodeInfo()
    }
  }, [fetchEpisodeInfo, seasonNumber, showId])

  useEffect(() => {
    let name = `${showId}_${seasonNumber}_episodes`

    localStorage.setItem(name, JSON.stringify(episodes))
  }, [showId, seasonNumber, episodes])

  return [episodes, loading, _error]
}
