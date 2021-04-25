import {NavbarComponent} from "../components/page/NavbarComponent";
import {FooterComponent} from "../components/page/FooterComponent";
import {useEffect} from "react";
import {ShowInfoComponent} from "../components/show/ShowInfoComponent";
import {BackToTopComponent} from "../components/common/BackToTopComponent";

export const ShowInfoPage = () => {

  useEffect(() => window.scrollTo(0,0), [])

  return (
    <>
      <NavbarComponent/>
      <ShowInfoComponent />
      <BackToTopComponent/>
      <FooterComponent/>
    </>
  )
}
