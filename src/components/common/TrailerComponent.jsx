import React from 'react';
import MediaQuery from "react-responsive/src";
import {TrailerVideoComponent} from "./TrailerVideoComponent";
import PropTypes from "prop-types";
import {getPosterVideoImage} from "../../constants/constants";
import {useImagesFetch} from "../../hooks/common/useImagesFetch";

export const TrailerComponent = ({trailers, elementId, elementType}) => {

  const hasTrailers = trailers && trailers.length > 0
  const [images] = useImagesFetch(elementId, elementType)

  const getRandomTrailer = () => {
    if (hasTrailers) {
      let randomTrailer = Math.floor(Math.random() * trailers.length)
      return trailers[randomTrailer]
    }
  }

  return (
    hasTrailers ?
      <>
        <MediaQuery minWidth={1360}>
          <TrailerVideoComponent backgroundImage={getPosterVideoImage(images)}
                                 width={"1280px"}
                                 height={"720px"}
                                 video={getRandomTrailer() && getRandomTrailer()}/>
        </MediaQuery>

        <MediaQuery minWidth={650} maxWidth={1359}>
          <TrailerVideoComponent backgroundImage={getPosterVideoImage(images)}
                                 width={"640px"}
                                 height={"480px"}
                                 video={getRandomTrailer() && getRandomTrailer()}/>
        </MediaQuery>

        <MediaQuery minWidth={490} maxWidth={649}>
          <TrailerVideoComponent backgroundImage={getPosterVideoImage(images)}
                                 width={"480px"}
                                 height={"360px"}
                                 video={getRandomTrailer() && getRandomTrailer()}/>
        </MediaQuery>

        <MediaQuery minWidth={330} maxWidth={489}>
          <TrailerVideoComponent backgroundImage={getPosterVideoImage(images)}
                                 width={"320px"}
                                 height={"180px"}
                                 video={getRandomTrailer() && getRandomTrailer()}/>
        </MediaQuery>

        <MediaQuery minWidth={100} maxWidth={329}>
          <TrailerVideoComponent backgroundImage={getPosterVideoImage(images)}
                                 width={"120px"}
                                 height={"90px"}
                                 video={getRandomTrailer() && getRandomTrailer()}/>
        </MediaQuery>
      </> : null
  )
}

TrailerComponent.propType = {
  trailers: PropTypes.array,
  elementId: PropTypes.number,
  elementType: PropTypes.string
}
