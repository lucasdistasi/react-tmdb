import {useState} from "react";

export const MovieCardComponent = ({movies}) => {

  const getPosterPath = (imgUri) => {
    return `https://image.tmdb.org/t/p/w500${imgUri}`
  }

  const [backgroundImage, setBackgroundImage] = useState(`url(${getPosterPath(movies.poster_path)})`)

  const setBlackBackground = () => {
    setBackgroundImage(`linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.4)), url(${getPosterPath(movies.poster_path)})`)
  }

  const setMovieBackground = () => {
    setBackgroundImage(`url(${getPosterPath(movies.poster_path)})`)
  }

  return (
    <a href={movies.id}
      className="mx-10 my-8 rounded shadow-md card-movie rounded-3xl poster-hover-transition flex justify-center items-end animate__animated animate__fadeIn"
      style={{
        backgroundImage: backgroundImage
      }}
      onMouseEnter={setBlackBackground}
      onMouseOut={setMovieBackground}>
    </a>
  )
}
