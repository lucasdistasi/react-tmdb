import {ShowEpisodeRowComponent} from "./ShowEpisodeRowComponent";
import {useShowEpisodeFetch} from "../../hooks/show/useShowEpisodeFetch";

export const SeasonsTableComponent = ({season, showId}) => {

  let seasonNumber = season.season_number
  console.log("season >>> " + seasonNumber + " showId >>> " + showId)

  const [episodes, _error] = useShowEpisodeFetch({showId, seasonNumber})

  return (
    <>
      <hr/>
      <div className="container mx-auto px-10 pb-20 mt-6">
        <h1 className="text-center py-8 text-3xl font-semibold text-gray-800">
          {season.name}
        </h1>
        {
          season.overview &&
          <p className="text-center py-8 italic">
            {season.overview}
          </p>
        }
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                  <tr>
                    <th scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Episode
                    </th>
                    <th scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider break-all w-2/5">
                      Title
                    </th>
                    <th scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Air Date
                    </th>
                    <th scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vote Average
                    </th>
                  </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">


                  {
                    episodes.length > 0 &&
                    episodes.map((episode, seasonNumber) => {
                      return <ShowEpisodeRowComponent
                        key={seasonNumber}
                        episodeNumber={episode.episode_number}
                        episodeName={episode.name}
                        airDate={episode.air_date}
                        voteAverage={episode.vote_average} />
                    })
                  }


                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
