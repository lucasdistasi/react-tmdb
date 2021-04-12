import {useState, useEffect} from 'react'
import axios from "axios";

export const HeroComponent = () => {

  const [popularMovie, setPopularMovie] = useState({})

  const getBackdropPath = (imgUri) => {
    return `https://image.tmdb.org/t/p/original${imgUri}`
  }

  const getRandomPage = () => {
    // Get a random page from 1 to 10
    return Math.floor(Math.random() * 10)
  }

  const URI = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${getRandomPage()}`
  useEffect(() => {
    axios.get(URI)
      .then(response => {
        let randomMovie = Math.floor(Math.random() * response.data.results.length)
        setPopularMovie(response.data.results[randomMovie])
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="animate__animated animate__fadeIn animate__delay-1s parallax flex flex-col items-center justify-center"
         style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${getBackdropPath(popularMovie.backdrop_path)})`}}>
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
      <button className="bg-transparent text-white font-bold hover:text-white py-2 px-4 border border-white rounded rounded-lg w-4/12 btn-more-info uppercase">
        More Info
      </button>
    </div>
  )
}
