import {DirectorComponent} from "./DirectorComponent";

export const DirectorsGridComponent = ({directors}) => {

  return (
    directors.map(director =>
      <DirectorComponent director={director} />
    )
  )
}
