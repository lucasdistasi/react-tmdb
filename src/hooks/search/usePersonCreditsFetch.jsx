import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {getPersonPopularCredits} from "../../constants/constants";

export const usePersonCreditsFetch = (personId) => {

  const [credits, setCredits] = useState([])
  const [loadingCredits, setLoadingCredits] = useState(false)
  const [errorCredits, setErrorCredits] = useState(false)

  const fetchPersonCredits = useCallback(() => {
    setLoadingCredits(true)

    try {
      axios.get(getPersonPopularCredits(personId))
        .then(response => {
          setCredits([...response.data.cast, ...response.data.crew])
        })
        .catch(() => setErrorCredits(true))
    } catch (error) {
      setErrorCredits(false)
    } finally {
      setLoadingCredits(false)
    }
  }, [personId])

  useEffect(() => {
    fetchPersonCredits()
  }, [fetchPersonCredits])

  return [credits, loadingCredits, errorCredits]
}
