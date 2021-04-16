export const HERO_URI = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=`

export const POPULAR_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`

export const getPosterPath = (size, imgUri) => {
  return `https://image.tmdb.org/t/p/${size}/${imgUri}`
}

export const getMovieCredits = (movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
}

export const getMovieInfo = (movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
}

export const getMovieByPage = (currentPage) => {
  return `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${currentPage + 1}`
}
