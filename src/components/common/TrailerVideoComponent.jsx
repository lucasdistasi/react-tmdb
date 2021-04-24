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
        backgroundSize: "cover",
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

      <div className="banner-container bg-black w-full h-16 md:h-20 lg:h-36 opacity-80 flex justify-center items-center">
        <p className="text-white text-2xl md:text-3xl lg:text-5xl font-bold uppercase opacity-100 trailer-text">Video Trailer</p>
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
