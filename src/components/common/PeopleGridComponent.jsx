import {SpinnerComponent} from "../page/SpinnerComponent";
import {LoadMoreButtonComponent} from "../page/LoadMoreButtonComponent";
import {PersonComponent} from "./PersonComponent";

export const PeopleGridComponent = ({people, title, loadMoreFunction, isLoading, currentPage, totalPages}) => {

  let hasPeople = people && people.length > 0

  return (
    hasPeople ?
    <>
      <h1 className="text-center text-4xl py-6 mt-10">
        {title}
      </h1>
      <div className="flex flex-col lg:flex-row lg:flex-wrap items-center lg:justify-center py-5">
        {
          isLoading && <SpinnerComponent/>
        }
        {
          people.map(person =>
            <PersonComponent person={person} />
          )
        }
      </div>
      {
        currentPage < totalPages && !isLoading && loadMoreFunction &&
        <LoadMoreButtonComponent callback={loadMoreFunction}/>
      }
    </> : null
  )
}
