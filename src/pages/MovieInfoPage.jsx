import {NavbarComponent} from "../components/page/NavbarComponent";
import {FooterComponent} from "../components/page/FooterComponent";
import {MovieInfoComponent} from "../components/movie/MovieInfoComponent";
import {useEffect} from "react";
import {BackToTopComponent} from "../components/common/BackToTopComponent";

export const MovieInfoPage = () => {

  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <>
      <NavbarComponent/>
      <MovieInfoComponent/>
      <BackToTopComponent/>
      <FooterComponent/>
    </>
  )
}
