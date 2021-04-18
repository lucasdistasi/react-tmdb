export const GenreComponent = ({genres}) => {

  return (
    genres ?
      <div className="mt-10 text-center">
        <p className="font-mono text-lg font-semibold text-gray-700">Genres</p>
        {
          genres && genres.map(genre =>
            <p className="italic" key={genre.name}>{genre.name}</p>)
        }
      </div> : null
  )
}
