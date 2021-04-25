import {getImages} from "../../constants/constants";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";

export const useImagesFetch = (elementId, elementType) => {

  const [images, setImage] = useState([])
  const [errorImages, setErrorImage] = useState(false)


  const getAllImages = useCallback(() => {
    console.log(">>> Fetching images <<<")
    try {
      axios.get(getImages(elementId, elementType))
        .then(response => {
          if (response.data.backdrops && response.data.backdrops.length > 0) {
            setImage(response.data.backdrops)
          } else {
            setImage(response.data.posters)
          }
        })
        .catch(() => {
          setErrorImage(true)
        })
    } catch (error) {
      setErrorImage(true)
    }
  }, [elementId, elementType])

  useEffect(() => {
    getAllImages()
  }, [getAllImages])

  return [images, errorImages]
}
