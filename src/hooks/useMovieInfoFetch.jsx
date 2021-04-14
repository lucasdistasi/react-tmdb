import {useState, useEffect, useCallback} from "react";
import axios from "axios";

export const useMovieInfoFetch = (movieId) => {

    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(false)
    const [_error, _setError] = useState(false)

    const fetchMovieInfo = useCallback(async () => {
        const URI = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`

        try {
            setLoading(true)
            axios.get(URI)
                .then(response => {
                    setMovie(response.data)
                })
                .catch(err => console.log(err))
        } catch (error) {
            _setError(true)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [movieId])

    useEffect(() => {
        fetchMovieInfo();
    }, [fetchMovieInfo])

    return [movie, loading, _error]
}
