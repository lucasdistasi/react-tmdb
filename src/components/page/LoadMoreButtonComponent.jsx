import PropTypes from "prop-types"

export const LoadMoreButtonComponent = ({callback}) => {

  return (
    <div className="pb-24">
      <button className="flex mx-auto shadow border-blue-900 border-2 rounded-full px-4 py-2 text-blue-500 hover_tmdb-blue hover:text-white"
              onClick={callback}>
        Load More
      </button>
    </div>
  )
}

LoadMoreButtonComponent.prototype = {
  callback: PropTypes.func
}
