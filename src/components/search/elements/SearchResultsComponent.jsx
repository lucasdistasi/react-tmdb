import {ErrorComponent} from "../../page/ErrorComponent";
import {PeopleGridComponent} from "../../common/PeopleGridComponent";
import {filterDuplicatedElements} from "../../../constants/constants";
import {CatalogueGridComponent} from "../../common/CatalogueGridComponent";
import {NoResultsComponent} from "../NoResultsComponent";
import PropTypes from "prop-types";

export const SearchResultsComponent = ({_error, loading, data, didSearch, searchCriteria, callback}) => {

  let searchResults = []

  return (
    data && data.elements && data.elements.length > 0 ?
    <>
      {
        _error.hasError && <ErrorComponent/>
      }
      {
        data && data.elements && data.elements.forEach(elements => elements.forEach(element => searchResults.push(element)))
      }
      {
        didSearch && searchResults && searchResults.length > 0 &&
        searchCriteria === "person" ?

          <PeopleGridComponent
            people={filterDuplicatedElements(searchResults)}
            title={"Search results"}
            loadMoreFunction={() => callback()}
            isLoading={loading}
            currentPage={data.currentPage}
            totalPages={data.totalPages}/> :

          <CatalogueGridComponent
            elements={filterDuplicatedElements(searchResults)}
            loadMoreFunction={() => callback()}
            isLoading={loading}
            currentPage={data.currentPage}
            totalPages={data.totalPages}
            title={"Search results"}
            elementType={searchCriteria === "tv" ? "shows" : "movies"}/>
      }
      {
        didSearch && searchResults && searchResults.length <= 0 && <NoResultsComponent/>
      }
    </> : null
  )
}

SearchResultsComponent.propTypes = {
  _error: PropTypes.object,
  loading: PropTypes.bool,
  data: PropTypes.object,
  didSearch: PropTypes.bool,
  searchCriteria: PropTypes.string,
  callback: PropTypes.func
}
