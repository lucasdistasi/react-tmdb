import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {MovieInfoPage} from "./pages/MovieInfoPage"

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
