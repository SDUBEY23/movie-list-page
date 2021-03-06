import React from "react";
import Row from "../statefulComponent/Row/Row";
import requests from "../requests";

function TvSeries() {
  return (
    <>
      <Row
        type="tv"
        title="Netflix Orignals"
        isFirstRowLarge
        fetchUrl={requests.fetchNetflixOriginalSeries}
      />
      <Row
        type="tv"
        title="Top Rated Anime Series"
        fetchUrl={requests.fetchTopRatedSeries}
      />
      <Row
        type="tv"
        title="Romantic Series"
        fetchUrl={requests.fetchRomanceSeries}
      />
      <Row
        type="tv"
        title="Comedy Series"
        fetchUrl={requests.fetchComedySeries}
      />
      <Row type="tv" title="Popular Series" fetchUrl={requests.fetchTvSeries} />
    </>
  );
}

export default TvSeries;
