import {ActorComponent} from "./ActorComponent";

export const ActorsGridComponent = ({actors}) => {

  return (
    actors.map(actor =>
      <ActorComponent actor={actor} />
    )
  )
}
