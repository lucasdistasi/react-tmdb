import {getProfilePictureUrl} from "../../constants/constants";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ReviewComponent = ({review}) => {

  const {avatar_path, rating} = review.author_details

  return (
    <div className="bg-white w-full shadow-lg mx-auto rounded-xl p-4 my-6">
      <div className="text-center flex flex-row justify-center items-center text-3xl mb-4">
        {
          rating &&
          <>
            <p className="mr-2 font-bold">{rating}</p>
            <FontAwesomeIcon icon={faStar} className="text-yellow-400 mb-1"/>
          </>
        }
      </div>
      <p className="text-gray-600 dark:text-white italic">
        {
          review.content
        }
      </p>
      <div className="flex items-center mt-4">
        <div className="block relative">
          <img alt="profile"
               src={getProfilePictureUrl(avatar_path)}
               className="mx-auto object-cover rounded-full h-10 w-10"/>
        </div>
        <div className="flex flex-col ml-2 justify-between">
          <span className="font-semibold text-indigo-500 text-sm">
            {
              review.author
            }
          </span>
        </div>
      </div>
    </div>
  )
}
