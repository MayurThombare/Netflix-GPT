import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-[10%] pl-4 relative z-20">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />

        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
        <MovieList title="Trending" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
