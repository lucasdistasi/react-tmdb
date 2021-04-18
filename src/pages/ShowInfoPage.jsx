import {NavbarComponent} from "../components/NavbarComponent";
import {FooterComponent} from "../components/FooterComponent";
import {useEffect} from "react";
import {ShowInfoComponent} from "../components/show/ShowInfoComponent";

export const ShowInfoPage = () => {

  useEffect(() => window.scrollTo(0,0), [])

  return (
    <>
      <NavbarComponent/>
      <ShowInfoComponent />
      <FooterComponent/>
    </>
  )
}
