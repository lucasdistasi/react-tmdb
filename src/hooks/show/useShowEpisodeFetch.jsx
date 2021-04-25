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
       .then(response => setEpisodes(response.data.episodes))
    } catch (error) {
      _setError(true)
    } finally {
      setLoading(false)
    }
  }, [showId, seasonNumber])

  useEffect(() => {
    fetchEpisodeInfo()
  }, [fetchEpisodeInfo])

  return [episodes, loading, _error]
}
