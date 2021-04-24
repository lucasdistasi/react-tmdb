import {scrollToTop} from "../../constants/constants";
import {faAngleDoubleUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const BackToTopComponent = () => {

  //let backToTopButton = document.getElementById("scrollToTop")

  window.onscroll = () => {
    if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
      document.getElementById("scrollToTop").style.display = "block";
    } else {
      document.getElementById("scrollToTop").style.display = "none";
    }
  }

  return (
    <button onClick={scrollToTop} id="scrollToTop" title="Go to top" className="rounded-full">
      <FontAwesomeIcon icon={faAngleDoubleUp} className="text-2xl"/>
    </button>
  )
}
