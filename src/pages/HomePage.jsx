import {NavbarComponent} from "../components/page/NavbarComponent";
import {HeroComponent} from "../components/page/HeroComponent";
import {CatalogueGridComponent} from "../components/common/CatalogueGridComponent";
import {FooterComponent} from "../components/page/FooterComponent";
import {ErrorComponent} from "../components/page/ErrorComponent";
import {useMoviesGridFetch} from "../hooks/movie/useMoviesGridFetch"
import {getMovieByPage} from "../constants/constants";
import {POPULAR_MOVIES} from "../constants/constants";
import {filterDuplicatedElements} from "../constants/constants";
import {BackToTopComponent} from "../components/common/BackToTopComponent";

export const HomePage = () => {

  const [{movies, loading, _error}, fetchData] = useMoviesGridFetch(POPULAR_MOVIES)

  const loadMoreMovies = () => {
    fetchData(getMovieByPage(movies.currentPage))
  }

  return (
    <>
      <NavbarComponent/>
      {
        _error ? <ErrorComponent/> :
          <>
            <HeroComponent/>
            <CatalogueGridComponent elements={filterDuplicatedElements(movies.elements)}
                                    loadMoreFunction={loadMoreMovies}
                                    isLoading={loading}
                                    currentPage={movies.currentPage}
                                    totalPages={movies.totalPages}
                                    title="Popular Movies"
                                    elementType="movies"/>
          </>
      }
      <BackToTopComponent/>
      <FooterComponent/>
    </>
  )
}
