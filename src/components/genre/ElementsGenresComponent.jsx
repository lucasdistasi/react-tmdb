import {useHistory, useParams} from "react-router-dom";
import {useElementsByGenreFetch} from "../../hooks/genre/useElementsByGenreFetch";
import {CatalogueGridComponent} from "../common/CatalogueGridComponent";
import {filterDuplicatedElements, getElementsByGenre, getElementsByGenreAndPage} from "../../constants/constants";
import {ErrorComponent} from "../page/ErrorComponent";
import {useMovieGenresFetch} from "../../hooks/genre/useMovieGenresFetch";
import {useShowsGenresFetch} from "../../hooks/genre/useShowsGenresFetch";

export const ElementsGenresComponent = () => {

  const {genreId} = useParams();
  let history = useHistory();
  let endpoint;
  let type;
  const [movieGenres] = useMovieGenresFetch()
  const [tvShowGenres] = useShowsGenresFetch()

  let moviesGenreFilter = movieGenres.filter(movie => movie.id == genreId)
  let showGenreFilter = tvShowGenres.filter(show => show.id == genreId)

  let genreName = moviesGenreFilter[0] || showGenreFilter[0] || {name: ""}

  if (window.location.pathname.search("tv/") === 1) {
    endpoint = getElementsByGenre("tv", genreId, 1)
    type = "shows"
  } else if (window.location.pathname.search("movies/") === 1) {
    endpoint = getElementsByGenre("movie", genreId, 1)
    type = "movies"
  } else {
    history.push("/404")
  }

  let title = `${genreName.name} ${type === "shows" ? "Shows" : "Movies"}`

  const [{data, _error, loading}, fetchDataByGenre] = useElementsByGenreFetch(endpoint, type, genreId)

  const loadMoreFunction = () => {
    let urlTypeParam = type === "movies" ? "movie" : "tv"
    fetchDataByGenre(getElementsByGenreAndPage(urlTypeParam, genreId, data.currentPage))
  }

  if (data && data.isInvalid) {
    history.push("/404")
  }

  return (
    _error ? <ErrorComponent /> :
    <CatalogueGridComponent
      elements={filterDuplicatedElements(data.elements)}
      loadMoreFunction={loadMoreFunction}
      isLoading={loading}
      currentPage={data.currentPage}
      totalPages={data.totalPages}
      title={title}
      elementType={data.elementType}
    />
  )
}
