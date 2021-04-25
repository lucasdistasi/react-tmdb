import {useState, useEffect, useCallback} from "react";
import axios from "axios";
import PropTypes from "prop-types"
import {getMovieInfo} from "../../constants/constants";

export const useMovieInfoFetch = (movieId) => {

    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(false)
    const [_error, _setError] = useState(false)

    const fetchMovieInfo = useCallback(async () => {
        try {
            setLoading(true)
            axios.get(getMovieInfo(movieId))
                .then(response => {
                    setMovie(response.data)
                })
                .catch(() => {
                  _setError(true)
                })
        } catch (error) {
            _setError(true)
        } finally {
            setLoading(false)
        }
    }, [movieId])

    useEffect(() => {
        fetchMovieInfo();
    }, [fetchMovieInfo])

    return [movie, loading, _error]
}

useMovieInfoFetch.prototype = {
  movieId: PropTypes.number
}
