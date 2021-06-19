import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "./Detail.css";

function Detail() {
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  let genresList;
  let genres = [];

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchMovieDetail = async () => {
      console.log(process.env);
      const response = await axios.get(
        `https://api.themoviedb.org/3/${location.state?.type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );

      setMovieDetails(response.data);
      return response;
    };
    fetchMovieDetail();
  }, [id, location]);
  genres = movieDetails.genres;

  if (genres) {
    genresList = genres.map((g, i) => {
      return (
        <li className="flex" key={g.id}>
          <button className="btn" type="button">
            {g.name}
          </button>
        </li>
      );
    });
  }

  return (
    <div className="detail">
      <div className="detail__container">
        <img
          className="detail__poster"
          src={`${base_url}${movieDetails.poster_path}`}
          alt={movieDetails?.original_name}
        />
      </div>
      <div className="detail__content">
        <h1>
          {movieDetails?.original_name ||
            movieDetails?.original_title ||
            movieDetails?.title}
        </h1>
        <p>{movieDetails?.overview}</p>
        <div className="detail__grid">
          <p>GENRE: {genresList}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
