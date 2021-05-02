import {useCallback, useEffect, useState} from "react";
import {getPersonInfo} from "../../constants/constants";
import axios from "axios";

export const usePersonInformationFetch = (personId) => {

  const [personInformation, setPersonInformation] = useState({})
  const [loadingPersonInformation, setLoadingPersonInformation] = useState(false)
  const [errorPersonInformation, setErrorPersonInformation] = useState(false)


  const getPersonInformation = useCallback(() => {
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
    let name = `person_${personId}`

    if (localStorage[name]) {
      setPersonInformation(JSON.parse(localStorage[name]))
    } else {
      getPersonInformation()
    }
  }, [getPersonInformation])

  useEffect(() => {
    let name = `person_${personId}`

    localStorage.setItem(name, JSON.stringify(personInformation))
  }, [personId, personInformation])

  return [personInformation, loadingPersonInformation, errorPersonInformation]
}
