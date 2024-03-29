import PropTypes from "prop-types";

export const HomePageComponent = ({homepage, title}) => {

  return (
    homepage ?
      <div className="mt-10 text-center">
        <p className="font-mono text-lg font-semibold text-gray-700">Movie Site</p>
        <a href={homepage} className="text-blue-600 hover:underline" target="_blank"
           rel="noreferrer">{title}</a>
      </div> : null
  )
}

HomePageComponent.prototype = {
  homepage: PropTypes.string,
  title: PropTypes.string
}
