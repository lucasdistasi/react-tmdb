import {useMovieInfoFetch} from "../../hooks/movie/useMovieInfoFetch";
import {useParams} from "react-router-dom";
import {faStar, faDollarSign, faClock, faCalendarAlt, faMoneyBillWave} from '@fortawesome/free-solid-svg-icons'
import {InfoIconComponent} from "../common/InfoIconComponent";
import {SpinnerComponent} from "../page/SpinnerComponent";
import {ErrorComponent} from "../page/ErrorComponent";
import {useMovieDirectorsFetch} from "../../hooks/movie/useMovieDirectorsFetch";
import {useMovieActorsFetch} from "../../hooks/movie/useMovieActorsFetch";
import {filterDuplicatedElements, getPosterPath} from "../../constants/constants";
import {CatalogueGridComponent} from "../common/CatalogueGridComponent";
import {useSimilarFetch} from "../../hooks/common/useSimilarFetch";
import {useEffect} from "react";
import {GenreComponent} from "../common/GenreComponent";
import {ProductionCompaniesComponent} from "../common/ProductionCompaniesComponent";
import {StatusComponent} from "../common/StatusComponent";
import {HomePageComponent} from "../common/HomePageComponent";
import {TaglineComponent} from "../common/TaglineComponent";
import {NO_POSTER} from "../../constants/constants";
import {PeopleGridComponent} from "../common/PeopleGridComponent";
import {ReviewsGridComponent} from "../common/ReviewsGridComponent";
import {useReviewsFetch} from "../../hooks/common/useReviewsFetch";
import {TrailerComponent} from "../common/TrailerComponent";
import {useTrailerFetch} from "../../hooks/common/useTrailerFetch";
import {scrollToTop} from "../../constants/constants";

export const MovieInfoComponent = () => {

  const {movieId} = useParams();
  const [{
    adult, backdrop_path, title, tagline, overview, vote_average, budget, runtime, release_date, genres,
    production_companies, status, homepage, revenue
  }, loading, _error] = useMovieInfoFetch(movieId)
  const {directors} = useMovieDirectorsFetch(movieId)
  const {actors} = useMovieActorsFetch(movieId)
  const [{similarMovies, similarMoviesLoading}] = useSimilarFetch("movie", movieId)
  const [{reviews, loadingReviews, _errorReviews}] = useReviewsFetch(movieId, "movie")
  const [trailers] = useTrailerFetch(movieId, "movie")

  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60
  const movie_duration = `${hours}h ${minutes}m`

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })

  useEffect(() => {
    if (adult) {
      window.location.replace("/")
    }

    scrollToTop()
  })

  return (
    _error ? <ErrorComponent/> : loading ? <SpinnerComponent color={"#7FEF08FF"}/> :
      <div>
        <div
          className="animate__animated animate__fadeIn animate__delay-1s parallax mid-parallax flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${backdrop_path ?
              getPosterPath("original", backdrop_path) :
              NO_POSTER})`
          }}/>
        <div className="container mx-auto bg-gray-50">
          <div className="py-12">
            <div className="text-center">
              <h1 className="text-7xl py-6">{title}</h1>
              <TaglineComponent tagline={tagline}/>
              <TrailerComponent trailers={trailers} elementId={movieId} elementType={"movie"}/>
              <p className="text-lg mx-28 mt-12 pb-8">{overview}</p>
            </div>
            <div className="flex flex-col flex-wrap lg:flex-row items-center lg:justify-between mx-16 mt-10">
              <InfoIconComponent info={vote_average}
                                 icon={faStar}
                                 color="text-yellow-500"
                                 title="Rating"/>
              <InfoIconComponent info={formatter.format(budget)}
                                 icon={faDollarSign}
                                 color="text-green-500"
                                 title="Budget"/>
              <InfoIconComponent info={movie_duration}
                                 icon={faClock}
                                 color="text-gray-500"
                                 title="Duration"/>
              <InfoIconComponent info={formatter.format(revenue)}
                                 icon={faMoneyBillWave}
                                 color="text-green-500"
                                 title="Revenue"/>
              <InfoIconComponent info={release_date}
                                 icon={faCalendarAlt}
                                 color="text-blue-400"
                                 title="Release Date"/>
            </div>
          </div>

          <div className="py-14">
            <div className="flex flex-col lg:flex-row items-center lg:justify-around mx-16 mt-5">
              <GenreComponent genres={genres}/>
              <ProductionCompaniesComponent productionCompanies={production_companies}/>
              <StatusComponent status={status}/>
              <HomePageComponent homepage={homepage} title={title}/>
            </div>
          </div>
          <PeopleGridComponent
            people={filterDuplicatedElements(directors)}
            title={"Directors"}
            loadMoreFunction={null}
            isLoading={loading}
            currentPage={0}
            totalPages={0}/>
          <PeopleGridComponent
            people={filterDuplicatedElements(actors)}
            title={"Popular Actors / Actresses"}
            loadMoreFunction={null}
            isLoading={loading}
            currentPage={0}
            totalPages={0}/>
          <ReviewsGridComponent reviews={reviews} isLoading={loadingReviews} hasErrors={_errorReviews}/>
          <CatalogueGridComponent elements={similarMovies.elements}
                                  isLoading={similarMoviesLoading}
                                  currentPage={similarMovies.currentPage}
                                  totalPages={similarMovies.totalPages}
                                  title="Similar Movies"
                                  elementType="movies"/>
        </div>
      </div>
  )
}
