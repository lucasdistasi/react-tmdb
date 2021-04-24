import {NavbarComponent} from "../components/page/NavbarComponent";
import {FooterComponent} from "../components/page/FooterComponent";
import {SearchFormComponent} from "../components/search/SearchFormComponent";
import {BackToTopComponent} from "../components/common/BackToTopComponent";

export const SearchPage = () => {

  return (
    <>
      <NavbarComponent/>
      <SearchFormComponent/>
      <BackToTopComponent/>
      <FooterComponent/>
    </>
  )
}
