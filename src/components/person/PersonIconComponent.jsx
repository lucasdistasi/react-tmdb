import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export const PersonIconComponent = ({text, faIcon, color}) => {

  return (
    text ?
    <div className="flex flex-row my-2">
      <FontAwesomeIcon icon={faIcon} className={`${color} mr-4 text-xl`}/>
      <p>{text}</p>
    </div> : null
  )
}

PersonIconComponent.prototype = {
  text: PropTypes.string,
  faIcon: PropTypes.object,
  color: PropTypes.string
}
