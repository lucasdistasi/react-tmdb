import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {HomePage} from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/home", "/index"]} exact={true} component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App;
