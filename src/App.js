import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {MovieInfoPage} from "./pages/MovieInfoPage"

/*
  TODO - Add a search movie/s functionality => https://developers.themoviedb.org/3/search/multi-search
  TODO - Add a TV Shows page => https://developers.themoviedb.org/3/tv/get-top-rated-tv
 */

function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/home", "/index"]} exact={true} component={HomePage} />
        <Route path={"/movies/:movieId"} component={MovieInfoPage} />
      </Switch>
    </Router>
  )
}

export default App;
