import {useCallback, useEffect, useState} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
import {SpinnerComponent} from "./SpinnerComponent";
import {HERO_URI, getPosterPath} from "../../constants/constants.js"

export const HeroComponent = () => {

  const [popularMovie, setPopularMovie] = useState({})
  const [loading, setLoading] = useState(false)
  const [_errors, _setErrors] = useState(false)

  const getRandomPage = () => {
    // Get a random page from 1 to 10
    return Math.floor(Math.random() * 10)
  }

  const fetchData = useCallback(() => {
    console.log(">>> Feching data <<<")
    const URI = `${HERO_URI}${getRandomPage()}`
    setLoading(true)
    axios.get(URI)
      .then(response => {
        let randomMovie = Math.floor(Math.random() * response.data.results.length)
        setPopularMovie(response.data.results[randomMovie])
      })
      .catch(err => {
        setLoading(false)
        _setErrors(true)
      })
      .finally(() => setLoading(false))
  }, [])

  // In some case, TMDB returns 422 when fetching the top rated movies
  // If that's the case, we will retry the request
  if (_errors) {
    _setErrors(false)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    popularMovie && !loading ?
      <div
        className="animate__animated animate__fadeIn animate__delay-1s parallax full-parallax flex flex-col items-center justify-center"
        style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${getPosterPath("original", popularMovie.backdrop_path)})`}}>
        <div className="text-center w-9/12 text-white">
          <h1 className="font-bold font-sans text-5xl uppercase">
            {
              popularMovie && popularMovie.title
            }
          </h1>
          <p className="py-5 text-2xl">
            {
              popularMovie && popularMovie.overview
            }
          </p>
        </div>
        <Link to={`/movies/${popularMovie.id}`}
              className=" text-center bg-transparent text-white font-bold hover:text-white py-2 px-4
                  border border-white rounded rounded-lg w-4/12 btn-more-info uppercase">
          More Info
        </Link>
      </div>

      : <SpinnerComponent/>
  )
}
