import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {MovieInfoPage} from "./pages/MovieInfoPage"
import {ShowsPage} from "./pages/ShowsPage";
import {ShowInfoPage} from "./pages/ShowInfoPage";
import {NotFoundComponent} from "./components/page/NotFoundComponent";
import {SearchPage} from "./pages/SearchPage";
import {PersonPage} from "./pages/PersonPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/home", "/index"]} exact={true} component={HomePage} />
        <Route path={"/movies/:movieId"} exact={true} component={MovieInfoPage} />
        <Route path={"/shows"} exact={true} component={ShowsPage} />
        <Route path={"/shows/:showId"} exact={true} component={ShowInfoPage} />
        <Route path={"/people/:personId"} exact={true} component={PersonPage} />
        <Route path={"/search"} exact={true} component={SearchPage} />
        <Route component={NotFoundComponent} />
      </Switch>
    </Router>
  )
}

export default App;
