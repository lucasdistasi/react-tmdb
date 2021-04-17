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
import {getPosterPath} from "../constants/constants";
import {MoviesGrid} from "./MoviesGrid";
import {useSimilarMoviesFetch} from "../hooks/useSimilarMoviesFetch";
import {useEffect} from "react";
import {MovieGenreComponent} from "./movie/MovieGenreComponent";
import {MovieProductionCompanies} from "./movie/MovieProductionCompanies";
import {MovieStatus} from "./movie/MovieStatus";
import {MovieHomePage} from "./movie/MovieHomePage";
import {MovieTaglineComponent} from "./movie/MovieTaglineComponent";

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
              <MovieTaglineComponent tagline={tagline}/>
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
              <MovieGenreComponent genres={genres}/>
              <MovieProductionCompanies productionCompanies={production_companies}/>
              <MovieStatus status={status}/>
              <MovieHomePage homepage={homepage} title={title}/>
            </div>
          </div>

          <DirectorsGridComponent directors={directors}/>
          <ActorsGridComponent actors={actors}/>

          <MoviesGrid movies={state.movies}
                      isLoading={similarMoviesLoading}
                      currentPage={state.currentPage}
                      totalPages={state.totalPages}
                      title="Similar Movies"/>
        </div>
      </div>
  )
}
