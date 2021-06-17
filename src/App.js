import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./Navigation/routes";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Home from "./Pages/Home";
import TvSeries from "./Pages/TvSeries";
import Movies from "./Pages/Movies";
import Detail from "./Pages/Detail";
import Banner from "./statefulComponent/Banner/Banner";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <Banner />
            <Home />
          </Route>
          <Route exact path={ROUTES.TV_SERIES}>
            <Banner />
            <TvSeries />
          </Route>
          <Route exact path={ROUTES.MOVIES}>
            <Banner />
            <Movies />
          </Route>
          <Route exact path="/:id">
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
