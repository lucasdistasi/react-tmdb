import {ReviewComponent} from "./ReviewComponent";
import {ErrorComponent} from "../page/ErrorComponent";
import {SpinnerComponent} from "../page/SpinnerComponent";
import PropTypes from "prop-types";

export const ReviewsGridComponent = ({reviews, isLoading, hasErrors}) => {

  let hasReviews = reviews && reviews.length > 0

  return (
    hasErrors ? <ErrorComponent /> : isLoading ? <SpinnerComponent color={"#A309C9FF"} /> :

    hasReviews ?
    <div className="w-full flex flex-wrap flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8">
      <h1 className="text-center text-4xl py-6 mt-5 mx-auto">
        Users Reviews
      </h1>

      {
        reviews.map(review => {
          return <ReviewComponent review={review} key={review.id} />
        })
      }
    </div> : null
  )
}

ReviewComponent.propTypes = {
  reviews: PropTypes.array,
  isLoading: PropTypes.bool,
  hasErrors: PropTypes.bool
}
