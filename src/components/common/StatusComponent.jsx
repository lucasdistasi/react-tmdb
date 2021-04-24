import PropTypes from "prop-types";

export const StatusComponent = ({status}) => {

  return (
    status ?
      <div className="mt-10 text-center">
        <p className="font-mono text-lg font-semibold text-gray-700">Status</p>
        {
          <p className="italic">{status}</p>
        }
      </div> : null
  )
}

StatusComponent.prototype = {
  status: PropTypes.string
}
