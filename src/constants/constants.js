export const HERO_URI = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=`

export const POPULAR_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`

export const POPULAR_SHOWS = ` https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`

export const NO_POSTER = `${process.env.PUBLIC_URL}/no-poster-light.jpg`

export const PERSON_WITHOUT_IMAGE = `${process.env.PUBLIC_URL}/person-without-image.jpg`

export const PERSON_WITHOUT_IMAGE_BIG = `${process.env.PUBLIC_URL}/person-without-image-big.jpg`

export const getPosterPath = (size, imgUri) => {
  return `https://image.tmdb.org/t/p/${size}${imgUri}`
}

export const getProfilePictureUrl = (profilePicture) => {
  if (!profilePicture) {
    return PERSON_WITHOUT_IMAGE
  } else if (profilePicture.includes("gravatar")) {
    if (profilePicture.charAt(0) === "/") {
      profilePicture = profilePicture.slice(1)

      return profilePicture
    }

    return profilePicture
  } else {
    return `https://image.tmdb.org/t/p/w45${profilePicture}`
  }
}

export const getMovieCredits = (movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
}

export const getMovieInfo = (movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
}

export const getShowInfo = (showId) => {
  return `https://api.themoviedb.org/3/tv/${showId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
}

export const getShowEpisodesInfo = (showId, seasonNumber) => {
  return `https://api.themoviedb.org/3/tv/${showId}/season/${seasonNumber}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
}

export const getMovieByPage = (currentPage) => {
  return `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${currentPage + 1}`
}

export const getShowByPage = (currentPage) => {
  return `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${currentPage + 1}`
}

export const getSimilar = (elementType, elementId) => {
  return `https://api.themoviedb.org/3/${elementType}/${elementId}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
}

export const search = (isAdultSearch = false, chosenCriteria = "movie", name) => {
  return `https://api.themoviedb.org/3/search/${chosenCriteria}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1&include_adult=${isAdultSearch}&query=${name}`
}

export const searchByPage = (isAdultSearch = false, chosenCriteria = "movie", name, currentPage) => {
  return `https://api.themoviedb.org/3/search/${chosenCriteria}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${currentPage + 1}&include_adult=${isAdultSearch}&query=${name}`
}

// This is a tweak to remove duplicated elements, beacuse in some cases
// TMBD might return the same movie/show/person in multiple pages
export const filterDuplicatedElements = (elements) => {
  let allElements = elements.map(element => element.id)
  return elements.filter(({id}, index) => !allElements.includes(id, index + 1))
}

export const getReviews = (elementId, elementType) => {
  return `https://api.themoviedb.org/3/${elementType}/${elementId}/reviews?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
}

export const getYoutubeVideos = (elementId, elementType) => {
  return  `https://api.themoviedb.org/3/${elementType}/${elementId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
}

export const getPersonInfo = (personId) => {
  return  `https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
}

export const scrollToTop = () => {
  const position = document.documentElement.scrollTop || document.body.scrollTop;
  if (position > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, position - position / 45);
  }
}

export const getImages = (elementId, elementType) => {
  return  `https://api.themoviedb.org/3/${elementType}/${elementId}/images?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&include_image_language=en`
}

export const getPosterVideoImage = (images) => {
  if (!images || images.length <= 0) {
    return NO_POSTER
  }

  let imagesWithFilePath = images.filter(image => image.file_path)

  if (!imagesWithFilePath && imagesWithFilePath.length <= 0) {
    return NO_POSTER
  } else {
    let randomImage = Math.floor(Math.random() * imagesWithFilePath.length)
    return getPosterPath("w780", imagesWithFilePath[randomImage].file_path)
  }
}
