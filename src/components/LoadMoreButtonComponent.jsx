import PropTypes from "prop-types"

export const LoadMoreButtonComponent = ({callback}) => {

  return (
    <button className="flex mx-auto shadow border-blue-900 border-2 rounded-full px-4 py-2 text-blue-500 hover_tmdb-blue hover:text-white my-20"
            onClick={callback}>
      Load More
    </button>
  )
}

LoadMoreButtonComponent.prototype = {
  callback: PropTypes.func
}
