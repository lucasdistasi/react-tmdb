import {InputNameComponent} from "./elements/InputNameComponent";
import {DropdownCriteriaComponent} from "./elements/DropdownCriteriaComponent";
import {RadioButtonAdultSearchComponent} from "./elements/RadioButtonAdultSearchComponent";
import {SearchButtonComponent} from "./elements/SearchButtonComponent";
import {useSearchFetch} from "../../hooks/search/useSearchFetch";
import {useState} from "react";
import Swal from "sweetalert2";
import {search, searchByPage} from "../../constants/constants";
import {SearchResultsComponent} from "./elements/SearchResultsComponent";

export const SearchFormComponent = () => {

  // We need to save in the state if the user has made at least 1 search
  // in order to display the NoResultsComponent.
  // Without this, the component will be displayed when the page renders
  const [didSearch, setDidSearch] = useState(false)
  const [searchCriteria, setSearchCriteria] = useState()
  const [{data, _error, loading}, fetchData] = useSearchFetch()

  const fetchSearchData = (isSearchLoadMore) => {
    let name = document.getElementById("input-name").value
    let chosenCriteria = document.getElementById("dropdown-criteria").value
    let isAdultSearch = document.getElementById("adult-only").checked || false

    if (isNameValid(name) && isChosenCriteriaValid(chosenCriteria) && !isSearchLoadMore) {
      setDidSearch(true)
      const URI = search(isAdultSearch, chosenCriteria, name)
      fetchData(URI, isSearchLoadMore)
      setSearchCriteria(chosenCriteria)
    }

    if (isSearchLoadMore) {
      const URI = searchByPage(isAdultSearch, chosenCriteria, name, data.currentPage)
      fetchData(URI, isSearchLoadMore)
    }
  }

  function isNameValid(name) {
    if (!/^[A-Za-z0-9\s]{2,40}$/.test(name)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid name',
        text: 'Name must have between 2 and 40 characters. Only letters and numbers are allowed'
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

      <SearchResultsComponent
        _error={_error}
        loading={loading}
        data={data}
        didSearch={didSearch}
        searchCriteria={searchCriteria}
        callback={() => fetchSearchData(true)}/>

    </div>
  )
}
