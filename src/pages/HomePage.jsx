import {NavbarComponent} from "../components/NavbarComponent";
import {HeroComponent} from "../components/HeroComponent";
import {CatalogueGrid} from "../components/common/CatalogueGrid";
import {FooterComponent} from "../components/FooterComponent";
import {ErrorComponent} from "../components/ErrorComponent";
import {useElementGridFetch} from "../hooks/common/useElementGridFetch"
import {getMovieByPage} from "../constants/constants";
import {POPULAR_MOVIES} from "../constants/constants";

export const HomePage = () => {

  const [{state, loading, _error}, fetchData] = useElementGridFetch(POPULAR_MOVIES)

  const loadMoreMovies = () => {
    fetchData(getMovieByPage(state.currentPage))
  }

  // This is a tweak to remove duplicated movies, beacuse in some cases
  // TMBD might return the same movie in multiple pages
  let movies = state.elements.map(movie => movie.id)
  let filteredMovies = state.elements.filter(({id}, index) => !movies.includes(id, index + 1))

  return (
    <>
      <NavbarComponent/>

      {
        _error ? <ErrorComponent/> :
          <>
            <HeroComponent/>
            <CatalogueGrid elements={filteredMovies}
                           loadMoreFunction={loadMoreMovies}
                           isLoading={loading}
                           currentPage={state.currentPage}
                           totalPages={state.totalPages}
                           title="Popular Movies"
                           elementType="movies"/>
          </>
      }

      <FooterComponent/>
    </>
  )
}
