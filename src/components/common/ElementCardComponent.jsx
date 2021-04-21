import {useState} from "react";
import {Link} from 'react-router-dom'
import PropTypes from "prop-types"
import {getPosterPath} from "../../constants/constants"

export const ElementCardComponent = ({element, elementType}) => {

  const backDropPath = `url(${getPosterPath("w500", element.backdrop_path)})`
  const posterPath = `url(${getPosterPath("w500", element.poster_path)})`
  const noImagePath = `url(${process.env.PUBLIC_URL}/no-image-element.jpg)`

  const [backgroundImage, setBackgroundImage] = useState(
    element.poster_path ?
      posterPath :
      element.backdrop_path ?
        backDropPath :
        noImagePath)

  const setBlackBackground = () => {
    setBackgroundImage(`linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.4)), ${backgroundImage}`)
  }

  const setMovieBackground = () => {
    element.poster_path ?
      setBackgroundImage(`${posterPath}`) :
      element.backdrop_path ?
        setBackgroundImage(`${backDropPath}`) :
        setBackgroundImage(`${noImagePath}`)
  }

  return (
    <Link to={`/${elementType}/${element.id}`}
          className="mx-10 my-8 rounded shadow-md card-movie rounded-3xl poster-hover-transition flex justify-center items-end animate__animated animate__fadeIn"
          style={{
            backgroundImage: backgroundImage
          }}
          onMouseEnter={setBlackBackground}
          onMouseOut={setMovieBackground}/>
  )
}

ElementCardComponent.prototype = {
  element: PropTypes.object,
  elementType: PropTypes.string
}
