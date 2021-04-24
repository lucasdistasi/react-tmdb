import {useCallback, useEffect, useState} from "react";
import {getPersonInfo} from "../../constants/constants";
import axios from "axios";

export const usePersonInformationFetch = (personId) => {

  const [personInformation, setPersonInformation] = useState({})
  const [loadingPersonInformation, setLoadingPersonInformation] = useState(false)
  const [errorPersonInformation, setErrorPersonInformation] = useState(false)


  const getPersonInformation = useCallback(() => {
    console.log(">>> Fetching person info <<<")
    setLoadingPersonInformation(true)
    try {
      axios.get(getPersonInfo(personId))
        .then(response => {
          setPersonInformation(response.data)
        })
        .catch(() => {
          setErrorPersonInformation(true)
        })
    } catch (error) {
      setErrorPersonInformation(true)
    } finally {
      setLoadingPersonInformation(false)
    }
  }, [personId])

  useEffect(() => {
    getPersonInformation()
  }, [getPersonInformation])

  return [personInformation, loadingPersonInformation, errorPersonInformation]
}
