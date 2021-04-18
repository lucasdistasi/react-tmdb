import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {MovieInfoPage} from "./pages/MovieInfoPage"
import {ShowsPage} from "./pages/ShowsPage";
import {ShowInfoPage} from "./pages/ShowInfoPage";

/*
  TODO - Add a search movie/s functionality => https://developers.themoviedb.org/3/search/multi-search
  TODO - Add a TV Shows page => https://developers.themoviedb.org/3/tv/get-popular-tv-shows
 */

function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/home", "/index"]} exact={true} component={HomePage} />
        <Route path={"/movies/:movieId"} component={MovieInfoPage} />
        <Route path={"/shows"} exact={true} component={ShowsPage} />
        <Route path={"/shows/:showId"} component={ShowInfoPage} />
      </Switch>
    </Router>
  )
}

export default App;
