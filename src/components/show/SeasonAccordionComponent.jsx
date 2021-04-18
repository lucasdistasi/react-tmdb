import {SeasonsTableComponent} from "./SeasonsTableComponent";

export const SeasonAccordionComponent = ({seasons, showId}) => {

  return (
    <div className="container">
      <div className="w-full mx-auto p-8">
        <div className="shadow-md">

          {
            // season 0 usually means specials episodes.
            // We are going to display only the 'original' ones

            seasons.filter(season => season.season_number > 0).map(season => {
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
      </div>
    </div>
  )
}
