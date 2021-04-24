import {ElementCardComponent} from "./ElementCardComponent";
import {SpinnerComponent} from "../page/SpinnerComponent";
import {LoadMoreButtonComponent} from "../page/LoadMoreButtonComponent";
import PropTypes from "prop-types";

export const CatalogueGridComponent = ({elements, loadMoreFunction, isLoading, currentPage, totalPages, title, elementType}) => {

  return (
    isLoading ? <SpinnerComponent color={"#1F9005FF"}/> :
    <>
      {
        elements.length > 0 &&
        <h1 className="text-center font-sans text-4xl my-8">{title}</h1>
      }
      <div className="mx-auto flex justify-center flex-wrap pb-12 animate__animated animate__fadeIn">
        {
          elements.map(element => {
            return <ElementCardComponent element={element} elementType={elementType} key={element.id}/>
          })
        }
      </div>
      {
        currentPage < totalPages && !isLoading && loadMoreFunction &&
        <LoadMoreButtonComponent callback={loadMoreFunction}/>
      }
    </>
  )
}

CatalogueGridComponent.prototype = {
  elements: PropTypes.array,
  loadMoreFunction: PropTypes.func,
  isLoading: PropTypes.bool,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  title: PropTypes.string,
  elementType: PropTypes.string
}
