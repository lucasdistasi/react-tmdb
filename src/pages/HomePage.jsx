import {NavbarComponent} from "../components/NavbarComponent";
import {HeroComponent} from "../components/HeroComponent";
import {MoviesGrid} from "../components/MoviesGrid";
import {FooterComponent} from "../components/FooterComponent";

export const HomePage = () => {

  return (
    <>
      <NavbarComponent/>
      <HeroComponent/>
      <MoviesGrid/>
      <FooterComponent />
    </>
  )
}
