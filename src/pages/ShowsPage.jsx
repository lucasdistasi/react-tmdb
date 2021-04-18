import {NavbarComponent} from "../components/NavbarComponent";
import {FooterComponent} from "../components/FooterComponent";
import {CatalogueGrid} from "../components/common/CatalogueGrid";
import {useElementGridFetch} from "../hooks/common/useElementGridFetch";
import {getShowByPage} from "../constants/constants";
import {POPULAR_SHOWS} from "../constants/constants";

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
      <CatalogueGrid elements={shows}
                     loadMoreFunction={loadMoreFunction}
                     isLoading={loading}
                     currentPage={state.currentPage}
                     totalPages={state.totalPages}
                     title="Popular Shows"
                     elementType="shows"/>
      <FooterComponent/>
    </>
  )
}
