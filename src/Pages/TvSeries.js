import React from "react";
import Row from "../components/Row";
import requests from "../requests";

function TvSeries() {
  return (
    <>
      <Row title="New on Netflix" fetchUrl={requests.fetchTrending} />
      <Row title="Coming This Week" fetchUrl={requests.fetchNetflixOriginal} />
      <Row
        title="Top Rated Anime Series"
        fetchUrl={requests.fetchTopRatedSeries}
      />
      <Row title="Romantic Series" fetchUrl={requests.fetchRomanceSeries} />
      <Row title="Comedy Series" fetchUrl={requests.fetchComedySeries} />
      <Row title="Popular Series" fetchUrl={requests.fetchTvSeries} />
    </>
  );
}

export default TvSeries;
