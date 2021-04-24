import {NavbarComponent} from "../components/page/NavbarComponent";
import {HeroComponent} from "../components/page/HeroComponent";
import {CatalogueGridComponent} from "../components/common/CatalogueGridComponent";
import {FooterComponent} from "../components/page/FooterComponent";
import {ErrorComponent} from "../components/page/ErrorComponent";
import {useElementGridFetch} from "../hooks/common/useElementGridFetch"
import {getMovieByPage} from "../constants/constants";
import {POPULAR_MOVIES} from "../constants/constants";
import {filterDuplicatedElements} from "../constants/constants";

export const HomePage = () => {

  const [{state, loading, _error}, fetchData] = useElementGridFetch(POPULAR_MOVIES)

  const loadMoreMovies = () => {
    fetchData(getMovieByPage(state.currentPage))
  }

  return (
    <>
      <NavbarComponent/>
      {
        _error ? <ErrorComponent/> :
          <>
            <HeroComponent/>
            <CatalogueGridComponent elements={filterDuplicatedElements(state.elements)}
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
