import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
const useNowPlayingMovies = () => {
    // Fetch data from tmdb api nad update the store
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS,
    );

    const json = await data.json();
    console.log(json?.results.map((title)=>title.original_title));

    dispatch(addNowPlayingMovies(json?.results));

    
  };

  useEffect(() => { 
    getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;