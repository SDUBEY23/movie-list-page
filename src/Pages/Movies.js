import React from "react";
import Row from "../statefulComponent/Row/Row";
import requests from "../requests";

function Movies() {
  return (
    <>
      <Row
        type="movie"
        title="Netflix Orignals"
        fetchUrl={requests.fetchNetflixOriginal}
        isFirstRowLarge
      />
      <Row
        type="movie"
        title="Popular Movies"
        fetchUrl={requests.fetchLatest}
      />
      <Row
        type="movie"
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        type="movie"
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        type="movie"
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        type="movie"
        title="Romantic Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        type="movie"
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </>
  );
}

export default Movies;
