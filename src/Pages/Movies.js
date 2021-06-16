import React from "react";
import Row from "../components/Row";
import requests from "../requests";

function Movies() {
  return (
    <>
      <Row title="New on Netflix" fetchUrl={requests.fetchTrending} />
      <Row title="Coming This Week" fetchUrl={requests.fetchNetflixOriginal} />
      <Row title="Popular Movies" fetchUrl={requests.fetchLatest} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default Movies;
