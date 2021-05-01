import {filterDuplicatedElements, getPosterPath} from "../../constants/constants";
import {
  faBirthdayCake,
  faMapMarker,
  faCircle,
  faSkullCrossbones,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";
import {PERSON_WITHOUT_IMAGE_BIG} from "../../constants/constants";
import PropTypes from "prop-types";
import {ErrorComponent} from "../page/ErrorComponent";
import {SpinnerComponent} from "../page/SpinnerComponent";
import {usePersonCreditsFetch} from "../../hooks/search/usePersonCreditsFetch";
import {CatalogueGridComponent} from "../common/CatalogueGridComponent";
import {PersonIconComponent} from "./PersonIconComponent";
import {PersonInfoDescriptionComponent} from "./PersonInfoDescriptionComponent";

export const PersonDescriptionComponent = ({person, isLoading, hasErrors, personId}) => {


  const [credits] = usePersonCreditsFetch(personId)
  let movies = credits.filter(credit => credit.media_type === "movie" && !credit.adult)
  let shows = credits.filter(credit => credit.media_type === "tv" && !credit.adult)

  return (
    hasErrors ? <ErrorComponent/> : isLoading ? <SpinnerComponent color={"#00FD3BFF"}/> :

      <>
        <div className="container mx-auto bg-gray-50 py-10 flex flex-col lg:flex-row justify-center pb-24">

          <img src={
            person.profile_path ? getPosterPath("h632", person.profile_path) : PERSON_WITHOUT_IMAGE_BIG
          }
               className="rounded-full shadow-lg border-2 border-black mt-6 mx-auto lg:mx-5"
               style={{
                 width: "421px",
                 height: "632px"
               }} alt={person.name}/>

          <div className="px-5">
            <h1 className="text-3xl text-center font-bold uppercase mb-5 mt-12 lg:mt-0">
              {person.name}
            </h1>
            <PersonIconComponent text={person.known_for_department}
                                 faIcon={faCircle}
                                 color={"text-blue-900"}/>
            <PersonIconComponent text={person.adult}
                                 faIcon={faExclamationTriangle}
                                 color={"text-red-500"}/>
            <PersonIconComponent text={person.birthday}
                                 faIcon={faBirthdayCake}
                                 color={"text-green-900"}/>
            <PersonIconComponent text={person.place_of_birth}
                                 faIcon={faMapMarker}
                                 color={"text-yellow-500"}/>
            <PersonIconComponent text={person.deathday}
                                 faIcon={faSkullCrossbones}
                                 color={"text-red-900"}/>

            <PersonInfoDescriptionComponent person={person}/>
          </div>
        </div>

        <div className="container bg-gray-50 mx-auto py-10">
          <CatalogueGridComponent elements={filterDuplicatedElements(movies)}
                                  isLoading={false}
                                  currentPage={0}
                                  totalPages={0}
                                  title={`Popular Movies from ${person.name}`}
                                  elementType="movies"/>

          <CatalogueGridComponent elements={filterDuplicatedElements(shows)}
                                  isLoading={false}
                                  currentPage={0}
                                  totalPages={0}
                                  title={`Popular TV Shows from ${person.name}`}
                                  elementType="tv"/>
        </div>
      </>
  )
}

PersonDescriptionComponent.prototype = {
  person: PropTypes.object,
  isLoading: PropTypes.bool,
  hasErrors: PropTypes.bool
}
