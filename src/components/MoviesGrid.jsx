import {MovieCardComponent} from "./MovieCardComponent";
import {SpinnerComponent} from "./SpinnerComponent";
import {useMovieGridFetch} from "../hooks/useMovieGridFetch"
import {LoadMoreButtonComponent} from "./LoadMoreButtonComponent";

export const MoviesGrid = () => {

  const [{state, loading, _error}, fetchData] = useMovieGridFetch()

  return (
    <>
      <h1 className="text-center font-sans text-5xl font-semibold my-8">Popular Movies</h1>
      <div className="mx-auto flex justify-center flex-wrap mb-12 animate__animated animate__fadeIn">
        {
          loading && <SpinnerComponent />
        }
        {
          state.movies.map(movie => {
            return <MovieCardComponent movies={movie} key={movie.id} />
          })
        }
      </div>
      < LoadMoreButtonComponent />
    </>
  )
}
