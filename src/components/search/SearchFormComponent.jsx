import {InputNameComponent} from "./elements/InputNameComponent";
import {DropdownCriteriaComponent} from "./elements/DropdownCriteriaComponent";
import {RadioButtonAdultSearchComponent} from "./elements/RadioButtonAdultSearchComponent";
import {SearchButtonComponent} from "./elements/SearchButtonComponent";
import {useSearchFetch} from "../../hooks/search/useSearchFetch";
import {useState} from "react";
import Swal from "sweetalert2";
import {ErrorComponent} from "../page/ErrorComponent";
import {NoResultsComponent} from "./NoResultsComponent";
import {CatalogueGrid} from "../common/CatalogueGrid";
import {search, searchByPage} from "../../constants/constants";
import {DirectorComponent} from "../common/DirectorComponent";
import {DirectorsGridComponent} from "../common/DirectorsGridComponent";

export const SearchFormComponent = () => {

  /*
      TODO
       - Add link to each element. (fixed)
       - Add load more button for actors.
       - Test if NoResultsComponent it's being displayed properly.
       - Test the search functionality.
       - If there are no genres, do not display the title (http://localhost:3000/movies/350632)
       - Add a custom poster image if no image is displayed (http://localhost:3000/movies/350632)
   */

  const [didSearch, setDidSearch] = useState(false)
  const [searchCriteria, setSearchCriteria] = useState()
  const [{data, _error, loading}, fetchData] = useSearchFetch()

  let searchResults = []

  const fetchSearchData = (isSearchLoadMore) => {
    let name = document.getElementById("input-name").value
    let chosenCriteria = document.getElementById("dropdown-criteria").value
    let isAdultSearch = document.getElementById("adult-only").checked || false

    if (isNameValid(name) && isChosenCriteriaValid(chosenCriteria) && !isSearchLoadMore) {
      //console.log("fetching data...")
      setDidSearch(true)
      const URI = search(isAdultSearch, chosenCriteria, name)
      fetchData(URI, isSearchLoadMore)
      setSearchCriteria(chosenCriteria)
    }

    if (isSearchLoadMore) {
      //console.log("fetching more pages...")
      //console.log("name >>> " + name)
      //console.log("chosenCriteria >>> " + chosenCriteria)
      //console.log("isAdultSearch >>> " + isAdultSearch)
      const URI = searchByPage(isAdultSearch, chosenCriteria, name, data.currentPage)
      fetchData(URI, isSearchLoadMore)
    }
  }

  function isNameValid(name) {
    if (!/^[A-Za-z0-9\s]{2,20}$/.test(name)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid name',
        text: 'Name must have between 2 and 20 characters. Only letters and numbers are allowed'
      })
      return false
    }

    return true
  }

  function isChosenCriteriaValid(criteria) {
    if (criteria !== "movie" &&
      criteria !== "tv" &&
      criteria !== "person") {
      Swal.fire({
        icon: 'error',
        title: 'Invalid criteria',
        text: 'You must select a valid criteria'
      })
      return false
    }

    return true
  }

  return (
    <div className="container mx-auto py-20">
      <div className="bg-gray-50 rounded-lg shadow w-1/2 mx-auto">
        <div className="px-4 py-8 sm:px-10">
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300">
              </div>
            </div>
            <div className="relative flex justify-center text-sm leading-5">
            <span className="px-2 text-black bg-gray-50">
                Search criteria
            </span>
            </div>
          </div>
          <div className="mt-6">
            <div className="w-full space-y-6">
              <InputNameComponent/>
              <DropdownCriteriaComponent/>
              <RadioButtonAdultSearchComponent/>
              <SearchButtonComponent callback={() => fetchSearchData(false)}/>
            </div>
          </div>
        </div>
      </div>
      {
        _error.hasError && <ErrorComponent/>
      }
      {
        didSearch && data && data.elements && data.elements.length <= 0 && <NoResultsComponent />
      }
      {
        data && data.elements && data.elements.forEach(elements => elements.forEach(element => searchResults.push(element)))
      }
      {
        searchCriteria && console.log(searchCriteria)
      }
      {
        didSearch && searchResults && searchResults.length > 0 &&
        searchCriteria === "person" ?
          <DirectorsGridComponent directors={searchResults} title={"Search results"} /> :
          <CatalogueGrid
            elements={searchResults}
            loadMoreFunction={() => fetchSearchData(true)}
            isLoading={loading}
            currentPage={data.currentPage}
            totalPages={data.totalPages}
            title={"Search results"}
            elementType={searchCriteria === "tv" ? "shows" : "movies"}/>
      }
    </div>
  )
}
