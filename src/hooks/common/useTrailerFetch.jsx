import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {getYoutubeVideos} from "../../constants/constants";

export const useTrailerFetch = (elementId, elementType) => {

  const [trailers, setTrailers] = useState([])
  const [trailersError, setTrailerError] = useState(false)

  const fetchTrailers = useCallback(() => {
    try {
      axios.get(getYoutubeVideos(elementId, elementType))
        .then(response => {
          setTrailers(response.data.results.filter(trailer => trailer.site.includes("YouTube")))
        })
        .catch(() => {
          setTrailerError(true)
        })
    } catch (error) {
      setTrailerError(true)
    }
  }, [elementId, elementType])

  useEffect(() => {
    let name = `${elementType}_${elementId}_trailers`;

    if (localStorage[name]) {
      setTrailers(JSON.parse(localStorage[name]))
    } else {
      fetchTrailers()
    }
  }, [fetchTrailers, elementId, elementType])

  useEffect(() => {
    let name = `${elementType}_${elementId}_trailers`;

    localStorage.setItem(name, JSON.stringify(trailers))
  }, [elementType, elementId, trailers])

  return [trailers, trailersError]
}
