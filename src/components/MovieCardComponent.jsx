import {useState} from "react";

export const MovieCardComponent = (props) => {

  const getPosterPath = (imgUri) => {
    return `https://image.tmdb.org/t/p/w500${imgUri}`
  }

  const getOriginalPosterPath = (imgUri) => {
    return `https://image.tmdb.org/t/p/original${imgUri}`
  }

  const [backgroundImage, setBackgroundImage] = useState(getPosterPath(props.movies.poster_path))

  function hover(element) {
    setBackgroundImage(getOriginalPosterPath(props.movies.poster_path))
  }

  function unhover(element) {
    setBackgroundImage(getPosterPath(props.movies.poster_path))
  }

  return (
    /*<div>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg" style={{
        position: "absolute",
        marginTop: "15%",
        marginLeft: "5%",
        zIndex: "999"
      }}>
        button
      </button>
      <img className="mx-10 my-8 rounded-3xl shadow-2xl w-50 h-96 rounded-3xl poster-hover-transition"
           src={backgroundImage}
           alt={props.movies.original_title}
           onMouseOver={hover}
           onMouseOut={unhover}/>
    </div>*/

    <div className="mx-10 my-8 rounded-3xl shadow-2xl card-movie rounded-3xl poster-hover-transition"
           style={{
             backgroundImage: `url(${getPosterPath(props.movies.poster_path)})`
           }}/>


    /*<div className="mx-10 my-8 rounded-3xl shadow-2xl w-50 h-96 rounded-3xl poster-hover-transition"
         style={{
           backgroundImage: `url(${getPosterPath(props.movies.poster_path)})`
         }}/>*/
  )
}
