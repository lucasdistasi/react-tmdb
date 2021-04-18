import {DirectorComponent} from "./DirectorComponent";

export const DirectorsGridComponent = ({directors, title}) => {

  const hasDirectors = directors && directors.length > 0

  return (
    hasDirectors ?
    <>
      <h1 className="text-center text-4xl py-6">
        {title}
      </h1>
      <div className="flex flex-col lg:flex-row lg:flex-wrap items-center lg:justify-center py-5">
        {
          directors.map(director =>
            (director.profile_path || director.logo_path) &&
            <DirectorComponent director={director} key={director.name}/>
          )
        }
      </div>
    </> : null
  )
}
