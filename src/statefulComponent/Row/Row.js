import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "../../axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, type, isFirstRowLarge }) {
  const [shows, setShows] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setShows(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {shows?.map((show) => {
          return (
            <img
              key={show.id}
              onClick={() => history.push(`/${show.id}`, { type })}
              className={`row__poster ${isFirstRowLarge && "row__posterLarge"}`}
              src={`${base_url}${
                isFirstRowLarge ? show?.poster_path : show?.backdrop_path
              }`}
              alt={show?.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
