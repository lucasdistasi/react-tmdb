import PropTypes from "prop-types";

export const GenreComponent = ({genres}) => {

  return (
    genres && genres.length > 0 ?
      <div className="mt-10 text-center">
        <p className="font-mono text-lg font-semibold text-gray-700">Genres</p>
        {
          genres && genres.map(genre =>
            <p className="italic" key={genre.name}>{genre.name}</p>)
        }
      </div> : null
  )
}

GenreComponent.prototype = {
  genres: PropTypes.string
}
