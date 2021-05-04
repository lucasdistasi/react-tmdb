import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export const GenresGridComponent = ({title, elements, additionalClass, type}) => {

  return (
    <>
      <h1 className="text-center pt-20 text-3xl font-bold">{title}</h1>
      <div className="flex flex-row flex-wrap justify-center py-14">
        {
          elements && elements.map(genre => {
            return (
              <Link to={`${type}/genres/${genre.id}`}
                    className={`h-36 w-full lg:w-4/12 mx-4 my-4 genre-card ${additionalClass} flex justify-center rounded-xl`}
                    key={genre.id}>
                <div className="my-auto">
                  <p className="text-white uppercase font-bold text-2xl">
                    {genre.name}
                  </p>
                  <span></span>
                </div>
              </Link>
            )
          })
        }
      </div>
    </>
  )
}

GenresGridComponent.propTypes = {
  title: PropTypes.string,
  elements: PropTypes.array,
  additionalClass: PropTypes.string,
  type: PropTypes.string
}
