import {useEffect, useState, useCallback} from "react";
import axios from "axios";
import {getShowInfo} from "../../constants/constants";

export const useShowInfoFetch = ({showId}) => {

  const [state, setState] = useState({})
  const [loading, setLoading] = useState(false)
  const [_error, _setError] = useState(false)

  const fetchShowInfo = useCallback(() => {
    setLoading(true)

    try {
      axios.get(getShowInfo(showId))
        .then(response => {
          setState(response.data)
        })
    } catch (error) {
      console.log(error)
      _setError(true)
    } finally {
      setLoading(false)
    }
  }, [showId])

  useEffect(() => {
    fetchShowInfo()
  }, [fetchShowInfo])

  return [state, loading, _error]
}
