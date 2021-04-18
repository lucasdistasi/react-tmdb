import {NavbarComponent} from "../components/page/NavbarComponent";
import {FooterComponent} from "../components/page/FooterComponent";
import {MovieInfoComponent} from "../components/movie/MovieInfoComponent";
import {useEffect} from "react";

export const MovieInfoPage = () => {

  useEffect(() => window.scrollTo(0,0), [])

  return (
    <>
      <NavbarComponent/>
      <MovieInfoComponent />
      <FooterComponent/>
    </>
  )
}
