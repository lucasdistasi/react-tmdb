import {useMovieGridFetch} from "../hooks/useMovieGridFetch"

let page = 2;

export const LoadMoreButtonComponent = () => {

  const [{state, loading, _error}, fetchData] = useMovieGridFetch()

  const loadMoreMovies = () => {
    console.log("fetching...")
    fetchData(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${page}`)
    page += 1;
    console.log(state)
    console.log(state.movies)
  }

  return (
    <button className="flex mx-auto shadow border-blue-500 border-2 rounded-full px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white my-20"
            onClick={() => loadMoreMovies()}>
      Load More
    </button>
  )
}
