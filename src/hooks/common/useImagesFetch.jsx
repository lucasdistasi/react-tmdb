import {getImages} from "../../constants/constants";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";

export const useImagesFetch = (elementId, elementType) => {

  const [images, setImage] = useState([])
  const [errorImages, setErrorImage] = useState(false)


  const getAllImages = useCallback(() => {
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
    let name = `${elementType}_${elementId}_images`;

    if (localStorage[name]) {
      setImage(JSON.parse(localStorage[name]))
    } else {
      getAllImages()
    }

  }, [getAllImages])

  useEffect(() => {
    let name = `${elementType}_${elementId}_images`;

    localStorage.setItem(name, JSON.stringify(images))
  }, [elementType, elementId, images])

  return [images, errorImages]
}
