import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {getYoutubeVideos} from "../../constants/constants";

export const useTrailerFetch = (elementId, elementType) => {

  const [trailers, setTrailers] = useState([])
  const [trailersError, setTrailerError] = useState(false)

  const fetchTrailers = useCallback(() => {
    try {
      console.log(">>> Fetching trailers... <<<")
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
    fetchTrailers()
  }, [fetchTrailers])

  return [trailers, trailersError]
}
