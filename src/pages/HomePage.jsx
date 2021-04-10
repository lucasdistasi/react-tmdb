import {NavbarComponent} from "../components/NavbarComponent";
import {HeroComponent} from "../components/HeroComponent";
import {MoviesGrid} from "../components/MoviesGrid";

export const HomePage = () => {

  return (
    <>
      <NavbarComponent/>
      <HeroComponent/>
      <MoviesGrid/>
    </>
  )
}
