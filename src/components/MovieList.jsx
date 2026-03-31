import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("movies", movies);
  if (!movies || movies.length === 0) return null;
  return (
    <div className="px-6" >
       <h1 className="text-lg md:text-3xl text-white py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
       
        <div className="flex gap-4">
          {movies.map((movie) => (
            <MovieCard posterPath={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
