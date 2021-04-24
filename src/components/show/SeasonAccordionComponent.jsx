import {SeasonsTableComponent} from "./SeasonsTableComponent";
import {MoreSeasonsComponent} from "./MoreSeasonsComponent";
import PropTypes from "prop-types";

export const SeasonAccordionComponent = ({seasons, showId, originalPoster}) => {

  // season 0 usually means specials episodes.
  // We are going to display only the 'original' ones
  // and the ones with at least 1 episode
  const nonSpecialSeason = seasons.filter(season => season.season_number > 0)
  const seasonsWithEpisodes = nonSpecialSeason.filter(season => season.episode_count > 0)
  const incomingSeasons = seasons.filter(season => season.episode_count === 0)

  return (
    <div className="container">
      <div className="w-full mx-auto p-8">
        <div className="shadow-md">
          {
            seasonsWithEpisodes.map(season => {
              return (
                <div className="tab w-full overflow-hidden border-t" key={season.id}>
                  <input className="absolute opacity-0" id={season.id} type="checkbox" name="tabs"/>
                  <label className="block p-5 leading-normal cursor-pointer"
                         htmlFor={season.id}
                         onClick={() => console.log("fetch data from season ...")}>
                    {season.name}
                  </label>
                  <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                    <SeasonsTableComponent season={season} showId={showId}/>
                  </div>
                </div>
              )
            })
          }
        </div>
        {
          nonSpecialSeason.length - seasonsWithEpisodes.length > 0 &&
          <MoreSeasonsComponent incomingSeasons={incomingSeasons} originalPoster={originalPoster} />
        }
      </div>
    </div>
  )
}

SeasonAccordionComponent.propTypes = {
  seasons: PropTypes.array,
  showId: PropTypes.string,
  originalPoster: PropTypes.string
}
