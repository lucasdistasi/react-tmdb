import {useMovieGenresFetch} from "../../hooks/genre/useMovieGenresFetch";
import {useShowsGenresFetch} from "../../hooks/genre/useShowsGenresFetch";
import {GenresGridComponent} from "./GenresGridComponent";

export const GenresComponent = () => {

  const [movieGenres] = useMovieGenresFetch()
  const [tvShowGenres] = useShowsGenresFetch()

  return (
    <div className="container mx-auto bg-gray-50 ">
      <GenresGridComponent elements={movieGenres}
                           title="Movie Genres"
                           additionalClass="movie-genre-card"
                           type="movies"/>
      <GenresGridComponent elements={tvShowGenres}
                           title="TV Show Genres"
                           additionalClass="tvshow-genre-card"
                           type="tv"/>
    </div>
  )
}
