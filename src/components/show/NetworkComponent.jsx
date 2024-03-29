import {getPosterPath} from "../../constants/constants";
import PropTypes from "prop-types";

export const NetworkComponent = ({network}) => {

  return (
    <div className="my-5 mx-5 border-2 border-indigo-500 w-44 h-44 shadow-lg flex justify-center rounded-2xl">
      {
        network.logo_path ?
          <img src={getPosterPath("w92", network.logo_path)}
               className="text-center mx-auto my-auto"
               alt={network.name}/> :
          <p className="mx-auto my-auto text-center">
            {network.name}
          </p>
      }
    </div>
  )
}

NetworkComponent.propType = {
  network: PropTypes.object
}
