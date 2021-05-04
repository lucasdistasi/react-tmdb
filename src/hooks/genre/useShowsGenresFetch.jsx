import axios from "axios";
import {getTvShowGenres} from "../../constants/constants";
import {useCallback, useEffect, useState} from "react";

export const useShowsGenresFetch = () => {

  const [tvShowGenres, setTvShowGenre] = useState([])

  const fetchTvGenresGenres = useCallback(() => {
    try {
      axios.get(getTvShowGenres())
        .then(response => {
          setTvShowGenre(response.data.genres)
        })
    } catch (error) {

    }
  }, [])

  useEffect(() => {
    fetchTvGenresGenres()
  }, [fetchTvGenresGenres])

  return [tvShowGenres]
}
