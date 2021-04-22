import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {getReviews} from "../../constants/constants";

export const useFetchReviews = (elementId, elementType) => {

  const [reviews, setReview] = useState([])
  const [loadingReviews, setLoadingReviews] = useState(false)
  const [_errorReviews, _setErrorReviews] = useState(false)

  const fetchReviews = useCallback(() => {
    console.log(">>> fetching reviews <<<")
    setLoadingReviews(true)
    try {
      axios.get(getReviews(elementId, elementType))
        .then(response => {
          setReview(response.data.results)
        })
        .catch(() => {
          _setErrorReviews(true)
        })
        .finally(() => {
        setLoadingReviews(true)
      })
    } catch (error) {
      _setErrorReviews(true)
    } finally {
      setLoadingReviews(true)
    }
  }, [elementId, elementType])

  useEffect(() => {
    fetchReviews()
  }, [fetchReviews, elementId, elementType])

  return [{reviews, loadingReviews, _errorReviews}]
}
