import {useEffect, useCallback, useState} from "react";
import {getShowEpisodesInfo} from "../../constants/constants";
import axios from "axios";

export const useShowEpisodeFetch = ({showId, seasonNumber}) => {

  const [episodes, setEpisodes] = useState({})
  const [_error, _setError] = useState(false)

  const fetchEpisodeInfo = useCallback(() => {
    //console.log("fetching info from showId " + showId + " and season " + seasonNumber)
    try {
     axios.get(getShowEpisodesInfo(showId, seasonNumber))
       .then(response => setEpisodes(response.data.episodes))
    } catch (error) {
      console.log(error)
      _setError(true)
    }
  }, [showId, seasonNumber])

  useEffect(() => {
    fetchEpisodeInfo()
  }, [fetchEpisodeInfo])

  return [episodes, _error]
}
