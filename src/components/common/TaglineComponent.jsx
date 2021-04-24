import PropTypes from "prop-types";

export const TaglineComponent = ({tagline}) => {

  return (
    tagline ?
      <p className="italic py-6">
        {tagline}
      </p> : null
  )
}

TaglineComponent.prototype = {
  tagline: PropTypes.string
}
