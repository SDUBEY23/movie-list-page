import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./Navigation/routes";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import TvSeries from "./Pages/TvSeries";
import Movies from "./Pages/Movies";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
          <Route exact path={ROUTES.TV_SERIES}>
            <TvSeries />
          </Route>
          <Route exact path={ROUTES.MOVIES}>
            <Movies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
