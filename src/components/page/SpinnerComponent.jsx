import PropTypes from "prop-types";

export const SpinnerComponent = ({color = "#1E90FFFF"}) => {

  return (
    <div className="mx-auto loader ease-linear rounded-full border-2 my-10 border-t-8 h-32 w-32"
    style={{
      borderTopColor: color
    }}/>
  )
}

SpinnerComponent.prototype = {
  color: PropTypes.string
}
