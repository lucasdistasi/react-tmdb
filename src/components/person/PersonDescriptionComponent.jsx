import {getPosterPath} from "../../constants/constants";
import {faBirthdayCake, faMapMarker, faCircle, faSkullCrossbones, faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {PERSON_WITHOUT_IMAGE_BIG} from "../../constants/constants";
import PropTypes from "prop-types";
import {ErrorComponent} from "../page/ErrorComponent";
import {SpinnerComponent} from "../page/SpinnerComponent";

export const PersonDescriptionComponent = ({person, isLoading, hasErrors}) => {

  person && console.log(person)

  return (
    hasErrors ? <ErrorComponent /> : isLoading ? <SpinnerComponent color={"#00FD3BFF"} /> :

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
        {
          person.known_for_department &&
          <div className="flex flex-row my-2">
            <FontAwesomeIcon icon={faCircle} className={"text-blue-900 mr-4 text-xl"}/>
            <p>{person.known_for_department}</p>
          </div>
        }
        {
          person.adult &&
          <div className="flex flex-row my-2">
            <FontAwesomeIcon icon={faExclamationTriangle} className={"text-red-500 mr-4 text-xl"}/>
            <p>Adult Search</p>
          </div>
        }
        {
          person.birthday &&
          <div className="flex flex-row my-2">
            <FontAwesomeIcon icon={faBirthdayCake} className={"text-green-900 mr-4 text-xl"}/>
            <p>{person.birthday}</p>
          </div>
        }
        {
          person.place_of_birth &&
          <div className="flex flex-row my-2">
            <FontAwesomeIcon icon={faMapMarker} className={"text-yellow-500 mr-4 text-xl"}/>
            <p>{person.place_of_birth}</p>
          </div>
        }
        {
          person.deathday &&
          <div className="flex flex-row">
            <FontAwesomeIcon icon={faSkullCrossbones} className={"text-red-900 mr-4 text-xl"}/>
            <p>{person.deathday}</p>
          </div>
        }
        {
          person.biography ?
          <p className="mt-28 text-xl text-center lg:text-justify">
            {person.biography}
          </p> :
            <p className="mt-28 text-xl text-center lg:text-justify">
              No description could be found for {person.name}
            </p>
        }
      </div>
    </div>
  )
}

PersonDescriptionComponent.prototype = {
  person: PropTypes.object,
  isLoading: PropTypes.bool,
  hasErrors: PropTypes.bool
}
