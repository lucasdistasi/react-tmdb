import PropTypes from "prop-types";

export const SearchButtonComponent = ({callback}) => {

  return (
    <div>
      <span className="block w-full rounded-md shadow-sm">
        <button type="button"
                className="py-2 px-4 tmdb-blue-alt hover_tmdb-blue-alt focus:ring-indigo-500 focus:ring-offset-indigo-200
                  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md
                  focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                onClick={() => callback()}>
            Search
        </button>
      </span>
    </div>
  )
}

SearchButtonComponent.prototype = {
  callback: PropTypes.func
}
