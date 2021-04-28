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
    fetchShowInfo()
  }, [fetchShowInfo])

  return [data, loading, _error]
}
