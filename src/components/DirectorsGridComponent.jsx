import {DirectorComponent} from "./DirectorComponent";

export const DirectorsGridComponent = ({directors}) => {

  const hasDirectors = directors.length > 0

  return (
    hasDirectors &&
    <>
      <h1 className="text-center text-4xl py-6">Directors</h1>
      <div className="flex flex-col lg:flex-row lg:flex-wrap items-center lg:justify-center py-5">
        {
          directors.map(director =>
            <DirectorComponent director={director} key={director.name}/>
          )
        }
      </div>
    </>
  )
}
