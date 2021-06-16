import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "../axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, type }) {
  const [movies, setMovies] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => history.push(`/${movie.id}`, { type })}
              className="row__poster"
              src={`${base_url}${movie.backdrop_path}`}
              alt={movie.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
