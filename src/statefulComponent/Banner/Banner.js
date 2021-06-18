import React, { useEffect, useState } from "react";
import requests from "../../requests";
import axios from "../../axios";
import "./Banner.css";
import { useLocation } from "react-router";

function Banner() {
  const [movie, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, [location]);

  function truncate(string, numberOfCharacters) {
    return string?.length > numberOfCharacters
      ? string.substr(0, numberOfCharacters - 1) + "..."
      : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
