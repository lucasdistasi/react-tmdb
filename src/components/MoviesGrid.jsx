import {MovieCardComponent} from "./MovieCardComponent";
import {SpinnerComponent} from "./SpinnerComponent";
import {useMovieGridFetch} from "../hooks/useMovieGridFetch"
import {LoadMoreButtonComponent} from "./LoadMoreButtonComponent";

export const MoviesGrid = () => {

  const [{state, loading}, fetchData] = useMovieGridFetch()

  const loadMoreMovies = () => {
    fetchData(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${state.currentPage + 1}`)
  }

  let movies = []
  state.movies.forEach(movie => {
    movies.push(movie)
  })

  return (
    <>
      <h1 className="text-center font-sans text-5xl font-semibold my-8">Popular Movies</h1>
      <div className="mx-auto flex justify-center flex-wrap mb-12 animate__animated animate__fadeIn">
        {
          movies.map(movie => {
            return <MovieCardComponent movie={movie} key={movie.id} />
          })
        }
      </div>
      {
        loading && <SpinnerComponent />
      }
      {
        state.currentPage < state.totalPages && !loading && (
          <LoadMoreButtonComponent callback={loadMoreMovies} />
        )
      }
    </>
  )
}
