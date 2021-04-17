import {useMovieInfoFetch} from "../hooks/useMovieInfoFetch";
import {useParams} from "react-router-dom";
import {faStar, faDollarSign, faClock, faCalendarAlt, faMoneyBillWave} from '@fortawesome/free-solid-svg-icons'
import {MovieInfoIconComponent} from "./MovieInfoIconComponent";
import {SpinnerComponent} from "./SpinnerComponent";
import {ErrorComponent} from "./ErrorComponent";
import {useMovieDirectorsFetch} from "../hooks/useMovieDirectorsFetch";
import {DirectorsGridComponent} from "./DirectorsGridComponent";
import {ActorsGridComponent} from "./ActorsGridComponent";
import {useMovieActorsFetch} from "../hooks/useMovieActorsFetch";
import {getMovieByPage, getPosterPath} from "../constants/constants";
import {MoviesGrid} from "./MoviesGrid";
import {useSimilarMoviesFetch} from "../hooks/useSimilarMoviesFetch";
import {getSimilarMovies} from "../constants/constants";
import {useEffect} from "react";

export const MovieInfoComponent = () => {

  const {movieId} = useParams();
  const [{
    backdrop_path, title, tagline, overview, vote_average, budget, runtime, release_date, genres,
    production_companies, status, homepage, revenue
  }, loading, _error] = useMovieInfoFetch(movieId)
  const {directors} = useMovieDirectorsFetch(movieId)
  const {actors} = useMovieActorsFetch(movieId)
  const [{state, similarMoviesLoading}] = useSimilarMoviesFetch(movieId)

  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60
  const movie_duration = `${hours}h ${minutes}m`

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })

  const scrollToTop = () => {
    const position = document.documentElement.scrollTop || document.body.scrollTop;
    if (position > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, position - position / 80);
    }
  }

  useEffect(() => {
    scrollToTop()
  })

  return (
    _error ? <ErrorComponent/> : loading ? <SpinnerComponent/> :
      <div>
        <div
          className="animate__animated animate__fadeIn animate__delay-1s parallax mid-parallax flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${getPosterPath("original", backdrop_path)})`
          }}/>
        <div className="container mx-auto bg-gray-50">
          <div className="py-12">
            <div className="text-center">
              <h1 className="text-7xl py-6">{title}</h1>
              {
                tagline &&
                <p className="italic py-6">{tagline}</p>
              }
              <p className="text-lg mx-28 mt-12 pb-8">{overview}</p>
            </div>
            <div className="flex flex-col flex-wrap lg:flex-row items-center lg:justify-between mx-16 mt-10">
              <MovieInfoIconComponent info={vote_average}
                                      icon={faStar}
                                      color="text-yellow-500"
                                      title="Rating"/>
              <MovieInfoIconComponent info={formatter.format(budget)}
                                      icon={faDollarSign}
                                      color="text-green-500"
                                      title="Budget"/>
              <MovieInfoIconComponent info={movie_duration}
                                      icon={faClock}
                                      color="text-gray-500"
                                      title="Duration"/>
              <MovieInfoIconComponent info={formatter.format(revenue)}
                                      icon={faMoneyBillWave}
                                      color="text-green-500"
                                      title="Revenue"/>
              <MovieInfoIconComponent info={release_date}
                                      icon={faCalendarAlt}
                                      color="text-blue-400"
                                      title="Release Date"/>
            </div>
          </div>

          <div className="py-14">
            <div className="flex flex-col lg:flex-row items-center lg:justify-around mx-16 mt-5">
              <div className="mt-10 text-center">
                <p className="font-mono text-lg font-semibold text-gray-700">Genres</p>
                {
                  genres && genres.map(genre =>
                    <p className="italic" key={genre.name}>{genre.name}</p>)
                }
              </div>
              {
                production_companies && production_companies.length > 0 &&
                <div className="mt-10 text-center">
                  <p className="font-mono text-lg font-semibold text-gray-700">Production Companies</p>
                  {
                    production_companies.map(company =>
                      <p className="italic" key={company.name}>{company.name}</p>)
                  }
                </div>
              }
              <div className="mt-10 text-center">
                <p className="font-mono text-lg font-semibold text-gray-700">Movie Status</p>
                {
                  <p className="italic">{status}</p>
                }
              </div>
              {
                homepage && <div className="mt-10 text-center">
                  <p className="font-mono text-lg font-semibold text-gray-700">Movie Site</p>
                  <a href={homepage} className="text-blue-600 hover:underline" target="_blank"
                     rel="noreferrer">{title}</a>
                </div>
              }
            </div>
          </div>

          {
            directors.length > 0 &&
            <>
              <h1 className="text-center text-4xl py-6">Directors</h1>
              <div className="flex flex-col lg:flex-row lg:flex-wrap items-center lg:justify-center py-5">
                <DirectorsGridComponent directors={directors}/>
              </div>
            </>
          }

          {
            actors.length > 0 &&
            <>
              <h1 className="text-center text-4xl py-6">Popular Actors / Actresses</h1>
              <div className="flex flex-col lg:flex-row lg:flex-wrap items-center lg:justify-center py-5">
                <ActorsGridComponent actors={actors}/>
              </div>
            </>
          }

          {
            <MoviesGrid movies={state.movies}
                        isLoading={similarMoviesLoading}
                        currentPage={state.currentPage}
                        totalPages={state.totalPages}
                        title="Similar Movies"/>
          }
        </div>
      </div>
  )
}
