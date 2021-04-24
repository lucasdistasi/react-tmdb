import {NavbarComponent} from "../components/page/NavbarComponent";
import {FooterComponent} from "../components/page/FooterComponent";
import {CatalogueGridComponent} from "../components/common/CatalogueGridComponent";
import {useElementGridFetch} from "../hooks/common/useElementGridFetch";
import {getShowByPage} from "../constants/constants";
import {POPULAR_SHOWS} from "../constants/constants";
import {ErrorComponent} from "../components/page/ErrorComponent";
import {BackToTopComponent} from "../components/common/BackToTopComponent";

export const ShowsPage = () => {

  const [{state, loading, _error}, fetchData] = useElementGridFetch(POPULAR_SHOWS)

  const loadMoreFunction = () => {
    fetchData(getShowByPage(state.currentPage))
  }

  let shows = []
  state.elements.forEach(show => {
    shows.push(show)
  })

  return (
    <>
      <NavbarComponent/>
      {
        _error ? <ErrorComponent/> :
          <CatalogueGridComponent elements={shows}
                                  loadMoreFunction={loadMoreFunction}
                                  isLoading={loading}
                                  currentPage={state.currentPage}
                                  totalPages={state.totalPages}
                                  title="Popular Shows"
                                  elementType="shows"/>
      }
      <BackToTopComponent/>
      <FooterComponent/>
    </>
  )
}
