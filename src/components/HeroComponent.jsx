import {useState, useEffect} from 'react'
import axios from "axios";

const URI = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`

export const HeroComponent = () => {

  const [popularMovie, setPopularMovie] = useState({})

  const getBackdropPath = (imgUri) => {
    return `https://image.tmdb.org/t/p/original${imgUri}`
  }

  useEffect(() => {
    axios.get(URI)
      .then(response => {
        let randomMovie = Math.floor(Math.random() * response.data.results.length)
        console.log(response.data.results)
        setPopularMovie(response.data.results[randomMovie])
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="parallax flex flex-col items-center justify-center"
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
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-4/12">
        More Info
      </button>
    </div>
  )
}