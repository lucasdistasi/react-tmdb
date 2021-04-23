import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {getYoutubeVideos} from "../../constants/constants";

export const useTrailerFetch = (elementId, elementType) => {

  const [trailers, setTrailers] = useState([])

  const fetchTrailers = useCallback(() => {
    try {
      console.log(">>> Fetching trailers... <<<")
      axios.get(getYoutubeVideos(elementId, elementType))
        .then(response => {
          setTrailers(response.data.results.filter(trailer => trailer.site.includes("YouTube")))
        })
    } catch (error) {

    }
  }, [elementId, elementType])

  useEffect(() => {
    fetchTrailers()
  }, [fetchTrailers])

  return [trailers]
}
