import PropTypes from "prop-types"
import {getPosterPath} from "../../constants/constants";

export const DirectorComponent = ({director}) => {

  return (
    <div className="text-center my-5 mx-5 border-2 border-green-500 rounded-2xl">
      <img src={getPosterPath("w185", director.profile_path || director.logo_path)}
           className="rounded-t-2xl mx-auto"
           alt={director.name}/>
      <div className="tmdb-light-green rounded-b-2xl shadow-lg" style={{width: "185px"}}>
        <p className="py-4 px-4 break-words">
          {director.name}
        </p>
      </div>
    </div>
  )
}

DirectorComponent.prototype = {
  director: PropTypes.object
}
