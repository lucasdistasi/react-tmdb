import {ActorComponent} from "./ActorComponent";
import PropTypes from "prop-types";

export const ActorsGridComponent = ({actors}) => {

  let hasActors = actors.length > 0

  return (
    hasActors &&
    <>
      <h1 className="text-center text-4xl py-6">Popular Actors / Actresses</h1>
      <div className="flex flex-col lg:flex-row lg:flex-wrap items-center lg:justify-center py-5">
        {
          actors.map(actor =>
            <ActorComponent actor={actor} key={actor.name}/>
          )
        }
      </div>
    </>
  )
}

ActorsGridComponent.propTypes = {
  actors: PropTypes.array
}
