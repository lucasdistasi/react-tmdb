import {MovieCardComponent} from "./MovieCardComponent";
import {SpinnerComponent} from "./SpinnerComponent";
import {LoadMoreButtonComponent} from "./LoadMoreButtonComponent";

export const MoviesGrid = ({movies, loadMoreFunction, isLoading, currentPage, totalPages, title}) => {

  return (
    <>
      {
        movies.length > 0 && <h1 className="text-center font-sans text-5xl font-semibold my-8">{title}</h1>
      }
      <div className="mx-auto flex justify-center flex-wrap mb-12 animate__animated animate__fadeIn">
        {
          movies.map(movie => {
            return <MovieCardComponent movie={movie} key={movie.id} />
          })
        }
      </div>
      {
        isLoading && <SpinnerComponent />
      }
      {
        currentPage < totalPages && !isLoading && loadMoreFunction && (
          <LoadMoreButtonComponent callback={loadMoreFunction} />
        )
      }
    </>
  )
}
