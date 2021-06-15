import Row from "./components/Row";
import requests from "./requests";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Navbar</h1>
      <Row title="New on Netflix" fetchUrl={requests.fetchTrending} />
      <Row title="Coming This Week" fetchUrl={requests.fetchNetflixOriginal} />
      <Row title="Coming Next Week" fetchUrl={requests.fetchTopRated} />
      <Row title="Popular Movies" fetchUrl={requests.fetchLatest} />
    </div>
  );
}

export default App;
