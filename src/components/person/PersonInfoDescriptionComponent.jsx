export const PersonInfoDescriptionComponent = ({person}) => {

  return (
    <>
      {
        person.biography ?
          <p className="mt-28 text-xl text-center lg:text-justify">
            {person.biography}
          </p> :
          <p className="mt-28 text-xl text-center lg:text-justify">
            No description could be found for {person.name}
          </p>
      }
    </>
  )
}
