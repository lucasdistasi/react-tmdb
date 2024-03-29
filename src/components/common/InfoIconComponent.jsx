import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types"

export const InfoIconComponent = ({info, icon, color, title}) => {

  return (
    <div className="flex flex-col items-center text-center text-center my-5 ">
      <FontAwesomeIcon icon={icon} className={`${color} text-5xl mb-3`}/>
      <p>{title}</p>
      <p className="text-3xl">
        {
          title.includes("Budget") || title.includes("Revenue") ?
            info === "$0" ? "unkown" : info :
            info || "unkown"
        }
      </p>
    </div>
  )
}

InfoIconComponent.prototype = {
  info: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string
}
