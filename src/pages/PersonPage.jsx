import {NavbarComponent} from "../components/page/NavbarComponent";
import {FooterComponent} from "../components/page/FooterComponent";
import {PersonDescriptionComponent} from "../components/person/PersonDescriptionComponent";
import {usePersonInformationFetch} from "../hooks/person/usePersonInformationFetch";
import {useParams} from "react-router-dom";

export const PersonPage = () => {

  const {personId} = useParams()
  const [personInformation, loadingPersonInformation, errorPersonInformation] = usePersonInformationFetch(personId)

  return (
    <>
      <NavbarComponent/>
      <PersonDescriptionComponent person={personInformation} />
      <FooterComponent/>
    </>
  )
}
