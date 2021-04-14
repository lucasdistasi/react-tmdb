import {NavbarComponent} from "../components/NavbarComponent";
import {HeroComponent} from "../components/HeroComponent";
import {MoviesGrid} from "../components/MoviesGrid";
import {FooterComponent} from "../components/FooterComponent";
import {ErrorComponent} from "../components/ErrorComponent";
import {useMovieGridFetch} from "../hooks/useMovieGridFetch"

export const HomePage = () => {

  const [{_error}] = useMovieGridFetch()

  return (
    <>
      <NavbarComponent/>

      {
        _error ? <ErrorComponent /> :
          <>
            <HeroComponent/>
            <MoviesGrid/>
          </>
      }

      <FooterComponent />
    </>
  )
}
