import {useMovieGridFetch} from "../hooks/useMovieGridFetch"

export const LoadMoreButtonComponent = ({callback}) => {

  return (
    <button className="flex mx-auto shadow border-blue-500 border-2 rounded-full px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white my-20"
            onClick={callback}>
      Load More
    </button>
  )
}
