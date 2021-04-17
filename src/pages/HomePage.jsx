import {NavbarComponent} from "../components/NavbarComponent";
import {HeroComponent} from "../components/HeroComponent";
import {MoviesGrid} from "../components/MoviesGrid";
import {FooterComponent} from "../components/FooterComponent";
import {ErrorComponent} from "../components/ErrorComponent";
import {useMovieGridFetch} from "../hooks/useMovieGridFetch"
import {getMovieByPage} from "../constants/constants";

export const HomePage = () => {

  const [{state, loading, _error}, fetchData] = useMovieGridFetch()

  const loadMoreMovies = () => {
    fetchData(getMovieByPage(state.currentPage))
  }

  let movies = []
  state.movies.forEach(movie => {
    movies.push(movie)
  })

  return (
    <>
      <NavbarComponent/>

      {
        _error ? <ErrorComponent/> :
          <>
            <HeroComponent/>
            <MoviesGrid movies={movies}
                        loadMoreFunction={loadMoreMovies}
                        isLoading={loading}
                        currentPage={state.currentPage}
                        totalPages={state.totalPages}
                        title="Popular Movies"/>
          </>
      }

      <FooterComponent/>
    </>
  )
}
