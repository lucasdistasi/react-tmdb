import {NavbarComponent} from "../components/page/NavbarComponent";
import {FooterComponent} from "../components/page/FooterComponent";
import {CatalogueGridComponent} from "../components/common/CatalogueGridComponent";
import {filterDuplicatedElements, getShowByPage} from "../constants/constants";
import {POPULAR_SHOWS} from "../constants/constants";
import {ErrorComponent} from "../components/page/ErrorComponent";
import {BackToTopComponent} from "../components/common/BackToTopComponent";
import {useShowsGridFetch} from "../hooks/search/useShowsGridFetch";

export const ShowsPage = () => {

  const [{shows, loading, _error}, fetchData] = useShowsGridFetch(POPULAR_SHOWS)

  const loadMoreFunction = () => {
    fetchData(getShowByPage(shows.currentPage))
  }

  return (
    <>
      <NavbarComponent/>
      {
        _error ? <ErrorComponent/> :
          <CatalogueGridComponent elements={filterDuplicatedElements(shows.elements)}
                                  loadMoreFunction={loadMoreFunction}
                                  isLoading={loading}
                                  currentPage={shows.currentPage}
                                  totalPages={shows.totalPages}
                                  title="Popular Shows"
                                  elementType="shows"/>
      }
      <BackToTopComponent/>
      <FooterComponent/>
    </>
  )
}
