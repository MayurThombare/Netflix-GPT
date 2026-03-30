import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);
  if (!movieName || !movieResults) return null;
  return (
    <div className="bg-black/90 text-white p-4 m-4  rounded-lg">
      <div>
        {movieName.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
