import {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import PropTypes from "prop-types"
import {getPosterPath} from "../constants/constants";

export const MovieCardComponent = ({movie}) => {

  const [backgroundImage, setBackgroundImage] = useState(`url(${getPosterPath("w500", movie.poster_path)})`)

  const setBlackBackground = () => {
    setBackgroundImage(`linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.4)), url(${getPosterPath("w500", movie.poster_path)})`)
  }

  const setMovieBackground = () => {
    setBackgroundImage(`url(${getPosterPath("w500", movie.poster_path)})`)
  }

  return (
    <Link to={`/movies/${movie.id}`}
          className="mx-10 my-8 rounded shadow-md card-movie rounded-3xl poster-hover-transition flex justify-center items-end animate__animated animate__fadeIn"
          style={{
            backgroundImage: backgroundImage
          }}
          onMouseEnter={setBlackBackground}
          onMouseOut={setMovieBackground}/>
  )
}

MovieCardComponent.prototype = {
  movies: PropTypes.object
}
