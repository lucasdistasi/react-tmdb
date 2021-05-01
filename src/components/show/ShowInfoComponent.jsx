import {useParams} from "react-router-dom";
import {useShowInfoFetch} from "../../hooks/show/useShowInfoFetch";
import {filterDuplicatedElements, getPosterPath, NO_POSTER} from "../../constants/constants";
import {ErrorComponent} from "../page/ErrorComponent";
import {SpinnerComponent} from "../page/SpinnerComponent";
import {TaglineComponent} from "../common/TaglineComponent";
import {InfoIconComponent} from "../common/InfoIconComponent";
import {faCalendarAlt, faVideo, faFilm, faStar} from "@fortawesome/free-solid-svg-icons";
import {GenreComponent} from "../common/GenreComponent";
import {ProductionCompaniesComponent} from "../common/ProductionCompaniesComponent";
import {StatusComponent} from "../common/StatusComponent";
import {HomePageComponent} from "../common/HomePageComponent";
import {NetworkGridComponent} from "./NetworkGridComponent";
import {SeasonAccordionComponent} from "./SeasonAccordionComponent";
import {PeopleGridComponent} from "../common/PeopleGridComponent";
import {ReviewsGridComponent} from "../common/ReviewsGridComponent";
import {useReviewsFetch} from "../../hooks/common/useReviewsFetch";
import {useTrailerFetch} from "../../hooks/common/useTrailerFetch";
import {TrailerComponent} from "../common/TrailerComponent";
import {useSimilarFetch} from "../../hooks/common/useSimilarFetch";
import {CatalogueGridComponent} from "../common/CatalogueGridComponent";
import {scrollToTop} from "../../constants/constants";
import {useEffect} from "react";

export const ShowInfoComponent = () => {

  const {showId} = useParams();
  const [{info}, loading, _error] = useShowInfoFetch({showId})
  const [{similarMovies, similarLoading}] = useSimilarFetch("tv", showId)
  const [{reviews, loadingReviews, _errorReviews}] = useReviewsFetch(showId, "tv")
  const [trailers] = useTrailerFetch(showId, "tv")

  useEffect(() => {
    scrollToTop()
  })

  return (
    loading ? <SpinnerComponent color={"#EA01FFFF"}/> : _error ? <ErrorComponent/> :
      <div>
        { info &&
          <>
            <div
              className="animate__animated animate__fadeIn animate__delay-1s parallax mid-parallax flex flex-col items-center justify-center"
              style={{
                backgroundImage: `url(${info.backdrop_path ?
                  getPosterPath("original", info.backdrop_path) :
                  NO_POSTER})`
              }}/>

            <div className="container mx-auto bg-gray-50">
              <div className="py-12">
                <div className="text-center">
                  <h1 className="text-7xl py-6">{info.name}</h1>
                  <TaglineComponent tagline={info.tagline}/>
                  <TrailerComponent trailers={trailers} elementId={info.id} elementType="tv"/>
                  <p className="text-lg mx-28 mt-12 pb-8">{info.overview}</p>
                </div>
                <div className="flex flex-col flex-wrap lg:flex-row items-center lg:justify-between mx-16 mt-10">
                  <InfoIconComponent info={info.vote_average}
                                     icon={faStar}
                                     color="text-yellow-500"
                                     title="Rating"/>
                  <InfoIconComponent info={info.first_air_date}
                                     icon={faCalendarAlt}
                                     color="text-green-500"
                                     title="First Air Date"/>
                  <InfoIconComponent info={info.last_air_date}
                                     icon={faCalendarAlt}
                                     color="text-blue-500"
                                     title="Last Air Date"/>
                  <InfoIconComponent info={info.number_of_seasons}
                                     icon={faVideo}
                                     color="text-indigo-500"
                                     title="Seasons"/>
                  <InfoIconComponent info={info.number_of_episodes}
                                     icon={faFilm}
                                     color="text-purple-500"
                                     title="Total Episodes"/>
                </div>
              </div>

              <div className="py-14">
                <div className="flex flex-col lg:flex-row items-center lg:justify-around mx-16 mt-5">
                  <GenreComponent genres={info.genres}/>
                  <ProductionCompaniesComponent productionCompanies={info.production_companies}/>
                  <StatusComponent status={info.status}/>
                  <HomePageComponent homepage={info.homepage} title={info.name}/>
                </div>
              </div>

              <PeopleGridComponent
                people={filterDuplicatedElements(info.created_by)}
                title={"Created by"}
                loadMoreFunction={null}
                isLoading={loading}
                currentPage={0}
                totalPages={0}/>

              <NetworkGridComponent networks={info.networks}
                                    title={"Networks"}/>

              <NetworkGridComponent networks={info.production_companies}
                                    title={"Production Companies"}/>

              {
                info.seasons && <SeasonAccordionComponent seasons={info.seasons} showId={info.id} originalPoster={info.backdrop_path}/>
              }

              <ReviewsGridComponent reviews={reviews}  isLoading={loadingReviews} hasErrors={_errorReviews}/>

              <CatalogueGridComponent elements={similarMovies.elements}
                                      isLoading={similarLoading}
                                      currentPage={similarMovies.currentPage}
                                      totalPages={similarMovies.totalPages}
                                      title="Similar shows"
                                      elementType="shows"/>
            </div>
          </>
        }
      </div>
  )
}
