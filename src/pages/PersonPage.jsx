import {NavbarComponent} from "../components/page/NavbarComponent";
import {FooterComponent} from "../components/page/FooterComponent";
import {PersonDescriptionComponent} from "../components/person/PersonDescriptionComponent";
import {usePersonInformationFetch} from "../hooks/person/usePersonInformationFetch";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

export const PersonPage = () => {

  const {personId} = useParams()
  const [personInformation, loadingPersonInformation, errorPersonInformation] = usePersonInformationFetch(personId)

  useEffect(() => window.scrollTo(0,0), [])

  return (
    <>
      <NavbarComponent/>
      <PersonDescriptionComponent person={personInformation} isLoading={loadingPersonInformation} hasErrors={errorPersonInformation} />
      <FooterComponent/>
    </>
  )
}
