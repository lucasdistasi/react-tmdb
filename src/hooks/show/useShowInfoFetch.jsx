import {useEffect, useState, useCallback} from "react";
import axios from "axios";
import {getShowInfo} from "../../constants/constants";

export const useShowInfoFetch = ({showId}) => {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [_error, _setError] = useState(false)

  const fetchShowInfo = useCallback(() => {
    setLoading(true)

    try {
      axios.get(getShowInfo(showId))
        .then(response => {
          setData({
            id: showId,
            info: response.data
          })
        })
    } catch (error) {
      _setError(true)
    } finally {
      setLoading(false)
    }
  }, [showId])

  useEffect(() => {
    if (localStorage[showId]) {
      setData(JSON.parse(localStorage[showId]))
    } else {
      fetchShowInfo()
    }
  }, [fetchShowInfo, showId])

  useEffect(() => {
    localStorage.setItem(showId, JSON.stringify(data))
  }, [showId, data])

  return [data, loading, _error]
}
