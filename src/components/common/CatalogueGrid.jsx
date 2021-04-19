import {ElementCardComponent} from "./ElementCardComponent";
import {SpinnerComponent} from "../page/SpinnerComponent";
import {LoadMoreButtonComponent} from "../page/LoadMoreButtonComponent";

export const CatalogueGrid = ({elements, loadMoreFunction, isLoading, currentPage, totalPages, title, elementType}) => {

  return (
    <>
      {
        elements.length > 0 &&
        <h1 className="text-center font-sans text-5xl font-semibold my-8">{title}</h1>
      }
      <div className="mx-auto flex justify-center flex-wrap mb-12 animate__animated animate__fadeIn">
        {
          elements.map(movie => {
            return <ElementCardComponent movie={movie} elementType={elementType} key={movie.id}/>
          })
        }
      </div>
      {
        isLoading && <SpinnerComponent/>
      }
      {
        currentPage < totalPages && !isLoading && loadMoreFunction &&
        <LoadMoreButtonComponent callback={loadMoreFunction}/>
      }
    </>
  )
}