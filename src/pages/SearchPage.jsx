import {NavbarComponent} from "../components/page/NavbarComponent";
import {FooterComponent} from "../components/page/FooterComponent";
import {SearchFormComponent} from "../components/search/SearchFormComponent";

export const SearchPage = () => {

  return (
    <>
      <NavbarComponent/>
      <SearchFormComponent />
      <FooterComponent/>
    </>
  )
}
