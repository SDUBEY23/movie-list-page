import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();
  // const API_KEY = "f6d3eed06ab3124976c6ecc8926da3bc";
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=f6d3eed06ab3124976c6ecc8926da3bc&language=en-US`
      );

      setMovieDetails(response.data);
      return response;
    };
    fetchMovieDetail();
  }, [id]);
  console.log(movieDetails);
  return (
    <div>
      <h1>{movieDetails.original_title}</h1>
      <img
        src={`${base_url}${movieDetails.poster_path}`}
        alt={movieDetails.original_title}
      />
    </div>
  );
}

export default Detail;
