export const MovieTaglineComponent = ({tagline}) => {

  return (
    tagline ?
      <p className="italic py-6">
        {tagline}
      </p> : null
  )
}
