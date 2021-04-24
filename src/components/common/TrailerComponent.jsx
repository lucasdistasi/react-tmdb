import React from 'react';
import MediaQuery from "react-responsive/src";
import {TrailerVideoComponent} from "./TrailerVideoComponent";
import PropTypes from "prop-types";

export const TrailerComponent = ({trailers}) => {

  const hasTrailers = trailers && trailers.length > 0

  const getRandomTrailer = () => {
    if (hasTrailers) {
      let randomTrailer = Math.floor(Math.random() * trailers.length)
      return trailers[randomTrailer].key
    }
  }

  let videoKey = hasTrailers ? getRandomTrailer() || trailers[0].key : null

  // 120x90
  const extraSmallDevices = `https://img.youtube.com/vi/${getRandomTrailer() && getRandomTrailer()}/default.jpg`
  // 320x180
  const smallDevices = `https://img.youtube.com/vi/${getRandomTrailer() && getRandomTrailer()}/mqdefault.jpg`
  // 480x360
  const mediumDevices = `https://img.youtube.com/vi/${getRandomTrailer() && getRandomTrailer()}/hqdefault.jpg`
  // 640x480
  const largeDevices = `https://img.youtube.com/vi/${getRandomTrailer() && getRandomTrailer()}/sddefault.jpg`
  // 1280x720
  const extraLargeDevices = `https://img.youtube.com/vi/${getRandomTrailer() && getRandomTrailer()}/maxresdefault.jpg`


  return (
    hasTrailers && videoKey ?
    <>
      <MediaQuery minWidth={1360}>
        <TrailerVideoComponent backgroundImage={extraLargeDevices}
                               width={"1280px"}
                               height={"720px"}
                               videoKey={getRandomTrailer() && getRandomTrailer()}/>
      </MediaQuery>

      <MediaQuery minWidth={650} maxWidth={1359}>
        <TrailerVideoComponent backgroundImage={largeDevices}
                               width={"640px"}
                               height={"480px"}
                               videoKey={getRandomTrailer() && getRandomTrailer()}/>
      </MediaQuery>

      <MediaQuery minWidth={490} maxWidth={649}>
        <TrailerVideoComponent backgroundImage={mediumDevices}
                               width={"480px"}
                               height={"360px"}
                               videoKey={getRandomTrailer() && getRandomTrailer()}/>
      </MediaQuery>

      <MediaQuery minWidth={330} maxWidth={489}>
        <TrailerVideoComponent backgroundImage={smallDevices}
                               width={"320px"}
                               height={"180px"}
                               videoKey={getRandomTrailer() && getRandomTrailer()}/>
      </MediaQuery>

      <MediaQuery minWidth={100} maxWidth={329}>
        <TrailerVideoComponent backgroundImage={extraSmallDevices}
                               width={"120px"}
                               height={"90px"}
                               videoKey={getRandomTrailer() && getRandomTrailer()}/>
      </MediaQuery>
    </> : null
  )
}

TrailerComponent.propType = {
  trailers: PropTypes.array
}
