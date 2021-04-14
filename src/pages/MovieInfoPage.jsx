import {NavbarComponent} from "../components/NavbarComponent";
import {FooterComponent} from "../components/FooterComponent";
import {MovieInfoComponent} from "../components/MovieInfoComponent";
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
