import {getPosterPath, PERSON_WITHOUT_IMAGE} from "../../constants/constants";

export const PersonComponent = ({person}) => {

  // TODO - CHECK IF I STILL NEED THE LOGO_PATH

  return (
    <div className="text-center my-5 mx-5 border-2 border-green-500 rounded-2xl">
      <img src={person.profile_path || person.logo_path ?
        getPosterPath("w185", person.profile_path || person.logo_path) :
        PERSON_WITHOUT_IMAGE}
           className="rounded-t-2xl mx-auto"
           alt={person.name}/>
      <div className="tmdb-light-green rounded-b-2xl shadow-lg" style={{width: "185px"}}>
        <p className="py-4 px-4 break-words">
          {person.name}
        </p>
      </div>
    </div>
  )
}
