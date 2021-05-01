import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {getReviews} from "../../constants/constants";

export const useReviewsFetch = (elementId, elementType) => {

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
        setLoadingReviews(false)
      })
    } catch (error) {
      _setErrorReviews(true)
    } finally {
      setLoadingReviews(false)
    }
  }, [elementId, elementType])

  useEffect(() => {
    let name = `${elementType}_${elementId}_reviews`;

    if (localStorage[name]) {
      console.log("Fetching reviews from local storage")
      setReview(JSON.parse(localStorage[name]))
    } else {
      console.log("Fetching reviews from TMDB API")
      fetchReviews()
    }
  }, [fetchReviews, elementId, elementType])

  useEffect(() => {
    let name = `${elementType}_${elementId}_reviews`;

    localStorage.setItem(name, JSON.stringify(reviews))
  }, [elementType, elementId, reviews])

  return [{reviews, loadingReviews, _errorReviews}]
}
