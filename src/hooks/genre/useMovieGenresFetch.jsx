import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {getMovieGenres} from "../../constants/constants";

export const useMovieGenresFetch = () => {

  const [movieGenres, setMovieGenre] = useState([])

  const fetchMovieGenres = useCallback(() => {
    try {
      axios.get(getMovieGenres())
        .then(response => {
          setMovieGenre(response.data.genres)
        })
    } catch (error) {

    }
  }, [])

  useEffect(() => {
    fetchMovieGenres()
  }, [fetchMovieGenres])

  return [movieGenres]
}
