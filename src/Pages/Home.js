import React from "react";
import Row from "../statefulComponent/Row/Row";
import requests from "../requests";

function Home() {
  return (
    <>
      <Row title="New on Netflix" fetchUrl={requests.fetchTrending} />
      <Row title="Coming This Week" fetchUrl={requests.fetchNetflixOriginal} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Popular Movies" fetchUrl={requests.fetchLatest} />
    </>
  );
}

export default Home;
