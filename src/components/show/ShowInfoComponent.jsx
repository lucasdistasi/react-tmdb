import {useParams} from "react-router-dom";
import {useShowInfoFetch} from "../../hooks/show/useShowInfoFetch";
import {getPosterPath, NO_POSTER} from "../../constants/constants";
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

export const ShowInfoComponent = () => {

  const {showId} = useParams();
  const [{
    name, tagline, overview, backdrop_path, genres, production_companies, status, homepage, vote_average,
    first_air_date, last_air_date, number_of_episodes, number_of_seasons, created_by, networks, seasons
  }
    , loading, _error] = useShowInfoFetch({showId})

  /*
      https://developers.themoviedb.org/3/tv-seasons/get-tv-season-details
   */

  return (
    _error ? <ErrorComponent/> : loading ? <SpinnerComponent/> :
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
              <h1 className="text-7xl py-6">{name}</h1>
              <TaglineComponent tagline={tagline}/>
              <p className="text-lg mx-28 mt-12 pb-8">{overview}</p>
            </div>
            <div className="flex flex-col flex-wrap lg:flex-row items-center lg:justify-between mx-16 mt-10">
              <InfoIconComponent info={vote_average}
                                 icon={faStar}
                                 color="text-yellow-500"
                                 title="Rating"/>
              <InfoIconComponent info={first_air_date}
                                 icon={faCalendarAlt}
                                 color="text-green-500"
                                 title="First Air Date"/>
              <InfoIconComponent info={last_air_date}
                                 icon={faCalendarAlt}
                                 color="text-blue-500"
                                 title="Last Air Date"/>
              <InfoIconComponent info={number_of_seasons}
                                 icon={faVideo}
                                 color="text-indigo-500"
                                 title="Seasons"/>
              <InfoIconComponent info={number_of_episodes}
                                 icon={faFilm}
                                 color="text-purple-500"
                                 title="Total Episodes"/>
            </div>
          </div>

          <div className="py-14">
            <div className="flex flex-col lg:flex-row items-center lg:justify-around mx-16 mt-5">
              {
                genres && genres.length > 0 && <GenreComponent genres={genres}/>
              }
              <ProductionCompaniesComponent productionCompanies={production_companies}/>
              <StatusComponent status={status}/>
              <HomePageComponent homepage={homepage} title={name}/>
            </div>
          </div>

          <PeopleGridComponent
            people={created_by}
            title={"Created by"}
            loadMoreFunction={null}
            isLoading={loading}
            currentPage={0}
            totalPages={0}/>

          <NetworkGridComponent networks={networks}
                                title={"Networks"}/>

          <NetworkGridComponent networks={production_companies}
                                title={"Production Companies"}/>

          {
            seasons && <SeasonAccordionComponent seasons={seasons} showId={showId} originalPoster={backdrop_path}/>
          }

        </div>
      </div>
  )
}
