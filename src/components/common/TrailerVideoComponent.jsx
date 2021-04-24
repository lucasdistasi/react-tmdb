import FsLightbox from "fslightbox-react";
import {useState} from "react";
import PropTypes from "prop-types";

export const TrailerVideoComponent = ({backgroundImage, width, height, videoKey}) => {

  const [toggler, setToggler] = useState(false)

  return (
    <div
      className="mx-auto flex justify-center items-center rounded-3xl trailer"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: width,
        height: height
      }}
      onClick={() => setToggler(!toggler)}>

      <FsLightbox
        toggler={toggler}
        sources={[
          `https://www.youtube.com/watch?v=${videoKey}`
        ]}
      />

      <div className="logo">
        <div className="youtube">
          <span className="arrow"/>
        </div>
      </div>
    </div>
  )
}

TrailerVideoComponent.propType = {
  backgroundImage: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  videoKey: PropTypes.string
}
