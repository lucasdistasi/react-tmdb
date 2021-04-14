import {ActorComponent} from "./ActorComponent";
import PropTypes from "prop-types";

export const ActorsGridComponent = ({actors}) => {

  return (
    actors.map(actor =>
      <ActorComponent actor={actor} key={actor.name}/>
    )
  )
}

ActorsGridComponent.propTypes = {
  actors: PropTypes.array
}
