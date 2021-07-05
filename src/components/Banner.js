import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.table(movie);

  let mov_desc = new String(movie.overview);

  if (mov_desc.length > 150) {
    mov_desc = mov_desc.substring(0, 150) + "...";
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
                )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button"> Play </button>
          <button className="banner__button"> My List </button>
        </div>
        <h1 className="banner__description">{mov_desc}</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
//
