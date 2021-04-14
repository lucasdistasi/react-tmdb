import {useMovieInfoFetch} from "../hooks/useMovieInfoFetch";
import {useParams} from "react-router-dom";
import {faStar, faDollarSign, faClock, faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import {MovieInfoIconComponent} from "./MovieInfoIconComponent";

export const MovieInfoComponent = () => {

  const {movieId} = useParams();
  const [{movie, loading, _error}, fetchMovieInfo] = useMovieInfoFetch(movieId)

  const getBackdropPath = (imgUri) => {
    return `https://image.tmdb.org/t/p/original${imgUri}`
  }

  console.log(movie)

  /*
    adult
    homepage
    status
   */

  return (
    <div>
      <div
        className="animate__animated animate__fadeIn animate__delay-1s parallax mid-parallax flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${getBackdropPath(movie.backdrop_path)})`
        }}/>

      <div className="container mx-auto bg-gray-50">
        <div className="py-12">
          <div className="text-center">
            <h1 className="text-7xl py-6">{movie.title}</h1>
            {
              movie.tagline &&
              <p className="italic py-6">{movie.tagline}</p>
            }
            <p className="text-lg mx-28 mt-12 pb-8">{movie.overview}</p>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row items-center md:justify-between mx-16 mt-10">
            <MovieInfoIconComponent info={movie.vote_average} icon={faStar} color="text-yellow-500" title="Rating"/>
            <MovieInfoIconComponent info={movie.budget} icon={faDollarSign} color="text-green-500" title="Revenue"/>
            <MovieInfoIconComponent info={movie.runtime} icon={faClock} color="text-gray-500" title="Duration"/>
            <MovieInfoIconComponent info={movie.release_date} icon={faCalendarAlt} color="text-blue-400" title="Release Date"/>
          </div>
        </div>

        <div className="py-14">
          <div className="flex flex-col flex-wrap md:flex-row items-center md:justify-around mx-16 mt-5">
            <div className="mt-10 text-center">
              <p className="font-mono text-lg font-semibold text-gray-700">Genres</p>
              {
                movie.genres && movie.genres.map(genre =>
                  <p className="italic">{genre.name}</p>)
              }
            </div>
            <div className="mt-10 text-center">
              <p className="font-mono text-lg font-semibold text-gray-700">Production Companies</p>
              {
                movie.production_companies && movie.production_companies.map(company =>
                  <p className="italic">{company.name}</p>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
