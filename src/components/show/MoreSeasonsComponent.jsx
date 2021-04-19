import {getPosterPath} from "../../constants/constants";

export const MoreSeasonsComponent = ({incomingSeasons, originalPoster}) => {

  return (
    <section className="bg-white mt-20 shadow-lg border-8 rounded-lg tmdb-light-green-border">
      <div className="container px-6 py-8 mx-auto">
        <div className="items-center lg:flex">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 uppercase">Yaaay! New Seasons are coming!</h2>
            <ul className="list-disc ml-4">
              {
                incomingSeasons.map(season => {
                  return (
                    <li className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md" key={season.name}>
                      {season.name}
                      <ul className="list-disc ml-4">
                        <li>
                          Air Date: {season.air_date || "TBD"}
                        </li>
                      </ul>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="flex items-center justify-center lg:justify-end">
              <div className="max-w-lg">
                <img className="object-cover object-center w-full h-64 rounded-2xl"
                     src={
                       incomingSeasons[0].poster_path ?
                         getPosterPath(incomingSeasons[0].poster_path) :
                         getPosterPath("w780", originalPoster)
                     }
                     alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
